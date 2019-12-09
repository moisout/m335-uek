<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Register</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <p v-if="email">Nutzername: {{ username }}</p>
            <v-form v-model="valid">
              <v-text-field
                label="Email"
                name="email"
                prepend-icon="mdi-account-outline"
                type="email"
                :rules="emailRules"
                v-model="email"
                required
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock-outline"
                type="password"
                :rules="passwordRules"
                v-model="password"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn small text @click.stop="openLogin">Bereits Registriert? Zum Login</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click.stop="register" :disabled="!valid">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'register',
  computed: {
    /**
     * @description Gibt den ersten Teil der email zurück, der später als username verwendet wird.
     */
    username() {
      return this.email ? this.email.split('@')[0] : ''
    }
  },
  data: () => ({
    valid: false,
    email: null,
    password: null,
    emailRules: [
      v => !!v || 'Email erforderlich',
      v => /.+@.+/.test(v) || 'Korrekte E-mail erforderlich'
    ],
    passwordRules: [
      v => !!v || 'Passwort erforderlich',
      v => v ? (v.length >= 8 || 'Passwort muss länger als 8 Zeichen sein') : ''
    ]
  }),
  methods: {
    /**
     * @description Verwendet die verknüpften properties email und password für eine firebase-registrierung.
     */
    register() {
      if (this.email && this.password) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
            console.log('as', user)
            this.$emit('successMsg', `Nutzer ${user.user.email} registriert`)
            this.$router.push('/')
          }, err => {
            this.$emit('errorMsg', err.message)
          })
      }
    },
    /**
     * @description Leitet auf die Login-Seite weiter.
     */
    openLogin() {
      this.$router.push('/login')
    }
  }
}
</script>
