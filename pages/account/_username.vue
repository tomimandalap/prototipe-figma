<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card outlined>
            <v-card-title class="black--text ma-0 d-flex align-end">
              <v-avatar size="100">
                <img alt="user" :src="require(`~/assets/images/jane.jpg`)" />
              </v-avatar>
              <v-card-subtitle class="d-flex justify-center">
                <div class="text-center">
                  <h3 class="font-weight-bold">30</h3>
                  <p class="text-truncate">Posts</p>
                </div>
                <div class="text-center ml-2 mr-2">
                  <h3 class="font-weight-bold">2k</h3>
                  <p class="text-truncate">Follower</p>
                </div>
                <div class="text-center">
                  <h3 class="font-weight-bold">50</h3>
                  <p class="text-truncate">Following</p>
                </div>
              </v-card-subtitle>
            </v-card-title>
            <v-card-title class="d-block">
              <h3 class="font-weight-black">Angel Manurung</h3>
              <h4 class="font-weight-black f-roboto">Jakarta, INA</h4>
            </v-card-title>
            <v-card-actions>
              <v-btn
                color="black"
                :dark="true"
                width="100%"
                @click="$router.push('/')"
                >Log Out</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mb-15">
        <v-col v-for="(items, i) in images" :key="i" md="4" sm="4" cols="6">
          <v-img
            :src="require(`~/assets/images/${items}`)"
            height="100%"
          ></v-img>
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
  data() {
    return {
      images: ['img1.png', 'img2.png', 'img3.png', 'img4.png'],
    }
  },
  head() {
    return {
      title: 'account',
    }
  },
}
</script>
