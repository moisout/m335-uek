import firebase from 'firebase/app'
import 'firebase/storage'

export default {
  storageRef: firebase.storage().ref()
}
