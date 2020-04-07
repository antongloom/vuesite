<template lang="pug">
  div
    h1 Личный кабинет пользователя
    v-btn(color="primary" @click="LogoutUser") Выход
</template>

<script>

export default {
  name: 'Dashboard',
  components: {

  },
  methods: {
    LogoutUser() {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>
