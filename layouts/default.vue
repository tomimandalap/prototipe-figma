<template>
  <v-app dark>
    <!-- <v-navigation-drawer
      v-if="$route.name !== 'index'"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      :color="drawer ? 'grey lighten-3' : 'grey'"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <!-- <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="blue lighten-2"
      dark
      :class="$route.name !== 'login' ? '' : 'd-none'"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar> -->
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      value: 'recent',
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dasboard',
          to: '/',
        },
        {
          icon: 'mdi-monitor-dashboard',
          title: 'Monitoring',
          to: '/monitoring',
        },
      ],
      miniVariant: true,
      title: 'thingsIoT',
    }
  },
  mounted() {
    // console.log(this.$route)
  },
}
</script>
<style scoped>
.b-register {
  color: #fff !important;
}
</style>
