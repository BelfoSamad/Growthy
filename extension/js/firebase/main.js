//This is the Main Firebase script to be used in the popup/background/the games

/* ---------------------------------- Firebase Setup */
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

//Database
let database = firebase.database();

function saveHistory(parent_id, child_id, level, progress) {
    //Save History
    database.ref(parent_id + '/children/' + child_id + '/history').push({
        level: level,
        progress: progress
    });
}