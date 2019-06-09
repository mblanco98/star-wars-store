<template>
  <div class="view-wrapper">
    <div class="ch-wrapper">
      <el-row :gutter="20">
        <el-col v-for="(ch, ind) in currentlyPropViewing" :key="ind" :span="4">
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
                <h4 class="title">Information<i class="el-icon-s-data" /></h4>
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
  </div>
</template>

<script>
import theme from '../mixins/theme'

export default {
  mixins: [theme],
  data: () => ({
    activeTab: '0',
    tabs: [
      ['People', 'som'],
      ['Planets', 'som'],
      ['Vehicles', 'som'],
      ['Spaceships', 'som']
    ]
  }),
  computed: {
    prop() {
      return this.$store.state.shop.tabOnView
    },
    currentlyPropViewing() {
      return this.$store.state.shop[`${this.prop.toLowerCase()}`]
    }
  },
  async asyncData({ store }) {
    await store.dispatch('shop/getAllPeople')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/shop.scss';
</style>
