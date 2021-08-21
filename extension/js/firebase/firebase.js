
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDsYJpDC7TwkR1ltBHcwQDU317RCba-bPA",
    authDomain: "growthy-b7663.firebaseapp.com",
    databaseURL: "https://growthy-b7663-default-rtdb.firebaseio.com",
    projectId: "growthy-b7663",
    storageBucket: "growthy-b7663.appspot.com",
    messagingSenderId: "387255261752",
    appId: "1:387255261752:web:1cf281f214148a585964cd",
    measurementId: "G-EJPQK1TL2D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const database = firebase.database();
let auth = firebase.auth();

//--------------------------------------------------
// HANDLE MESSAGES RELATED TO FIREBASE INTERACTION
//--------------------------------------------------

//TODO POLISH AUTH FUNCTIONALITY
//TODO remove the console logging of the user
//TODO find a solution to delays of firebase interactions eg: signout doesn't happen instantaneously
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.command === "login") {
        console.log(request.userData.email);
        console.log(request.userData.password);
        auth.signInWithEmailAndPassword(request.userData.email, request.userData.password).
            then(function (user) {
                console.log(user);
            }, function (error) {
                console.log(error.message);
            });
    } else
        if (request.command === "signup") {
            //signup firebase method
            auth.createUserWithEmailAndPassword(request.userData.email, request.userData.password).then(function (user) {
                console.log(auth.currentUser.email);


            }, function (error) {
                console.log(error.message);
                // error message show that you need to enable that authentication in firebase
            });
        } else
            if (request.command === "logout") {
                //logout
                console.log("Logging out");
                console.log(auth.currentUser);
                auth.signOut();
                console.log(auth.currentUser);
            }
});



