<template>
  <section class="container">
    <h1 class="title">
      DRAG N' DROP API
    </h1>
    <list />
  </section>
</template>

<script>
import List from '~/components/List'

export default {
  components: {
    List
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/pages/index.scss';
</style>
