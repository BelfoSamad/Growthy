// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC5Rteed1bnMon36RUcOQ4Y_ESik_-AMlM",
    authDomain: "yt-ext-m.firebaseapp.com",
    databaseURL: "https://yt-ext-m.firebaseio.com",
    projectId: "yt-ext-m",
    storageBucket: "yt-ext-m.appspot.com",
    messagingSenderId: "336032229322",
    appId: "1:336032229322:web:dd0e7deb7c87f233a49133",
    measurementId: "G-FEGSLB0VFP"
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
        auth.signInWithEmailAndPassword(request.userData.email, request.userData.password).then(function (user) {
            console.log(user);
        }, function (error) {
            console.log(error.message);
        });
    } else if (request.command === "signup") {
        //signup firebase method
        auth.createUserWithEmailAndPassword(request.userData.email, request.userData.password).then(function (user) {
            console.log(auth.currentUser.email);


        }, function (error) {
            console.log(error.message);
            // error message show that you need to enable that authentication in firebase
        });
    } else if (request.command === "logout") {
        //logout
        console.log("Logging out");
        console.log(auth.currentUser);
        auth.signOut();
        console.log(auth.currentUser);
    }
});



