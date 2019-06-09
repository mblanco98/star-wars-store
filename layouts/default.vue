<template>
  <el-container class="app-main-wrapper">
    <c-sidebar :class="classBaseOnThemeState" />
    <el-container>
      <el-main>
        <el-header v-show="!isNotDashboard">
          <c-navbar />
        </el-header>
        <nuxt />
      </el-main>
      <div class="btn-theme-changer-wrapper">
        <el-button
          type="primary"
          :icon="baseOnThemeState"
          circle
          @click="switchTheme"
        />
      </div>
    </el-container>
  </el-container>
</template>
<script>
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import theme from '../mixins/theme'

export default {
  components: {
    'c-sidebar': Sidebar,
    'c-navbar': Navbar
  },
  mixins: [theme],
  computed: {
    baseOnThemeState() {
      return this.dark ? 'el-icon-moon' : 'el-icon-sunny'
    },
    isNotDashboard() {
      if (this.$route.path === '/') {
        return true
      } else return false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layouts/default.scss';
</style>
