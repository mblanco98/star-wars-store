<template>
  <div class="app-main-wrapper" :class="classBaseOnThemeState">
    <c-navbar :class="classBaseOnThemeState" />
    <nuxt />
    <el-button
      class="btn-theme-changer"
      type="primary"
      :icon="baseOnThemeState"
      circle
      @click="switchTheme"
    />
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
import theme from '../mixins/theme'

export default {
  components: {
    'c-navbar': Navbar
  },
  mixins: [theme],
  computed: {
    baseOnThemeState() {
      return this.dark ? 'el-icon-moon' : 'el-icon-sunny'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layouts/default.scss';
</style>
