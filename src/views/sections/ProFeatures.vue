<template>
  <base-section
    id="pro-features"
  >
    <!-- <v-img
      :src="require('@/assets/logo.svg')"
      class="mx-auto mb-8"
      max-width="128"
    />

    <base-section-heading title="Feature Comparison">
      Get the PRO version of <strong>Zero</strong> and level up your theme<br>with additional components, pages, and Free updates.
    </base-section-heading> -->
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
        >
          <v-simple-table>
            <thead>
              <tr>
                <th class="body-1 font-weight-bold text-center">
                  게시글
                </th>
                <th class="body-1 font-weight-bold text-center">
                  작성자
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="feature in features"
                :key="feature.id"
              >
                <td
                  v-text="feature.title"
                  v-bind="feature"
                  v-on="on"
                />
                <td class="text-center">
                  {{ feature.user.username }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>
          <v-spacer></v-spacer>
          <base-article-create fluid class="pa-0" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  import axios from 'axios'

  const API_URL = 'http://127.0.0.1:8000'

  export default {
    name: 'SectionProChart',

    components: {
      ArticleCreate: () => import('@/components/base/ArticleCreate'),
    },

    data () {
      return {
        features: null,
        dialog: false,
      }
    },
    created () {
      this.loadArticle()
    },
    watch: {
      features() {
        this.loadArticle
      }
    },
    methods: {
      loadArticle () {
        axios.get(`${API_URL}/articles/`).then((res) => {
          this.features = res.data
        })
        console.log(this.features)
      },
    },
  }
</script>
