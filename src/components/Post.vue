<template>
  <v-col
    cols="12"
    xs="12"
    sm="6"
    md="4"
    lg="3"
    xl="2"
    class="post"
    :style="{ 'animation-delay': `${itemNr}00ms` }"
  >
    <v-card class="mx-auto" max-width="500" outlined :key="post.keyId">
      <v-img class="white--text align-end" max-height="400px" :src="post.image"></v-img>
      <v-card-title>{{ post.title }}</v-card-title>
      <!-- </v-img> -->
      <v-card-text class="text--primary">
        <div>{{ post.description }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text @click="share(post.title, post.description,  post.image)">Share</v-btn>
        <v-btn color="orange" text @click="deleteEntry(post.keyId, post.uid)">Delete</v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="deleteDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Post löschen?</v-card-title>

        <v-card-text>Möchten Sie diesen Post wirklich löschen?</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>

          <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
export default {
  name: 'post',
  data: () => ({
    deleteDialog: false
  }),
  props: {
    post: Object,
    itemNr: Number
  }
}
</script>

<style lang="scss" scoped>
.post {
  animation: fade-in-top 300ms ease-out forwards;
  opacity: 0;
}
@keyframes fade-in-top {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
