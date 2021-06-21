<template>
  <v-app>
    <v-card outlined class="d-block justify-center">
      <v-img :src="`${require('../assets/images/bglogin.png')}`" height="100vh">
        <div class="d-flex align-center" style="height: 100vh">
          <v-img
            :src="`${require('../assets/images/tlogin.png')}`"
            max-width="200"
            class="mx-auto my-auto"
          ></v-img>
        </div>
      </v-img>
    </v-card>
    <Footer />
  </v-app>
</template>
<script>
import Footer from '@/components/footer'
export default {
  components: {
    Footer,
  },
  // middleware: 'authenticated',
  data() {
    return {}
  },
  head() {
    return {
      title: `${
        this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1)
      }`,
    }
  },
}
</script>
