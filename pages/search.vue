<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="search"
            label="Search"
            outlined
            append-icon="mdi-card-search-outline"
            placeholder="Search"
            @keyup="searching('')"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-if="data.length === 0 && search.length > 0"
          cols="12"
          class="text-center"
        >
          <h2>not found!</h2>
        </v-col>
        <v-col v-for="(items, i) in data" v-else :key="i" cols="6">
          <!-- {{ items.image }} -->
          <v-img
            :src="require(`~/assets/images/hewan/${items.image}.jpg`)"
            height="100%"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
    <Menubar />
  </v-app>
</template>
<script>
import Menubar from '@/components/menubar.vue'
import global from '@/helpers/globals'
export default {
  components: {
    Menubar,
  },
  mixins: [global],
  data() {
    return {
      search: '',
      data: [],
    }
  },
  head() {
    return {
      title: 'Search',
    }
  },
  methods: {
    searching() {
      if (this.search.length === 0) {
        this.data = []
      } else {
        this.data = this.dataSearch.filter(({ name }) =>
          new RegExp(this.search, 'i').test(name)
        )
      }
    },
  },
}
</script>
