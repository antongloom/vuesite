<template lang="pug">
  div.form
    h1 Форма регистрации
    v-form(ref='form', v-model='valid', lazy-validation='')
      v-text-field(
        v-model='name' 
        :rules='nameRules'  
        label='Введите Имя'
        required
      )
      v-text-field(
        v-model='email' 
        :rules='emailRules' 
        label='Введите E-mail' 
        required=''
      )
      v-text-field(
        v-model='login' 
        :rules='loginRules'  
        label='Введите Логин' 
        required
      )
      v-text-field(
        v-model='password' 
        :rules='passwordRules'  
        label='Введите Пароль' 
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        @click:append="show = !show"
        required
      )
      v-btn(
        :disabled='!valid'
        @click='submit'
        color="green"
      ) Зарегистрироваться
</template>

<script>
import axios from 'axios'

export default {
  name: 'Registration',
  data: () => ({
      test: '',
      valid: true,
      show: false,
      name: '',
      nameRules: [
        v => !!v || 'Имя не должно быть пустым',
        v => (v && v.length <= 10) || 'Имя не должно превышть 10 символов'
      ],

      login: '',
      loginRules: [
        v => !!v || 'Имя не должно быть пустым',
        v => (v && v.length <= 10) || 'Логин не должно превышть 10 символов'
      ],

      password: '',
      passwordRules: [
        v => !!v || 'Имя не должно быть пустым',
        v => (v && v.length <= 10) || 'Пароль не должно превышть 10 символов'
      ],

      email: '',
      emailRules: [
        v => !!v || 'E-mail не должен быть пустым',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail не верен!'
      ]
    }),

    methods: {
      async submit () {
        if (this.$refs.form.validate()) {
          const user = {
            name: this.name,
            email: this.email,
            login: this.login,
            password: this.password
          }
          try {
            const res = await axios.post('http://localhost:3000/account/reg', user);
              if(res.data.success){
                this.$router.push('/auth')
                this.$refs.form.reset()
              } else {
                console.log(res.data.msg)
              } 
          } catch(error) {
            console.log(error)
          } 
        }
      }
    }
}
</script>
