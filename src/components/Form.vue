<template lang="pug">
	div.form
		h1 {{info.title}}
		v-form(ref="form" v-model="valid" lazy-validation)
			v-text-field(
				v-if="!info.userExisit"
				v-model="name"
				:rules="nameRules"
				label="Введите имя"
				required
			)
			v-text-field(
				v-if="!info.userExisit"
				v-model="email"
				:rules="emailRules"
				label="Введите E-mail"
				required
			)
			v-text-field(
				v-model="login"
				:rules="loginRules"
				label="Введите Логин"
				required
			)
			v-text-field(
				v-model="password"
				:rules="passwordRules"
				label="Введите Пароль"
				:append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
				:type="show ? 'text' : 'password'"
				@click:append = "show != show"
				required
			)
			v-btn(v-if="info.userExisit" :disabled='!valid' @click="submitAuth" color="green") {{info.btn}}
			v-btn(v-else :disabled='!valid' @click="submitReg" color="green") {{info.btn}}
</template>	

<script>

export default {
  name: 'Form',
	props: ['info'],
  data: () => ({
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
		submitReg(){
			if (this.$refs.form.validate()) {
				this.$emit('userReg', {
					name: this.name,
					email: this.email,
					login: this.login,
					password: this.password
				})
				this.$refs.form.reset()
			}
		},
		submitAuth() {
				if (this.$refs.form.validate()) {
					this.$emit('userAuth', {
						login: this.login,
						password: this.password
					})
				}
		}
	}
}
</script>

<style lang="less">
	.form {
		padding-top: 70px;
	}
</style>
