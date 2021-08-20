//This is the Main Firebase script to be used in the popup/background/the games

/* ---------------------------------- Firebase Setup */
var firebaseConfig = {
    apiKey: "AIzaSyD29SsoqMAJlpezphsMnNd6-EVmXXRBS_U",
    authDomain: "ext-ng.firebaseapp.com",
    databaseURL: "https://ext-ng.firebaseio.com",
    projectId: "ext-ng",
    storageBucket: "ext-ng.appspot.com",
    messagingSenderId: "367815588601",
    appId: "1:367815588601:web:47b22df35fca571ad0c028",
    measurementId: "G-6N4H4VDGCS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Database
let database = firebase.database();

function saveHistory(parent_id, child_id, level, progress) {
    console.log(parent_id);
    //Save History
    database.ref(parent_id + '/children/' + child_id + '/history').push({
        level: level,
        progress: progress
    });
}