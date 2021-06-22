<template>
  <div>
    <div class="mt-2 mb-5">
      <v-btn icon class="mt-3 mb-2" @click="$router.push('/')"
        ><v-icon>mdi-subdirectory-arrow-right mdi-rotate-180</v-icon></v-btn
      >
      <h1>{{ formprops.title }}</h1>
    </div>
    <v-form v-model="isValue" @submit.prevent="submitUser">
      <v-text-field
        v-if="!formprops.state"
        v-model="formUser.username"
        type="text"
        label="Username"
        :rules="[(v) => !!v || 'Username required!']"
        placeholder="Input username"
        required
        autofocus
        outlined
      >
      </v-text-field>
      <v-text-field
        v-model="formUser.email"
        label="Email"
        type="text"
        :rules="emailRules"
        placeholder="Input name"
        required
        :autofocus="!formprops.state ? false : true"
        outlined
      ></v-text-field>
      <v-text-field
        v-model="formUser.password"
        label="Password"
        :type="!statePass ? 'password' : 'text'"
        :rules="passRules"
        placeholder="Input password"
        required
        outlined
        :append-icon="!statePass ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="statePass = !statePass"
      ></v-text-field>
      <div class="mb-6">
        <v-btn
          :disabled="!isValue"
          :loading="loadBtn"
          :type="formprops.state ? 'submit' : ''"
          color="black"
          large
          width="100%"
          :dark="isValue"
          >{{ formprops.state ? 'Log In' : 'Sign Up' }}</v-btn
        >
      </div>
      <div v-if="!formprops.state" class="text-justify">
        <p class="f-xs">
          By signing up, you agree to Photo’s
          <a href="#" target="_blank" class="black--text">Terms of Service</a>
          and
          <a href="#" target="_blank" class="black--text">Privacy Policy</a>.
        </p>
      </div>
    </v-form>
  </div>
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
        // console.log(this.formUser)
        setTimeout(() => {
          this.loadBtn = false
          this.$router.push('/discover')
        }, 2000)
      } else {
        // console.log(this.formUser)
        setTimeout(() => {
          this.loadBtn = false
          this.$router.push('/login')
        }, 2000)
      }
    },
  },
}
</script>
