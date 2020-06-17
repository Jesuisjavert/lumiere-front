<template>
  <base-section id="about-our-product">
    <base-section-heading
      color="grey lighten-2"
      icon="mdi-vuetify"
      title="당신이 인생영화, Lumière와 함께"
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
            <v-dialog width="600px">
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
                  <hr>
                  <v-card-text>
                    <v-col v-for="comment in card.comments" :key="comment.id">
                      <span>{{ comment.user.username}}<span>&nbsp&nbsp 평점:{{ comment.rank}}</span><br> {{ comment.content }}</span>
                    </v-col>
                    <hr><br>
                    <span>평점</span>
                    <base-text-field
                      id="rank"
                      v-model="rank"
                      required
                    />
                    <span>한줄 평</span>
                    <base-text-field
                      id="title"
                      v-model="content"
                      required
                    />
                    <v-btn @click="createComment">생성</v-btn>
                  </v-card-text>
                  <!-- <v-slider
                      v-model="rank"
                      :rules="rules.age"
                      color="primary"
                      label="Rank"
                      min="1"
                      max="10"
                      thumb-label
                    ></v-slider> -->
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
      rank: null,
      content: null,
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
      createComment () {
        const commentData = { 
            rank: this.rank,
            content: this.content,  
          }
        const RequestHeader = {
          headers: {
            'Authorization': `Token ${this.$cookies.get('auth-token')}`,
          },
        }
        console.log(RequestHeader)
        axios.post(API_URL + '/movies/11/comment_create', commentData, RequestHeader)
          .then((res) => {
            console.log(res)
            this.$router.go(0)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
  }
</script>