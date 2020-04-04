<template lang="pug">
  v-app
    component(:is='layout')
      router-view
</template>



<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'

export default {
  data() {
    return {
    }
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  },
  components: {
    EmptyLayout,
    MainLayout
  }
}
</script>
<style lang="less">


</style>