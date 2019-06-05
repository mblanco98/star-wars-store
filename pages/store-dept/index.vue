<template>
  <el-container>
    <el-main>
      <div class="ch-wrapper">
        <h1 class="title">
          Characters
        </h1>
        <el-row :gutter="20">
          <el-col v-for="(ch, i) in characters" :key="i" :span="4">
            <div class="grid-content bg-purple">
              <el-card shadow="hover">
                <header slot="header">
                  {{ ch.name }}
                </header>
                <div>
                  <h4 class="title">Information<i class="el-icon-s-data" /></h4>
                </div>
                <el-tag size="mini">Height: {{ ch.height }}</el-tag>
                <el-tag size="mini">Eye color: {{ ch.eye_color }}</el-tag>
                <el-tag size="mini">Mass: {{ ch.mass }}</el-tag>
                <el-tag size="mini">Birth year: {{ ch.birth_year }}</el-tag>
                <el-tag size="mini">
                  Specie: <el-link :href="ch.species[0]" target="_blank" />
                </el-tag>
                <!-- {{ ch }} -->
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  computed: {
    characters() {
      return this.$store.state.storeDept.characters
    }
  },
  created() {
    this.$store.dispatch('storeDept/getAllCharacters')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/store-dept.scss';
</style>
