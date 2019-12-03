<template>
  <div>
    <img ref="cameraImg" src="#" alt />
    <video ref="video"></video>
    <v-btn @click.stop="captureImage"></v-btn>
  </div>
</template>

<script>
export default {
  name: 'upload',
  data: () => ({
    imgSrc: null
  }),
  methods: {
    captureImage() {
      let me = this

      permissions.requestPermission(permissions.CAMERA, success, error)

      function error() {
        console.warn('Camera permission is not turned on')
      }

      function success(status) {
        if (!status.hasPermission) error()
      }

      navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function (stream) {
          me.$refs.video.srcObject = stream
          me.$refs.video.play()
        })
        .catch(function (err) {
          console.log('An error occurred: ' + err)
        })

      // cordova.plugins.CameraStream.startCapture('front')

      // let destinationType = navigator.camera.DestinationType
      // navigator.camera.getPicture((data) => {
      //   console.log(data)
      //   me.imgSrc = data
      // }, (err) => {
      //   console.error(err)
      // }, {
      //   quality: 50,
      //   destinationType: destinationType.DATA_URL
      // })
    }
  },
  mounted() {
  }
}
</script>
