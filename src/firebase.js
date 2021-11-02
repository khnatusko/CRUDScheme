import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'

import 'firebase/compat/firestore'

import 'firebase/compat/storage'



var firebaseConfig = {
    apiKey: "AIzaSyCm2e6O0AwHBuUzFxeJfmcT9VAeerlao9w",
    authDomain: "pwig-8036b.firebaseapp.com",
    projectId: "pwig-8036b",
    storageBucket: "pwig-8036b.appspot.com",
    messagingSenderId: "655079150628",
    appId: "1:655079150628:web:cd224020309285d43c74b1"
  }

  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()
  const functions = firebase.functions()

  const dishesCollection = db.collection('dishes')

  export {
      db,
      auth,
      storage,
  }
