<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <h1>Pictshare</h1>
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
      <v-list-item @click.stop="login">
        <v-list-item-content>
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click.stop="register">
        <v-list-item-content>
          <v-list-item-title>Register</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  methods: {
    login () {
      this.drawer = false
      this.$router.push('/login')
    },
    register () {
      this.drawer = false
      this.$router.push('/register')
    }
  },
  data: () => ({
    drawer: null
  })
}
</script>
