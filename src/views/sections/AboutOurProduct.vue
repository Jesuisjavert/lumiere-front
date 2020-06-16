<template>
  <base-section id="about-our-product">
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-vuetify"
      title="About our Product"
    />
    <v-container>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.id"
          cols="12"
          md="4"
        >
          <v-card
            class="mx-auto"
          >
            <v-img
              class="white--text align-end"
              height="550px"
              :src="'https://image.tmdb.org/t/p/w342/' + card.poster_path"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  import axios from 'axios'

  const API_URL = 'http://127.0.0.1:8000'

  export default {
    name: 'SectionAboutOurProduct',

    data: () => ({
      cards: [],
    }),
    created () {
      this.loadMovie()
    },
    methods: {
      loadMovie () {
        axios.get(`${API_URL}/movies/`).then((res) => {
          this.cards = res.data
          console.log(this.cards)
        })
      },
    },
  }
</script>
