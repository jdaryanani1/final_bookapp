import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDUcOapxfbYe83YOWxdZzK_T7mL982kuRs",
  authDomain: "wireless-library-a6aa5.firebaseapp.com",
  databaseURL: "https://wireless-library-a6aa5.firebaseio.com",
  projectId: "wireless-library-a6aa5",
  storageBucket: "wireless-library-a6aa5.appspot.com",
  messagingSenderId: "913980927324",
  appId: "1:913980927324:web:0306476813d1ea0c852599"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
