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
          <v-list-item-subtitle v-if="userName">{{ userName }}</v-list-item-subtitle>
          <v-list-item-subtitle v-if="!userName">Not logged in</v-list-item-subtitle>
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
        <v-list-item @click.stop="logout" v-if="userName">
          <v-list-item-icon>
            <v-icon>mdi-account-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click.stop="openLogin" v-if="!userName">
          <v-list-item-icon>
            <v-icon>mdi-account-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click.stop="openRegister" v-if="!userName">
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
      <transition name="fade-up" mode="out-in">
        <router-view @errorMsg="onError" @successMsg="onSuccess"></router-view>
      </transition>
    </v-content>
    <v-snackbar v-model="snackbar" :color="snackbarColor" outline>
      {{ snackbarText }}
      <v-btn color="red" text @click="snackbar = false">OK</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import userStore from '@/store/user'

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
    },
    logout() {
      let me = this
      firebase.auth().signOut().then(function () {
        me.onSuccess('User logged out')
      }).catch((error) => {
        me.onError(`Fehler: ${error}`)
      })
    },
    authStateChanged(user) {
      if (user) {
        this.userName = user.email
        userStore.userName = user.email
        userStore.uid = user.uid
      } else {
        this.userName = null
        userStore.userName = null
        userStore.uid = null
      }
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(this.authStateChanged)
  },
  data: () => ({
    drawer: null,
    snackbar: false,
    snackbarText: '',
    snackbarColor: 'info',
    userName: null
  })
}
</script>

<style lang="scss" scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1),
    opacity 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.fade-up-enter-to,
.fade-up-leave {
  transform: scale(1);
  opacity: 1;
}
.fade-up-enter,
.fade-up-leave-to {
  transform: scale(0.9);
  opacity: 0;
}
body.transparent {
  #app {
    background: transparent !important;
  }
}

#app {
  transition: background 200ms ease;
}

.no-format {
  text-decoration: none;
  color: inherit;
}
</style>
