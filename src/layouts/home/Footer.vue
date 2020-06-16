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
    <a @click.native="logout"> logout </a>
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
  }
</script>

<style lang="sass">
  #home-footer a
    text-decoration: none
</style>
