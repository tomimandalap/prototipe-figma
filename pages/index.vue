<template>
  <v-app>
    <v-container class="d-sm-block d-none">
      <v-row>
        <v-card
          width="800px"
          height="100vh"
          outlined
          class="mx-auto d-sm-block img-card"
        >
          <v-card-title class="justify-center" style="margin-top: 25vh">
            <h1>Welcome to instaClone</h1>
          </v-card-title>
          <v-card-title class="justify-center">
            <h4>power by</h4>
          </v-card-title>
          <div class="d-sm-flex justify-center mb-15">
            <v-img
              :src="require(`~/assets/images/tlogin.png`)"
              max-width="150"
            ></v-img>
          </div>
          <div class="d-sm-block ma-5">
            <v-btn
              x-large
              color="grey lighten-2"
              width="100%"
              class="mb-5"
              @click="$router.push('/login')"
              >Log in</v-btn
            >
            <v-btn
              x-large
              color="black"
              :dark="true"
              width="100%"
              @click="$router.push('/register')"
              >Register</v-btn
            >
          </div>
        </v-card>
      </v-row>
    </v-container>
    <div class="d-block d-sm-none">
      <v-card outlined class="d-block justify-center">
        <v-img :src="require(`~/assets/images/bglogin.png`)" height="100vh">
          <div class="d-flex align-center" style="height: 100vh">
            <v-img
              :src="require(`~/assets/images/tlogin.png`)"
              max-width="200"
              class="mx-auto my-auto"
            ></v-img>
          </div>
        </v-img>
      </v-card>
      <Footer />
    </div>
  </v-app>
</template>
<script>
import Footer from '@/components/footer'
export default {
  components: {
    Footer,
  },
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
<style lang="scss" scoped>
.img-card {
  background-image: url('~/assets/images/bglogin.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
