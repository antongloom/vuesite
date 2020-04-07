<template lang="pug">
  div.registaration
    div(v-if="!errorExisit").info-error {{errorText}}
    Form(@userAuth = "onSubmit" :info="text")  
</template>

<script>
import Form from '@/components/Form'
import axios from 'axios'

export default {
  name: 'Registration',
  data() {
    return {
      errorExisit: true,
      errorText: '',
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
           if(res.data.token){
             localStorage.setItem('token', res.data.token)
             localStorage.setItem('user', JSON.stringify(res.data.user))
             this.$router.push('/dashboard')
           } else {
             this.errorExisit = res.data.success
             this.errorText = res.data.msg
             setTimeout(()=>{this.errorExisit = true}, 3000) 
           }
        } catch(error) {
          console.log(error)
        }
    }
  }
}
</script>

<style lang="less">
    .registaration{
        position: relative;
    }
    .info-error{
        width: 100%;
        background: rgba(255, 0, 0, 0.7);
        color: #000;
        padding: 15px;
        box-sizing: border-box;
        line-height: 30px;
        border-radius: 7px;
        font-size: 20px;
        position: absolute;
        top: 0px;
    }
</style>
