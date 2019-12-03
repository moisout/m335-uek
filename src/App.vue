<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <router-link to="/" class="no-format">
          <h1>Pictshare</h1>
        </router-link>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer fixed left temporary v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Pictshare</v-list-item-title>
          <v-list-item-subtitle>Not logged in</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item @click.stop="openHome">
          <v-list-item-icon>
            <v-icon>mdi-home-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click.stop="openLogin">
          <v-list-item-icon>
            <v-icon>mdi-account-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click.stop="openRegister">
          <v-list-item-icon>
            <v-icon>mdi-lock-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view @errorMsg="onError" @successMsg="onSuccess"></router-view>
    </v-content>
    <v-snackbar v-model="snackbar" :color="snackbarColor" outline>
      {{ snackbarText }}
      <v-btn color="red" text @click="snackbar = false">OK</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  methods: {
    onError(msg) {
      this.snackbar = true
      this.snackbarText = msg
      this.snackbarColor = 'error'
    },
    onSuccess(msg) {
      this.snackbar = true
      this.snackbarText = msg
      this.snackbarColor = 'success'
    },
    openLogin() {
      this.drawer = false
      this.$router.push('/login')
    },
    openRegister() {
      this.drawer = false
      this.$router.push('/register')
    },
    openHome() {
      this.drawer = false
      this.$router.push('/')
    }
  },
  data: () => ({
    drawer: null,
    snackbar: false,
    snackbarText: '',
    snackbarColor: 'info'
  })
}
</script>

<style lang="scss" scoped>
.no-format {
  text-decoration: none;
  color: inherit;
}
</style>
