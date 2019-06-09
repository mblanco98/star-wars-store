<template>
  <el-aside class="sidebar-panel">
    <div class="social-links-wrapper">
      <el-button
        v-for="(link, i) in socialLinks"
        :key="i"
        :icon="link.icon"
        circle
      >
        <el-link :underline="false" :href="link.url" target="_blank" />
      </el-button>
    </div>
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
  </el-aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data: () => ({
    navLinks: [
      {
        label: 'Dashboard',
        url: '/'
      },
      {
        label: 'Store',
        url: '/view'
      }
    ],
    socialLinks: [
      {
        icon: 'fab fa-twitter',
        url: 'https://twitter.com/_manAbl'
      },
      {
        icon: 'fab fa-stack-overflow',
        url: 'https://stackoverflow.com/users/9128767'
      },
      {
        icon: 'fab fa-free-code-camp',
        url: 'https://www.freecodecamp.org/manabl'
      },
      {
        icon: 'fab fa-github',
        url: 'https://github.com/manAbl'
      }
    ]
  }),
  computed: {
    activeIndex() {
      return this.$route.path
    }
  },
  methods: {
    handleSelect(e) {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/sidebar.scss';
</style>
