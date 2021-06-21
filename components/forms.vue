<template>
  <v-app>
    <div class="mt-2 mb-5">
      <v-btn icon class="mt-3 mb-2" @click="$router.push('/')"
        ><v-icon>mdi-subdirectory-arrow-right mdi-rotate-180</v-icon></v-btn
      >
      <h1>{{ formprops.title }}</h1>
    </div>
    <v-form v-model="isValue" @submit.prevent="submitUser">
      <v-text-field
        v-model="formUser.email"
        label="Email"
        type="text"
        :rules="emailRules"
        placeholder="Input name"
        required
        autofocus
        outlined
      ></v-text-field>
      <v-text-field
        v-model="formUser.password"
        label="Password"
        :type="statePass ? 'password' : 'text'"
        :rules="passRules"
        placeholder="Input password"
        required
        outlined
        :append-icon="statePass ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="statePass = !statePass"
      ></v-text-field>
      <div>
        <v-btn
          :disabled="!isValue"
          :loading="loadBtn"
          :type="formprops.state ? 'submit' : ''"
          color="black"
          large
          width="100%"
          :dark="isValue"
          >{{ formprops.state ? 'Log In' : 'Next' }}</v-btn
        >
      </div>
    </v-form>
  </v-app>
</template>
<script>
import globals from '~/helpers/globals'
export default {
  mixins: [globals],
  props: {
    formprops: {
      type: Object,
      default: Object,
    },
  },
  data: () => ({}),
  methods: {
    submitUser() {
      this.loadBtn = true
      if (this.formprops.state) {
        this.loadBtn = false
        console.log('Login')
        console.log(this.formUser)
      } else {
        this.loadBtn = false
        console.log(this.formUser)
      }
    },
  },
}
</script>
