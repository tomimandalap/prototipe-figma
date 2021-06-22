<template>
  <v-bottom-navigation fixed height="80" class="pa-2 justify-space-around">
    <v-btn
      width="100%"
      height="45"
      outlined
      color="black"
      @click="$router.push('/login')"
      >Login</v-btn
    >
    <v-btn
      width="100%"
      height="45"
      color="black"
      @click="$router.push('/register')"
      ><span class="c-white">Register</span></v-btn
    >
  </v-bottom-navigation>
</template>
