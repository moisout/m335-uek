<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
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
            <v-btn small text @click.stop="openRegister">Noch kein Account? Registrieren</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click.stop="login" :disabled="!valid">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'register',
  data: () => ({
    valid: false,
    email: null,
    password: null,
    emailRules: [
      v => !!v || 'Email erforderlich'
    ],
    passwordRules: [
      v => !!v || 'Passwort erforderlich'
    ]
  }),
  methods: {
    login() {
      if (this.email && this.password) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
            console.log(user.user)
            this.$emit('successMsg', `Login ${user.user.email} erfolgreich`)
            this.$router.push('/')
          }, err => {
            this.$emit('errorMsg', err.message)
          })
      }
    },
    openRegister() {
      this.$router.push('/register')
    }
  }
}
</script>
