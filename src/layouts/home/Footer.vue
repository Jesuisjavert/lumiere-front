<template>
  <v-footer
    id="home-footer"
    color="grey darken-4"
    dark
    min-height="72"
  >
    <v-container>
      <v-row>
        <v-col
          class="text-center text-md-right"
          cols="12"
          md="8"
        >
          Copyright &copy; 2020 Lumière, Kang Donghoon, Kim Ikhan
        </v-col>
      </v-row>
    </v-container>
    <a
      v-if="isLogined"
      @click="logout"
    >
      logout
    </a>
  </v-footer>
</template>

<script>
  export default {
    name: 'HomeFooter',

    data: () => ({
      social: [
        'Facebook',
        'Twitter',
        'Instagram',
        'Linkedin',
      ],
    }),
    methods: {
      logout () {
        console.log(this.isLogined)
        console.log(this.$cookies)
        this.isLogined = false
        this.$cookies.remove('auth-token')
        this.$router.push('/')
      },
    },
  }
</script>

<style lang="sass">
  #home-footer a
    text-decoration: none
</style>
