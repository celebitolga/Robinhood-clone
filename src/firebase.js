import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAnvj9nQC7fjUZ13QZ8MDZKYHoa6XvHA50",
  authDomain: "robinhood-ba939.firebaseapp.com",
  projectId: "robinhood-ba939",
  storageBucket: "robinhood-ba939.appspot.com",
  messagingSenderId: "463808695472",
  appId: "1:463808695472:web:125031d5beccbcf8487f75",
  measurementId: "G-037D3SLDD0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };