<template lang="pug">
  div.registaration
    Form(@userAuth = "onSubmit" :info="text")  
</template>

<script>
import Form from '@/components/Form'
import axios from 'axios'

export default {
  name: 'Registration',
  data() {
    return {
      text: {
        title: 'Форма авторизации',
        btn: 'Войти в кабинет',
        userExisit: true
      }
    }
  },
  components: {
    Form
  },

  methods: {
    async onSubmit (userAuth) {
       try {
          const res = await axios.post('http://localhost:3000/account/auth', userAuth);
            /*if(res.data.success){
              //this.$router.push('/auth')
              console.log(res.data)
            } else {
              console.log(res.data.msg)
            } */
            //res.data.token
           // res.data.user
           console.log(res)
           localStorage.setItem('token', res.data.token)
           localStorage.setItem('user', JSON.stringify(res.data.user))
        } catch(error) {
          console.log(error)
        }
    }
  }
}
</script>
