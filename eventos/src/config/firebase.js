import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyAudkKaXaDPovCMPiQ_UPs_pT2TYr-QejA",
    authDomain: "eventos-643c5.firebaseapp.com",
    databaseURL: "https://eventos-643c5.firebaseio.com",
    projectId: "eventos-643c5",
    storageBucket: "eventos-643c5.appspot.com",
    messagingSenderId: "281533676428",
    appId: "1:281533676428:web:fb50842b3f2eaa10d834a9"
  };
  // Initialize Firebase

 firebase.initializeApp(firebaseConfig);
 export default firebase;
