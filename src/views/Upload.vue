<template>
  <div>
    <img ref="cameraImg" src="#" alt />
    <video ref="video"></video>
    <v-btn @click.stop="startStream"></v-btn>
  </div>
</template>

<script>
export default {
  name: 'upload',
  data: () => ({
    imgSrc: null
  }),
  methods: {
    requestStream() {

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
    },
    startStream() {

    }
  },
  mounted() {
  }
}
</script>
