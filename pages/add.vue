<template>
  <v-app>
    <v-card class="d-block justify-center">
      <v-img :src="require(`~/assets/images/post.png`)" height="100vh">
        <div class="d-flex align-center" style="height: 100vh"></div>
      </v-img>
    </v-card>
    <v-bottom-navigation fixed height="80" class="pa-2">
      <v-btn value="galerry">
        <span>Gallery</span>
        <v-icon large>mdi-image-multiple-outline</v-icon>
      </v-btn>
      <v-btn value="camera">
        <span>Camera</span>
        <v-icon large>mdi-image-filter-center-focus-strong-outline</v-icon>
      </v-btn>
      <v-btn value="back" @click="$router.push('/discover')">
        <span>back</span>
        <v-icon large>mdi-chevron-left</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  head() {
    return {
      title: 'Add',
    }
  },
}
</script>
