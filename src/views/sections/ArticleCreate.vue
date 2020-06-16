<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          글 작성
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Create</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="createArticle"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>글 제목</v-list-item-title>
              <base-text-field
                id="title"
                v-model="title"
                label="title"
                required
              />
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>내 용</v-list-item-title>
              <v-textarea
                id="content"
                v-model="content"
                outlined
                name="input-7-4"
                label="content"
              />
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          three-line
          subheader
        >
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import axios from 'axios'

  const API_URL = 'http://127.0.0.1:8000'

  export default {
    data () {
      return {
        dialog: false,
        title: null,
        content: null,
      }
    },
    methods: {
      createArticle () {
        this.dialog = false
        const articleData = {
            title: this.title,
            content: this.content,
        }
        console.log(articleData)
        const RequestHeader = {
          headers: {
            'Authorization': `Token ${this.$cookies.get('auth-token')}`,
          },
        }
        axios.post(API_URL + '/articles/create/', this.articleData, RequestHeader)
          .then((res) => {
            console.log(res)
            this.$router.push('/review')
          })
      },
    },
  }
</script>

<style>

</style>
