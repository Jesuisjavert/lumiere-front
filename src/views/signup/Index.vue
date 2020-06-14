<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Signup',

    metaInfo: { title: 'Signup' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'keep-in-touch',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'pro',
      },
    },
  }
</script>
