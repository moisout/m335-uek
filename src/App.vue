<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <h1>M335</h1>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer fixed left temporary v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Application</v-list-item-title>
          <v-list-item-subtitle>M335</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list-item @click.stop="login">
        <v-list-item-content>
          <v-list-item-title>login</v-list-item-title>
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
    }
  },

  data: () => ({
    drawer: null
  })
}
</script>
