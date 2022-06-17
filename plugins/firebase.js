// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCSf9neJHiVUjJnZkcrc8cWkNxk_ghmL1A',
  authDomain: 'travel-pass-system.firebaseapp.com',
  projectId: 'travel-pass-system',
  storageBucket: 'travel-pass-system.appspot.com',
  messagingSenderId: '800005565415',
  appId: '1:800005565415:web:4b0a5a813c81703693ab42',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const storage = getStorage(app)

export { app, db, storage }
