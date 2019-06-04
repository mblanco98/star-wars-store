import Vue from 'vue'
import 'firebase/firestore'
import firebase from 'firebase/app'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)

const config = {
  apiKey: 'AIzaSyB8KUYJVJkoLYks7OXdbsHIJzuJmH8tK_4',
  authDomain: 'star-wars-store.firebaseapp.com',
  databaseURL: 'https://star-wars-store.firebaseio.com',
  projectId: 'star-wars-store',
  storageBucket: '',
  messagingSenderId: '812122947622',
  appId: '1:812122947622:web:e5cd73e7ded75fc1'
}

firebase.initializeApp(config)
export default ({ app }, inject) => {
  inject('$db', () => firebase.firestore())
}
