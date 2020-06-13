<template>
  <v-theme-provider dark>
    <base-section
      id="social"
      class="accent text-center"
      space="56"
    >
      <base-icon class="mb-8">
        mdi-twitter
      </base-icon>

      <base-section-heading
        color="transparent"
        title="Social Media"
      >
        BackEnd &#38; FrontEnd Development : Kang Donghoon &#38; Kim Ikhan
      </base-section-heading>

      <a
        class="d-inline-block mb-8"
        href="https://www.instagram.com/unialike"
        style="text-decoration: none;"
        target="_blank"
      >
        https://www.instagram.com/unialike
      </a>
      <div class="py-4" />
      <v-btn
        class="font-weight-bold"
        color="white"
        href="https://www.instagram.com/unialike"
        light
        min-width="168"
        target="_blank"
        x-large
      >
        Follow Us

        <v-icon right>
          mdi-open-in-new
        </v-icon>
      </v-btn>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNews',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
