import Firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCuAKw63yqcoR7nzvGqGfhVWnjduJ975xg",
    authDomain: "todoapp-681bd.firebaseapp.com",
    databaseURL: "https://todoapp-681bd.firebaseio.com",
    projectId: "todoapp-681bd",
    storageBucket: "todoapp-681bd.appspot.com",
    messagingSenderId: "1051876409718",
    appId: "1:1051876409718:web:b493c96dc074fa07ae3a57"
  };

  const app = Firebase.initializeApp(firebaseConfig);
  export const db = app.database();

