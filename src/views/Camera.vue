<template>
  <div class="camera">
    <v-btn
      class="mt-6 camera-back-btn"
      absolute
      left
      fab
      color="darkgray"
      elevation="10"
      @click="backHome"
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
    <v-btn
      class="mt-6 camera-switch-btn"
      absolute
      fab
      right
      color="darkgray"
      elevation="10"
      @click="switchCamera"
    >
      <v-icon>mdi-camera-switch</v-icon>
    </v-btn>
  </div>
</template>

<script>
import imageCaptureStore from '@/store/imageCapture.js'

export default {
  name: 'upload',
  data: () => ({
    imgSrc: null
  }),
  computed: {
    imageSource() {
      return `data:image/jpeg;base64,${imageCaptureStore.capturedImage}`
    }
  },
  mounted() {
    setTimeout(() => {
      document.body.classList.add('transparent')
    }, 300)
    this.requestStream()
    document.getElementsByTagName()
  },
  beforeDestroy() {
    document.body.classList.remove('transparent')
  },
  methods: {
    backHome() {
      this.stopStream()
      this.$router.push('/')
    },
    switchCamera() {
      CameraPreview.switchCamera()
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
            me.startStream()
          }
        }, () => {
          me.$emit('errorMsg', 'Kamera-Berechtigung fehlt')
        })
      } else {
        me.startStream()
      }
    },
    onCameraFeedPlaying() {
      if (this.cameraLoading) {
        this.sheet = true
        this.cameraLoading = false
      }
    },
    startStream(side) {
      // let me = this
      CameraPreview.startCamera({
        x: 0,
        y: 56,
        width: window.screen.width,
        toBack: true,
        tapFocus: true,
        previewDrag: false,
        camera: side
      })
    },
    stopStream() {
      CameraPreview.stopCamera()
    },
    captureImage() {
      let me = this
      CameraPreview.takePicture({ width: 640, height: 640, quality: 85 }, (base64PictureData) => {
        me.stopStream()
        imageCaptureStore.setCapturedImage(base64PictureData)
        me.$router.push('/upload')
      }, (err) => {
        me.$emit('errorMsg', `Fehler: ${err}`)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.camera {
  width: 100%;
  height: 100%;

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
  }

  .camera-capture-btn {
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
  }

  .camera-back-btn {
    bottom: 16px;
  }

  .camera-switch-btn {
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
