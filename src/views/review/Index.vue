<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Review',

    metaInfo: { title: 'Review' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'pro-features',
        'article-create',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'about',
      },
    },
  }
</script>
