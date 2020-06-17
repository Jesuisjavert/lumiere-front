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
            <v-row justify="center">
            <v-dialog v-model="dialog" width="600px">
              <template v-slot:activator="{ on, attrs }">
            <v-img
              class="white--text align-end mx-auto"
              height="550px"
              :src="'https://image.tmdb.org/t/p/w342/' + card.poster_path"
              v-bind="attrs"
              v-on="on"
            />
              </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{card.title}}</span>
                  </v-card-title>
                  <v-card-text>
                    <span> 원제목: {{card.original_title}} </span><br>
                    <span> 개봉일 : {{card.release_date}} </span><br>
                    <span> 관객수 : {{card.popularity}} </span><br>
                    <span> 평점 : {{card.vote_average}} </span><br><br>
                    <span> {{card.overview}} </span>
                  </v-card-text>
                  <v-card-text>
                    <span>  {{card.comments.comment}} </span>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>

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
