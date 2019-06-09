<template>
  <div class="navbar-wrapper">
    <h1 class="title">
      Star Wars items category:
    </h1>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="(item, i) in availableItems"
        :key="i"
        :index="`${i}`"
      >
        {{ item }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    activeIndex: '0',
    availableItems: ['People', 'Planets', 'Vehicules', 'Starships']
  }),
  methods: {
    handleSelect(key) {
      this.$store.dispatch('shop/tabOnViewChanged', this.availableItems[key])
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/navbar.scss';
</style>
