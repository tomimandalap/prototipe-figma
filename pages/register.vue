<template>
  <v-container>
    <Forms :formprops="{ state: false, title: 'Register' }" />
  </v-container>
</template>
<script>
import Forms from '@/components/forms.vue'
export default {
  components: {
    Forms,
  },
  // middleware: 'authenticated',
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
