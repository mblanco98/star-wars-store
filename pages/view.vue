<template>
  <div class="view-wrapper">
    <el-row :gutter="20">
      <el-col v-for="(ch, i) in currentlyPropViewing" :key="i" :span="8">
        <el-card shadow="hover">
          <header slot="header">
            {{ ch.name }}
            <div class="flo-right">
              <el-link :underline="false" @click="viewSelectedItem(i)">
                <i class="fas fa-eye" />
              </el-link>
            </div>
          </header>
          <div>
            <h4 class="title">
              Information
              <span class="icon">
                <i class="far fa-file-alt"></i>
              </span>
            </h4>
          </div>

          <el-tag size="mini">
            <template v-if="ch.height">
              Height: {{ ch.height }}
            </template>
            <template v-else-if="ch.model">
              Model: {{ ch.model }}
            </template>
            <template v-else-if="ch.gravity">
              Gravity: {{ ch.gravity }}
            </template>
          </el-tag>

          <el-tag size="mini">
            <template v-if="ch.eye_color">
              Eye color: {{ ch.eye_color }}
            </template>
            <template v-else-if="ch.terrain">
              Terrain: {{ ch.terrain }}
            </template>
            <template v-else-if="ch.manufacturer">
              Manufacturer: {{ ch.manufacturer }}
            </template>
          </el-tag>

          <el-tag size="mini">
            <template v-if="ch.gender">
              Gender: {{ ch.gender === 'n/a' ? 'robot' : ch.gender }}
            </template>
            <template v-else-if="ch.cargo_capacity">
              Cargo capacity: {{ ch.cargo_capacity }}
            </template>
            <template v-else-if="ch.climate">
              Climate: {{ ch.climate }}
            </template>
          </el-tag>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import theme from '../mixins/theme'

export default {
  mixins: [theme],
  data: () => ({
    activeTab: '0'
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
  },
  methods: {
    viewSelectedItem(index) {
      // eslint-disable-next-line
      console.log(this.$store.state.shop[`${this.prop.toLowerCase()}`][index])
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/shop.scss';
</style>
