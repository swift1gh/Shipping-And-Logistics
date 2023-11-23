//FIREBASE AUTHENTICATION
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAuth, onAuthStateChanged, } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, updateProfile } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDKPQgjZErpjzntQIQ8iGbLxiSGeHEuhsw",
  authDomain: "taigaship.firebaseapp.com",
  databaseURL: "https://taigaship-default-rtdb.firebaseio.com",
  projectId: "taigaship",
  storageBucket: "taigaship.appspot.com",
  messagingSenderId: "241770946625",
  appId: "1:241770946625:web:5898d708e9590776ea66c0"
};
firebaseConfig.initializeApp(firebaseConfig);

const auth = getAuth(app);
const app = initializeApp(firebaseConfig);



//Regiser New User
function register (){
   const email =document.getElementById('email').value;
   const password = document.getElementById('password').value;
   const username = document.getElementById('username').value;

   createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    });

}




onAuthStateChanged(auth, user => {
  if(user !== null){
    console.log('Logged In!');
    const uid = user.uid;
  }else{
    console.log('User Not Registered')
  }
});

const user = auth.currentUser;
if (user !== null) {
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  const uid = user.uid;

  user.providerData.forEach((profile) => {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  username: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
    });
}








function validate_email(email){
    const expression= /^[^@]+@\w+(\.\w+)+\w$/.test(str);
    if(expression.text(email) == true) {
        return true;
    }else{
        return false;
    }
}
function validate_password(password){
    if (password<6){
        return false;
    }else{
        return true;
    }
}
function validate_field(field){
    if(field == null){
        return false;
    }
    if(field.length <=0){
        return false;
    }else {
        return true;
    }
}




//Login

signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
});


























