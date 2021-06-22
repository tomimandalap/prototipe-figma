<template>
  <v-app>
    <v-container>
      <h1>Account {{ $route.params.id }}</h1>
    </v-container>
    <Menubar />
  </v-app>
</template>
<script>
import Menubar from '@/components/menubar.vue'
export default {
  components: {
    Menubar,
  },
  data() {
    return {}
  },
  head() {
    return {
      title: 'account',
    }
  },
}
</script>
