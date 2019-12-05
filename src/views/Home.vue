<template>
  <v-container fluid>
    <v-row>
      <Post v-for="(post, id) in postArray" :key="post.keyId" :post="post" :itemNr="id" />
    </v-row>
    <v-btn fab fixed bottom right @click.stop="openUpload">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import db from '@/store/db.js'
import userStore from '@/store/user'
import Post from '@/components/Post'

export default {
  name: 'Home',
  components: {
    Post
  },
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
    },
    share(title, text, url) {
      try {
        navigator.share(`${text} ${url}`, title, 'plain/text')
      } catch (error) {
        this.$emit('errorMsg', error)
      }
    }
  },
  firebase: {
    posts: db.db.ref('posts')
  }
}
</script>
