<template>
  <v-app>
    <v-container>
      <div v-if="loadPage" class="text-center">
        <h1>Loading</h1>
      </div>
      <div v-else>
        <div class="d-flex justify-space-between">
          <v-btn icon @click="$router.push('/chats')"
            ><v-icon large color="black">mdi-chevron-left</v-icon></v-btn
          >
          <h2 class="font-weight-bold">{{ name }}</h2>
        </div>
        <hr class="mt-2 mb-5" />
        <v-row>
          <v-col v-if="data.idFrom === idFrom" cols="12">
            <v-card-text
              v-if="data.msgFrom.length !== 0"
              class="text-right grey lighten-3 text--black"
            >
              <p>{{ data.msgFrom[0] }}</p>
            </v-card-text>
          </v-col>
          <v-col v-if="data.idTo === idTo" cols="12">
            <v-card-text class="text-left grey lighten-3 text--black">
              <p>{{ data.msgTo[0] }}</p>
            </v-card-text>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <v-bottom-navigation fixed height="80" class="pa-2">
      <v-text-field
        v-model="text"
        outlined
        placeholder="Message..."
        append-icon="mdi-send"
        append-outer-icon="mdi-paperclip"
        rounded
        @click:append="btnSend"
      ></v-text-field>
    </v-bottom-navigation>
  </v-app>
</template>
<script>
import globals from '@/helpers/globals'
export default {
  mixins: [globals],
  data: () => ({
    data: {},
    msgFrom: [],
    msgTo: [],
    idFrom: null,
    idTo: null,
    name: '',
    text: '',
  }),
  updated() {
    const search = this.datachat.filter(({ roomchat }) =>
      new RegExp(this.$route.params.roomchat, 'i').test(roomchat)
    )
    this.data = search[0]
    this.idFrom = search[0].idFrom
    this.idTo = search[0].idTo
    this.msgFrom = search[0].msgFrom
    this.msgTo = search[0].msgTo
    this.name = search[0].name
  },
  mounted() {
    this.loadPage = true
    setTimeout(() => {
      this.loadPage = false
    }, 2000)
  },
  methods: {
    btnSend() {
      console.log(this.text)
    },
  },
}
</script>
