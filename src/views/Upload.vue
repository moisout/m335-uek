<template>
  <v-container>
    <v-form v-model="valid">
      <v-container>
        <v-row cols="12" md="4">
          <div class="image-container">
            <img ref="cameraImg" :src="imageSource" />
          </div>
        </v-row>
        <v-row cols="12" md="4">
          <v-text-field v-model="title" :rules="titleRules" :counter="30" label="Titel" required></v-text-field>
        </v-row>

        <v-row cols="12" md="4">
          <v-textarea
            v-model="description"
            :rules="descriptionRules"
            :counter="200"
            label="Beschreibung"
            required
          ></v-textarea>
        </v-row>
        <div class="actions">
          <v-btn small text @click.stop="cancel">Abbrechen</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click.stop="upload" :disabled="!valid">Hochladen</v-btn>
        </div>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
import imageCaptureStore from '@/store/imageCapture.js'
import db from '@/store/db.js'
import userStore from '@/store/user'

export default {
  name: 'upload',
  data: () => ({
    title: null,
    description: null,
    valid: false,
    titleRules: [
      v => !!v || 'Titel erforderlich'
    ],
    descriptionRules: [
      v => !!v || 'Beschreibung erforderlich'
    ]
  }),
  computed: {
    imageSource() {
      return `data:image/jpeg;base64,${imageCaptureStore.capturedImage}`
    }
  },
  methods: {
    upload() {
      let me = this
      db.db.ref('posts').push({
        title: me.title,
        description: me.description,
        image: 'asd',
        uid: userStore.getUserId()
      }).then(() => {
        this.$emit('successMsg', 'Post gespeichert')
        this.$router.push('/')
      }, (err) => {
        this.$emit('errorMsg', `Fehler: ${err}`)
      })
    },
    cancel() {
      this.$router.push('/')
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.image-container {
  width: 100%;
  height: 400px;
  overflow-y: scroll;

  img {
    width: 100%;
  }
}

.actions {
  display: flex;
  margin: 2 0px -12px 0 -12px;
}
</style>
