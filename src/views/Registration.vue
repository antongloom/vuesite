<template lang="pug">
  div.registaration
    Form(@userReg = "onSubmit" :info="text")  
</template>

<script>
import Form from '@/components/Form'
import axios from 'axios'

export default {
  name: 'Registration',
  data() {
    return {
      text: {
        title: 'Форма регистрации',
        btn: 'Зарегистрироваться',
        userExisit: false
      }
    }
  },
  components: {
    Form
  },

  methods: {
    async onSubmit (user) {
        try {
          const res = await axios.post('http://localhost:3000/account/reg', user);
            if(res.data.success){
              this.$router.push('/auth')
            } else {
              console.log(res.data.msg)
            } 
        } catch(error) {
          console.log(error)
        } 
    }
  }
}
</script>
