<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    router
    @select="handleSelect"
  >
    <el-menu-item v-for="(item, i) in navLinks" :key="i" :index="item.url">
      <nuxt-link :to="item.url">
        {{ item.label }}
      </nuxt-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    activeIndex: '/',
    navLinks: [
      {
        label: 'Dashboard',
        url: '/'
      },
      {
        label: 'Store department',
        url: '/store-dept'
      }
    ]
  }),
  methods: {
    handleSelect(e) {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/navbar.scss';
</style>
