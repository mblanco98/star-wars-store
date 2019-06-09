<template>
  <el-container>
    <el-main>
      <el-tabs type="border-card">
        <el-tab-pane v-for="(tab, i) in tabs" :key="i" :label="tab[0]">
          <div class="ch-wrapper">
            <h1 class="title">
              {{ tab[0] }}
            </h1>
            <el-row :gutter="20">
              <el-col
                v-for="(ch, ind) in currentlyPropViewing"
                :key="ind"
                :span="4"
              >
                <div class="grid-content bg-purple">
                  <el-card shadow="hover">
                    <header slot="header">
                      {{ ch.name }}
                      <div class="flo-right">
                        <nuxt-link :to="ch.url">
                          <small>See profile<i class="el-icon-eye"/></small>
                        </nuxt-link>
                      </div>
                    </header>
                    <div>
                      <h4 class="title">
                        Information<i class="el-icon-s-data" />
                      </h4>
                    </div>
                    <el-tag size="mini">Height: {{ ch.height }}</el-tag>
                    <el-tag size="mini">Eye color: {{ ch.eye_color }}</el-tag>
                    <el-tag size="mini">Mass: {{ ch.mass }}</el-tag>
                    <el-tag size="mini">Birth year: {{ ch.birth_year }}</el-tag>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data: () => ({
    tabs: [
      ['Planets', 'som'],
      ['Spaceships', 'som'],
      ['Vehicles', 'som'],
      ['People', 'som']
    ]
  }),
  computed: {
    currentlyPropViewing() {
      return this.$store.state.storeDept.characters
    }
  },
  async asyncData({ store }) {
    await store.dispatch(`storeDept/getAllCharacters`)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/store-dept.scss';
</style>
