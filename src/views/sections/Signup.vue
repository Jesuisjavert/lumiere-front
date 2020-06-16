<template>
  <base-section
    id="info-alt"
    space="56"
  >
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          md="6"
        >
          <base-signup-form title="Sign Up" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionSignup',
  }
</script>
