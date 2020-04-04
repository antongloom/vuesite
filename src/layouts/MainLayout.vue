<template lang="pug">
  v-card( flat tile)
    v-toolbar(dense='')
      v-toolbar-title 
        router-link(to="/" tag="div") Title
      v-spacer
      router-link(to="/" tag="div") 
        v-btn(class="ma-2" text color="black") Главная
      router-link(to="/auth" tag="div")
        v-btn(class="ma-2" outlined color="blue") Войти
      router-link(to="/registration" tag="div") 
        v-btn(class="ma-2" outlined color="blue") Регистрация
    v-container
      router-view 

</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      
    }
  },
};
</script>

<style lang="less">

</style>
