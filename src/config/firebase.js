import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB1C2F-MMsR7FIuNoOXCXCzmul-HGkAVlM",
  authDomain: "blogers.firebaseapp.com",
  databaseURL: "https://blogers.firebaseio.com",
  projectId: "blogers",
  storageBucket: "blogers.appspot.com",
  messagingSenderId: "882860398193",
  appId: "1:882860398193:web:9d30c6007223d0428eedd0",
  measurementId: "G-KF63KR1B4Z"
};

firebase.initializeApp(firebaseConfig);
export default firebase;

export const database = firebase.database();