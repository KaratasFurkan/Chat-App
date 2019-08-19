import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

var config = {
    apiKey: "AIzaSyCSnsLsk_-uWTcCURbEUj9d8e4YV3A86Wo",
    authDomain: "chat-cruz.firebaseapp.com",
    databaseURL: "https://chat-cruz.firebaseio.com",
    projectId: "chat-cruz",
    storageBucket: "chat-cruz.appspot.com",
    messagingSenderId: "813139259937",
    appId: "1:813139259937:web:a2896c1a8b315463"
}

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase