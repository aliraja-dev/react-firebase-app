import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "USE YOUR OWN CREDENTIALS FROM FIREBASE",
    authDomain: "USE YOUR OWN CREDENTIALS FROM FIREBASE",
    projectId: "USE YOUR OWN CREDENTIALS FROM FIREBASE",
    storageBucket: "USE YOUR OWN CREDENTIALS FROM FIREBASE",
    messagingSenderId: "USE YOUR OWN CREDENTIALS FROM FIREBASE",
    appId: "USE YOUR OWN CREDENTIALS FROM FIREBASE",
    databaseURL: "USE YOUR OWN CREDENTIALS FROM FIREBASE",
})

export const auth = app.auth()
export default app
