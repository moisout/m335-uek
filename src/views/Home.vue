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
    <v-btn fab fixed bottom right @click.stop="initCamera" v-if="!sheet" :loading="cameraLoading">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <transition name="fade-up">
      <div class="camera-overlay" v-show="sheet">
        <v-btn
          class="mt-6 camera-back-btn"
          absolute
          left
          fab
          color="darkgray"
          elevation="10"
          @click="sheet = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-btn
          class="mt-6 camera-capture-btn"
          absolute
          fab
          color="darkgray"
          elevation="10"
          @click="captureImage"
        >
          <v-icon>mdi-camera</v-icon>
        </v-btn>
        <video ref="video" class="camera-feed" @playing.stop="onCameraFeedPlaying"></video>
      </div>
    </transition>
  </v-container>
</template>

<script>
import db from '@/store/db.js'

export default {
  name: 'Home',
  data() {
    return {
      posts: [],
      sheet: false,
      cameraLoading: false,
      mediaStream: null
    }
  },
  watch: {
    sheet(newValue) {
      if (newValue === false && this.mediaStream) {
        let tracks = this.mediaStream.getTracks()

        tracks.forEach((track) => {
          track.stop()
        })
      }
    }
  },
  methods: {
    openUpload() {
      this.$router.push('/upload')
    },
    initCamera() {
      this.requestStream()
    },
    requestStream() {
      let me = this

      if (cordova !== undefined) {
        let permissions = cordova.plugins.permissions

        permissions.requestPermission(permissions.CAMERA, (status) => {
          if (!status.hasPermission) {
            me.$emit('errorMsg', 'Kamera-Berechtigung fehlt')
          } else {
            me.cameraLoading = true
            me.startStream(me.$refs.video)
          }
        }, () => {
          me.$emit('errorMsg', 'Kamera-Berechtigung fehlt')
        })
      } else {
        me.cameraLoading = true
        me.startStream(this.$refs.video)
      }
    },
    onCameraFeedPlaying() {
      if (this.cameraLoading) {
        this.sheet = true
        this.cameraLoading = false
      }
    },
    startStream(videoElement) {
      let me = this
      navigator.mediaDevices.enumerateDevices()
        .then(devices => {
          let videoDevices = [0, 0]
          let videoDeviceIndex = 0
          devices.forEach(function (device) {
            if (device.kind === 'videoinput') {
              videoDevices[videoDeviceIndex++] = device.deviceId
            }
          })
          let constraints = {
            deviceId: { exact: videoDevices[1] !== 0 ? videoDevices[1] : videoDevices[0] }
          }
          navigator.mediaDevices.getUserMedia({ video: constraints })
            .then(function (stream) {
              me.mediaStream = stream
              me.$refs.video.srcObject = stream
              me.$refs.video.play()
            })
            .catch(function (err) {
              me.$emit('errorMsg', `Fehler: ${err}`)
              me.cameraLoading = false
            })
        })
    },
    captureImage() {

    }
  },
  firebase: {
    posts: db.db.ref('posts')
  }
}
</script>

<style lang="scss">
.fade-up-enter-active,
.fade-up-leave-active {
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.fade-up-enter-to,
.fade-up-leave {
  transform: translateY(0);
}
.fade-up-enter,
.fade-up-leave-to {
  transform: translateY(100%);
}

.camera-overlay {
  overflow: hidden;
  position: fixed;
  top: 56px;
  left: 0;
  width: 100%;
  height: calc(100% - 56px);
  display: flex;
  background-color: #303030;
  z-index: 4;

  .camera-capture-btn {
    bottom: 16px;
    left: 50%;
  }

  .camera-back-btn {
    bottom: 16px;
  }

  .camera-feed {
    width: 100%;
    position: relative;
    max-height: 100%;
    margin: auto;
  }
}
</style>
