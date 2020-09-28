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

function saveGameData(parent_uid, child_id, game_id, level, progress) {
  //Save Progress
  database.ref('parents/' + parent_uid + '/children_info/'+child_id+'/games/'+game_id).update({
    level: level,
    progress: progress
  });

  //Save History
  database.ref('parents/' + parent_uid + '/history').push({
    game: game_id.charAt(0).toUpperCase() + game_id.slice(1),
    child_id: child_id,
    level: level,
    progress: progress
  });
}