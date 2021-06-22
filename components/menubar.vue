<template>
  <v-bottom-navigation v-model="value" fixed height="80" class="pa-2">
    <v-btn
      v-for="items in menus"
      :key="items.value"
      :value="items.value"
      :color="items.id !== 3 ? 'white' : 'black'"
      @click="$router.push(`${items.to}`)"
    >
      <v-icon :color="items.id !== 3 ? 'black' : 'white'">{{
        items.icon
      }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  data() {
    return {
      value: this.$route.name,
      menus: [
        {
          id: 1,
          icon: 'mdi-home',
          value: 'discover',
          to: '/discover',
        },
        {
          id: 2,
          icon: 'mdi-card-search-outline',
          value: 'search',
          to: '/search',
        },
        {
          id: 3,
          icon: 'mdi-plus',
          value: 'add',
          to: '/add',
        },
        {
          id: 4,
          icon: 'mdi-message-outline',
          value: 'chat',
          to: '/chat',
        },
        {
          id: 5,
          icon: 'mdi-account',
          value: 'account',
          to: '/account/1',
        },
      ],
    }
  },
  mounted() {
    // console.log(this.$route)
  },
}
</script>
