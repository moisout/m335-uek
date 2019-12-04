<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="4" v-for="post in postArray" :key="post.keyId">
        <v-card class="mx-auto" max-width="500" transition="scroll-y-transition">
          <!-- <v-img class="white--text align-end" height="200px" :src="post.image"> -->
          <v-card-title>{{ post.title }}</v-card-title>
          <!-- </v-img> -->
          <v-card-text class="text--primary">
            <div>{{ post.description }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text>Share</v-btn>
            <v-btn color="orange" text @click="deleteEntry(post.keyId, post.uid)">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-btn fab fixed bottom right @click.stop="openUpload">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import db from '@/store/db.js'
import userStore from '@/store/user'

export default {
  name: 'Home',
  data() {
    return {
      posts: {}
    }
  },
  computed: {
    postArray() {
      return Object.keys(this.posts).map(key => {
        let newVal = this.posts[key]
        if (newVal) {
          newVal.keyId = key
          return newVal
        }
      })
    }
  },
  methods: {
    openUpload() {
      if (userStore.getUserName()) {
        this.$router.push('/camera')
      } else {
        this.$emit('errorMsg', 'Nicht eingeloggt')
        this.$router.push('/login')
      }
    },
    deleteEntry(id, uid) {
      if (userStore.getUserId() === uid) {
        db.db.ref(`posts/${id}`).remove().then(() => {
          this.$emit('successMsg', 'Post gelöscht')
        }, (err) => {
          this.$emit('errorMsg', `Fehler: ${err}`)
        })
      } else {
        this.$emit('errorMsg', `Fehler: Keine Berechtigung`)
      }
    }
  },
  firebase: {
    posts: db.db.ref('posts')
  }
}
</script>
