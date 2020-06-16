<template>
  <div>
    <base-info-card
      :title="title"
      :subtitle="subtitle"
      space="4"
      color="primary"
    />

    <base-text-field
      id="username"
      v-model="signupData.username"
      label="ID"
      required
    />

    <base-text-field
      id="email"
      v-model="signupData.email"
      label="Email"
    />

    <base-text-field
      id="password1"
      v-model="signupData.password1"
      type="password"
      label="Password"
      required
    />

    <base-text-field
      id="password2"
      v-model="signupData.password2"
      type="password"
      label="Password confirmation"
      required
    />

    <base-btn
      :color="!theme.isDark ? 'accent' : 'white'"
      outlined
      target="_blank"
      @click="signup"
    >
      Signup
    </base-btn>
  </div>
</template>

<script>
  export default {
    name: 'BaseSignupForm',
    // Injected from the Vuetify Themeable mixin
    inject: ['theme'],

    props: {
      subtitle: String,
      title: {
        type: String,
        default: 'SignUp',
      },
    },
    provide () {
      const my = {}
      Object.defineProperty(my, 'age', {
        enumerable: true,
        get: () => this.age,
      })
      return { my }
    },
    data () {
      return {
        signupData: {
          username: null,
          email: null,
          password1: null,
          password2: null,
        },
      }
    },
    methods: {
      signup () {
        this.$emit('submit-signup-data', this.signupData)
        console.log(this.signupData)
      },
    },
  }
</script>
