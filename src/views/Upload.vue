<template>
  <v-container>
    <v-form v-model="valid">
      <v-container>
        <v-progress-linear v-show="uploading" :value="uploadProgress"></v-progress-linear>
        <v-row cols="12" md="4">
          <div class="image-container">
            <img ref="cameraImg" :src="imageSource" />
          </div>
        </v-row>
        <v-row cols="12" md="4">
          <v-text-field v-model="title" :rules="titleRules" :counter="30" label="Titel" required></v-text-field>
        </v-row>

        <v-row cols="12" md="4">
          <v-combobox
            v-model="categories"
            :items="items"
            chips
            clearable
            label="Kategorien"
            multiple
            solo
          >
            <template v-slot:selection="{ attrs, item, select, selected }">
              <v-chip
                v-bind="attrs"
                :input-value="selected"
                close
                @click="select"
                @click:close="removeChip(item)"
              >
                <strong>{{ item }}</strong>&nbsp;
              </v-chip>
            </template>
          </v-combobox>
        </v-row>

        <div class="actions">
          <v-btn small text @click.stop="cancel">Abbrechen</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click.stop="upload"
            :disabled="!valid"
            :loading="uploading"
          >Hochladen</v-btn>
        </div>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
import imageCaptureStore from '@/store/imageCapture'
import db from '@/store/db'
import userStore from '@/store/user'
import storageStore from '@/store/storage'
import firebase from 'firebase/app'

export default {
  name: 'upload',
  data: () => ({
    title: null,
    valid: false,
    uploading: false,
    uploadTask: null,
    uploadProgress: 0,
    categories: [],
    items: ['Meme', 'Selfie', 'Natur', 'Architektur', 'Autos', 'Essen', 'Tiere', 'OC', 'Code', 'DIY'],
    titleRules: [
      v => !!v || 'Titel erforderlich',
      v => v ? (v.length <= 30 || 'Titel darf nicht länger als 30 Zeichen sein') : ''
    ]
  }),
  computed: {
    imageSource() {
      return `data:image/jpeg;base64,${imageCaptureStore.capturedImage}`
    }
  },
  methods: {
    removeChip(item) {
      this.categories.splice(this.categories.indexOf(item), 1)
      this.categories = [...this.categories]
    },
    upload() {
      this.uploading = true
      this.uploadImage()
    },
    uploadPost(imgUrl) {
      let me = this
      this.loading = true
      db.db.ref('posts').push({
        title: me.title,
        categories: me.categories,
        image: imgUrl,
        uid: userStore.getUserId(),
        username: userStore.getUserName()
      }).then(() => {
        me.$emit('successMsg', 'Post gespeichert')
        me.$router.push('/')
        me.loading = false
      }, (err) => {
        me.$emit('errorMsg', `Fehler: ${err}`)
      })
    },
    uploadImage() {
      let storageRef = storageStore.storageRef
      let imageRef = storageRef.child(`posts/${this.uuidv4()}.jpg`)
      let me = this
      this.uploadTask = imageRef.putString(this.imageSource, 'data_url')
      this.uploadTask.on(
        'state_changed',
        this.imageUploading,
        (error) => me.$emit('errorMsg', `Fehler: ${error}`),
        this.imageUploaded
      )
    },
    imageUploading(snapshot) {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log(progress)
      this.uploadProgress = progress
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED:
          console.log('Upload is paused')
          break
        case firebase.storage.TaskState.RUNNING:
          console.log('Upload is running')
          break
      }
    },
    imageUploaded() {
      let me = this
      setTimeout(() => {
        this.uploading = false
      }, 500)
      this.uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
        me.uploadPost(downloadURL)
      })
    },
    uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0
        let v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
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
