const forms = {
  data: () => ({
    isValue: false,
    loadPage: false,
    loadBtn: false,
    statePass: false,
    formUser: {
      email: '',
      password: '',
      username: '',
    },
    emailRules: [
      (v) => !!v || 'E-mail required!',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passRules: [
      (v) => !!v || 'Password required!',
      (v) =>
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@,#,_])[0-9a-zA-Z@#_]{8,}$/.test(
          v
        ) || 'Use a combination of a-z, A-Z, 0-9 and symbol (@,#,_,)',
    ],
  }),
}
export default forms
