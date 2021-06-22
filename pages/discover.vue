<template>
  <v-app>
    <v-container>
      <div class="mb-5">
        <h1 class="mb-5">Discover</h1>
        <h5 class="text-uppercase font-weight-black">What’s new today</h5>
      </div>
      <v-row class="mb-8">
        <v-col cols="12">
          <v-card outlined class="pa-0">
            <v-img :src="`${require('~/assets/images/dicover.png')}`"></v-img>
            <v-card-title class="black--text ma-0">
              <v-avatar size="40">
                <img alt="user" :src="require(`~/assets/images/user.jpg`)" />
              </v-avatar>
              <v-card-subtitle class="d-block">
                <h6 class="font-weight-black f-xs">Angel Manurung</h6>
                <h6 class="font-weight-black f-xs">@amanurung</h6>
              </v-card-subtitle>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h5 class="text-uppercase font-weight-black">Browse All</h5>
        </v-col>
        <v-col v-for="(items, i) in images" :key="i" md="4" sm="4" cols="6">
          <v-img
            :src="require(`../assets/images/${items}`)"
            height="100%"
          ></v-img>
        </v-col>
      </v-row>
      <v-row class="mb-15">
        <v-col cols="12">
          <v-btn
            outlined
            color="black"
            width="100%"
            x-large
            class="d-none d-sm-block mb-5"
            >See More</v-btn
          >
          <v-btn
            outlined
            color="black"
            width="100%"
            large
            class="d-block d-sm-none mb-5"
            >See More</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
    <Menubar />
  </v-app>
</template>
<script>
import Menubar from '@/components/menubar'
export default {
  components: {
    Menubar,
  },
  // middleware: 'authenticated',
  data() {
    return {
      images: ['img1.png', 'img2.png', 'img3.png', 'img4.png'],
    }
  },
  head() {
    return {
      title: 'Discover',
    }
  },
}
</script>
