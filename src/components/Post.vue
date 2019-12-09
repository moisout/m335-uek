<template>
  <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="2" class="post">
    <v-card class="mx-auto" max-width="500" elevation="4" :key="post.keyId">
      <v-img
        class="white--text align-end"
        height="400px"
        :src="post.image"
        @click="openPost"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      >
        <v-card-title>{{ post.title }}</v-card-title>
      </v-img>

      <v-card-subtitle>
        <v-chip pill small class="chip-margin">
          <v-icon left color="primary">mdi-account</v-icon>
          {{ post.username }}
        </v-chip>
      </v-card-subtitle>
      <v-card-text class="text--primary" v-if="post.categories">
        <div>
          <v-chip
            v-for="(category, id) in post.categories"
            :key="id"
            color="primary"
            class="chip-margin"
            small
            outlined
          >{{ category }}</v-chip>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text @click="openPost">
          <v-icon left>mdi-open-in-new</v-icon>Open
        </v-btn>
        <v-btn color="orange" text @click="share(post.title, post.description, post.image)">
          <v-icon left>mdi-share-variant</v-icon>Share
        </v-btn>
        <v-btn color="orange" text @click="deletePrompt(post.keyId, post.uid)" v-if="deletable">
          <v-icon left>mdi-delete</v-icon>Delete
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="deleteDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Post löschen?</v-card-title>

        <v-card-text>Möchten Sie diesen Post wirklich löschen?</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="deleteDialog = false">Abbrechen</v-btn>

          <v-btn color="red" text @click="deleteEntry(post.keyId)">Löschen</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="postOpen" class="post-fullscreen" transition="dialog-bottom-transition">
      <v-card class="post-fullscreen-card">
        <v-toolbar dark class="post-toolbar" width="100%" color="primary">
          <v-btn icon dark @click="postOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ post.title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn text @click="share(post.title, post.description, post.image)">
              <v-icon left>mdi-share-variant</v-icon>Share
            </v-btn>
            <v-btn text @click="deletePrompt(post.keyId, post.uid)" v-if="deletable">
              <v-icon left>mdi-delete</v-icon>Delete
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-img class="white--text align-end post-img" :src="post.image"></v-img>
        <v-card-title>
          <v-chip pill small class="chip-margin">
            <v-icon left color="primary">mdi-account</v-icon>
            {{ post.username }}
          </v-chip>
        </v-card-title>
        <v-card-text class="text--primary" v-if="post.categories">
          <div>
            <v-chip
              v-for="(category, id) in post.categories"
              :key="id"
              color="primary"
              class="chip-margin"
              small
              outlined
            >{{ category }}</v-chip>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
import userStore from '@/store/user'
import db from '@/store/db.js'

export default {
  name: 'post',
  data: () => ({
    deleteDialog: false,
    postOpen: false
  }),
  computed: {
    deletable() {
      return userStore.getUserId() === this.post.uid
    }
  },
  props: {
    post: Object
  },
  methods: {
    openPost() {
      this.postOpen = true
    },
    deleteEntry(id) {
      db.db.ref(`posts/${id}`).remove().then(() => {
        this.$emit('successMsg', 'Post gelöscht')
      }, (err) => {
        this.$emit('errorMsg', `Fehler: ${err}`)
      })
    },
    deletePrompt(id, uid) {
      if (userStore.getUserId() === uid) {
        this.deleteDialog = true
      } else {
        this.$emit('errorMsg', `Fehler: Keine Berechtigung`)
      }
    },
    share(title, text, url) {
      try {
        navigator.share(`${text} ${url}`, title, 'text/plain')
      } catch (error) {
        this.$emit('errorMsg', error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.chip-margin {
  margin: 4px 4px 0 0;
}
.v-dialoga {
  background-color: #424242;

  .post-fullscreen-card {
    border-radius: 0;

    .post-img {
      margin-top: 56px;
    }

    .post-toolbar {
      position: fixed;
      margin: 0;
      top: 0;
      z-index: 1;
    }
  }
}
</style>
