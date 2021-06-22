const forms = {
  data: () => ({
    isValue: false,
    loadPage: false,
    loadBtn: false,
    statePass: false,
    formUser: {
      username: '',
      email: '',
      password: '',
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
    dataSearch: [
      {
        id: 1,
        category: 'Hewan',
        name: 'Ayam Ras',
        image: 'a1',
      },
      {
        id: 2,
        category: 'Hewan',
        name: 'Ayam Jago',
        image: 'a2',
      },
      {
        id: 3,
        category: 'Hewan',
        name: 'Anjing',
        image: 'd1',
      },
      {
        id: 4,
        category: 'Hewan',
        name: 'Anjing',
        image: 'd2',
      },
      {
        id: 5,
        category: 'Hewan',
        name: 'Harimau',
        image: 'h1',
      },
      {
        id: 6,
        category: 'Hewan',
        name: 'Harimau',
        image: 'h2',
      },
    ],
    datachat: [
      {
        idFrom: 1,
        idTo: 2,
        name: 'Laras Marihsa Putri',
        msgFrom: ['Hi, Laras. Apa kabar?', 'Sehat, Besok sibuk gak?'],
        msgTo: ['Sehat, kamu apa kabar?', 'type....'],
        picture: 'hum7.jpg',
        roomchat: 10000002,
      },
      {
        idFrom: 1,
        idTo: 3,
        name: 'Andika Saputra',
        msgFrom: [],
        msgTo: ['Angel, Apa kabar?'],
        picture: 'hum4.png',
        roomchat: 10000003,
      },
      {
        idFrom: 1,
        idTo: 4,
        name: 'Niko',
        msgFrom: ['Niko...'],
        msgTo: ['Iya...'],
        picture: 'hum3.png',
        roomchat: 10000004,
      },
    ],
  }),
}
export default forms
