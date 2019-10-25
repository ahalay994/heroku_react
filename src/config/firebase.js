import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD8O1KmQTmOwhTHIJEfNXo8cD3Vt95XX2I",
  authDomain: "ahalay-react-167a2.firebaseapp.com",
  databaseURL: "https://ahalay-react-167a2.firebaseio.com",
  projectId: "ahalay-react-167a2",
  storageBucket: "",
  messagingSenderId: "640100464857",
  appId: "1:640100464857:web:f29249f42dea2651"
};

firebase.initializeApp(firebaseConfig);
export default firebase;

export const database = firebase.database();