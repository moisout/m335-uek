<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="4" v-for="(post, id) in posts" :key="id">
        <v-card class="mx-auto" max-width="500">
          <!-- <v-img class="white--text align-end" height="200px" :src="post.image"> -->
          <v-card-title>{{ post.title }}</v-card-title>
          <!-- </v-img> -->
          <v-card-text class="text--primary">
            <div>{{ post.description }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text>Share</v-btn>

            <v-btn color="orange" text>Open</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-btn fab fixed bottom right @click.stop="openUpload">+</v-btn>
  </v-container>
</template>

<script>
import db from '@/store/db.js'

export default {
  name: 'Home',
  data() {
    return {
      posts: []
    }
  },
  methods: {
    openUpload() {
      this.$router.push('/upload')
    }
  },
  firebase: {
    posts: db.db.ref('posts')
  }
}
</script>
