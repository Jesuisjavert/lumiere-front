<template>
  <div v-if="!isLogined">
    <base-info-card
      :title="title"
      :subtitle="subtitle"
      space="4"
      color="primary"
    />

    <base-text-field
      id="username"
      v-model="username"
      label="Username"
      required
    />

    <base-text-field
      id="password"
      v-model="password"
      type="password"
      label="Password"
      required
    />
    <base-btn
      :color="!theme.isDark ? 'accent' : 'white'"
      outlined
      target="_blank"
      type="submit"
      @click="login"
    >
      Login
    </base-btn>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="450"
    >
      <template v-slot:activator="{ on, $attrs }">
        <base-btn
          :color="!theme.isDark ? 'accent' : 'white'"
          outlined
          type="submit"
          v-bind="$attrs"
          v-on="on"
        >
          Sign up
        </base-btn>
      </template>
      <v-card>
        <v-card-title
          class="headline"
        >
          Signup
        </v-card-title>
        <base-text-field
          id="username"
          v-model="username"
          label="Username"
          space="4"
          required
          class="mx-4"
        />
        <base-text-field
          id="password1"
          v-model="password1"
          type="password"
          label="Password1"
          class="mx-4"
          required
        />
        <base-text-field
          id="password2"
          v-model="password2"
          type="password"
          label="Password2"
          class="mx-4"
          required
        />
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="green darken-1"
            text
            @click="signup"
          >
            Signup
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Exit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <div v-else>
    <h4> 로그인 되었습니다. </h4>
    <a
      @click="logout"
    >
      logout
    </a>
  </div>
</template>

<script>
  import axios from 'axios'

  const API_URL = 'http://127.0.0.1:8000'

  export default {
    name: 'BaseLoginForm',
    // Injected from the Vuetify Themeable mixin
    inject: ['theme'],

    props: {
      subtitle: String,
      title: {
        type: String,
        default: 'Login',
      },
    },
    data () {
      return {
        username: null,
        email: null,
        password: null,
        dialog: false,
        password1: null,
        password2: null,
      }
    },
    created () {
      this.logincheck()
    },
    methods: {
      cookies_set (key) {
        this.$cookies.set('auth-token', key)
        this.isLogined = true
      },
      login () {
        const loginData = {
          username: this.username,
          password: this.password,
        }
        axios.post(API_URL + '/rest-auth/login/', loginData)
          .then((res) => {
            this.cookies_set(res.data.key)
            this.$router.push('/')
          })
          .catch((err) => {
            console.log(err.response)
          })
      },
      logincheck () {
        if (this.$cookies.isKey('auth-token')) {
          this.isLogined = true
        }
      },
      logout () {
        const RequestHeader = {
          headers: {
            'Authorization': `Token ${this.$cookies.get('auth-token')}`,
          },
        }
        axios.post(API_URL + '/rest-auth/logout/', RequestHeader)
          .then((res) => {
            this.isLogined = false
            this.$cookies.remove('auth-token')
            this.$router.push('/')
          })
      },
      signup () {
        const signupData = {
          username: this.username,
          password1: this.password1,
          password2: this.password2,
        }
        axios.post(API_URL + '/rest-auth/signup/', signupData)
          .then((res) => {
            this.cookies_set(res.data.key)
            this.$router.push('/')
          })
          .catch((err) => {
            console.log(err.response)
          })
      },
    },
  }
</script>
