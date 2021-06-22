<template>
  <v-container>
    <Forms :formprops="{ state: true, title: 'Log In' }" />
  </v-container>
</template>
<script>
import Forms from '@/components/forms.vue'
export default {
  components: {
    Forms,
  },
  data() {
    return {}
  },
  head() {
    return {
      title: `${
        this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1)
      }`,
    }
  },
}
</script>
