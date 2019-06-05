<script>
export default {
  computed: {
    dark() {
      return this.$store.state.dark
    },
    classBaseOnThemeState() {
      return { light: !this.dark, dark: this.dark }
    }
  },
  methods: {
    switchTheme() {
      return this.$store.dispatch('switchDark')
    }
  }
}
</script>
