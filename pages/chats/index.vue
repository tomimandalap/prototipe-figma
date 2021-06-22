<template>
  <v-app>
    <v-container>
      <div class="text-center">
        <h2 class="font-weight-bold">Chats</h2>
      </div>
      <hr class="mt-2 mb-0" />
      <v-row class="no-gutters">
        <v-col v-for="(items, i) in datachat" :key="i" cols="12">
          <v-card
            outlined
            class="d-flex align-center cursor"
            @click="$router.push(`/chats/${items.roomchat}`)"
          >
            <v-card-title class="black--text">
              <v-avatar size="80">
                <img
                  alt="user"
                  :src="require(`~/assets/images/${items.picture}`)"
                />
              </v-avatar>
            </v-card-title>
            <div class="text-truncate" style="width: 100%">
              <h3>{{ items.name }}</h3>
              <p>{{ items.msgTo[0] }}</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Menubar />
  </v-app>
</template>
<script>
import Menubar from '@/components/menubar'
import globals from '@/helpers/globals'
export default {
  components: {
    Menubar,
  },
  mixins: [globals],
  data() {
    return {}
  },
  head() {
    return {
      title: 'Chat',
    }
  },
}
</script>
