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
    <v-speed-dial
      v-model="fab"
      bottom
      right
      fixed
      direction="top"
      transition="slide-y-reverse-transition"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="secondary" dark fab>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-tooltip transition="scroll-x-transition" left>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" fab dark small color="orange" @click.stop="openUpload">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>Bild Aufnehmen</span>
      </v-tooltip>
      <v-tooltip transition="scroll-x-transition" left>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" fab dark small color="red">
            <v-icon>mdi-paperclip</v-icon>
            <input type="file" accept="image/*" class="file-input-invisible" @change="uploadFile" />
          </v-btn>
        </template>
        <span>Bild Hochladen</span>
      </v-tooltip>
    </v-speed-dial>
  </v-container>
</template>

<script>
import db from '@/store/db.js'
import userStore from '@/store/user'
import Post from '@/components/Post'
import imageCaptureStore from '@/store/imageCapture.js'

export default {
  name: 'Home',
  components: {
    Post
  },
  data() {
    return {
      posts: {},
      fab: false
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
    },
    uploadFile(e) {
      let me = this
      let file = e.target.files[0]
      let reader = new FileReader()

      reader.addEventListener('load', () => {
        imageCaptureStore.setCapturedImage(reader.result)
        me.$router.push('upload')
      })

      if (file) {
        reader.readAsDataURL(file)
      }
    }
  },
  firebase: {
    posts: db.db.ref('posts')
  }
}
</script>

<style lang="scss">
.skeleton {
  width: 100%;
  height: 100%;
}

.file-input-invisible {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 170%;
  left: 0;
  top: -30%;
  margin: 0;
  padding: 0;
  cursor: pointer;
}
</style>
