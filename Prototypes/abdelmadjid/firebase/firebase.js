
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




chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.command === "signin"){
        console.log(request.userData.email);
        console.log(request.userData.password);
        //TODO remove the console logging of the user
        auth.signInWithEmailAndPassword(request.userData.email, request.userData.password).
        then(function(user){
            console.log(user)
        }, function(error) {
            console.log(error.message);
            // error message show that you need to enable that authentication in firebase
        });
    }
});

