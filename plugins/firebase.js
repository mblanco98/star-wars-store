import Vue from 'vue'
import 'firebase/firestore'
import firebase from 'firebase/app'
import { firestorePlugin } from 'vuefire'
import { config } from '../config/firebaseConfig'

Vue.use(firestorePlugin)

firebase.initializeApp(config)
export default ({ app }, inject) => {
  inject('$db', () => firebase.firestore())
}
