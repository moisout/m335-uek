<template>
  <v-container fluid>
    <v-row v-if="isLoading">
      <v-col v-for="n in 4" :key="n" cols="12" xs="12" sm="6" md="4" lg="3" xl="2">
        <v-skeleton-loader ref="skeleton" type="card" class="mx-auto" elevation="4"></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row>
      <Post
        v-for="post in postArray"
        :key="post.keyId"
        :post="post"
        @errorMsg="(msg) => $emit('errorMsg', msg)"
        @successMsg="(msg) => $emit('successMsg', msg)"
      />
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
      }).reverse()
    },
    isLoading() {
      return this.postArray.length <= 0
    }
  },
  methods: {
    openUpload() {
      if (userStore.getUserEmail()) {
        this.$router.push('/camera')
      } else {
        this.$emit('errorMsg', 'Nicht eingeloggt')
        this.$router.push('/login')
      }
    }
  },
  firebase: {
    posts: db.db.ref('posts')
  }
}
</script>

<style lang="scss" scoped>
.skeleton {
  width: 100%;
  height: 100%;
}
</style>
