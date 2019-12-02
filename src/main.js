import Vue from 'vue'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyD4DA6n10rK3wFkvrIGGGj2OLST8sVCe8E',
  authDomain: 'pictshare-vue.firebaseapp.com',
  databaseURL: 'https://pictshare-vue.firebaseio.com',
  projectId: 'pictshare-vue',
  storageBucket: 'pictshare-vue.appspot.com',
  messagingSenderId: '413048072789'
}

firebase.initializeApp(config)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
