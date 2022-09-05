import firebase from 'firebase'
import 'firebase/auth' 
import 'firebase/firestore' 

const firebaseConfig = {
    apiKey: "AIzaSyAGI7kN5OaIuBEnptHY-IXvUi9-JasQLPk",
    authDomain: "fir-a6efa.firebaseapp.com",
    projectId: "fir-a6efa",
    storageBucket: "fir-a6efa.appspot.com",
    messagingSenderId: "925044866274",
    appId: "1:925044866274:web:4d8ef33620968a8e07f2bb",
    measurementId: "G-ZX9HC348K9"
  };
 export default firebase.initializeApp(firebaseConfig)
