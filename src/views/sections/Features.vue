<template>
  <base-section
    id="features"
    class="secondary"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="3"
          >
            <base-info-card
              align="center"
              dark
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      cards: [
        {
          icon: 'mdi-keyboard-outline',
          title: 'Trendy Design',
          text: '모던하고 트렌디한 디자인',
        },
        {
          icon: 'mdi-camera-outline',
          title: 'Coloring Design',
          text: '색감, 컨셉이 확실한 눈이 즐거운 웹사이트',
        },
        {
          icon: 'mdi-pencil-outline',
          title: 'Review',
          text: 'CRUD Logic과 1:N, M:N 관계로 설정된 모델링',
        },
        {
          icon: 'mdi-puzzle-outline',
          title: 'Smooth Transition',
          text: '부드러운 화면 전환',
        },
      ],
    }),
  }
</script>
