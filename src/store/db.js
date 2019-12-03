import firebase from 'firebase/app'
import 'firebase/database'

export default {
  db: firebase.initializeApp({
    apiKey: 'AIzaSyD4DA6n10rK3wFkvrIGGGj2OLST8sVCe8E',
    authDomain: 'pictshare-vue.firebaseapp.com',
    databaseURL: 'https://pictshare-vue.firebaseio.com',
    projectId: 'pictshare-vue',
    storageBucket: 'pictshare-vue.appspot.com',
    messagingSenderId: '413048072789',
    appId: '1:413048072789:web:7ed1252f398a44fccf02dc'
  }).database()
}
