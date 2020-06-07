//Declarations
let watch_time = 3; //TODO: Get the Time from the popup.js
let game_time = 5; //TODO: Get the time from the popuhp.js
/*-------------------------------------- Timer -------------------------------------------------*/
/*------------------------------ Inject Content Scripts ----------------------------------------*/
/*--------------------------------- Timer Management -------------------------------------------*/
/*---------------------------------- Injecting Games -------------------------------------------*/
/* ---> Firebase Setup
var firebaseConfig = {
  apiKey: "AIzaSyD8lAoB_uRtirEjew0CnKTH_VNhWA0zhJ0",
  authDomain: "extension-e927c.firebaseapp.com",
  databaseURL: "https://extension-e927c.firebaseio.com",
  projectId: "extension-e927c",
  storageBucket: "extension-e927c.appspot.com",
  messagingSenderId: "1080995667086",
  appId: "1:1080995667086:web:0d42767c0cd92367573ddf",
  measurementId: "G-EQ0X3P6SKC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Storage
var storage = firebase.storage();
var storageRef = storage.ref();

storageRef.child('games/game1/tab.html').getDownloadURL().then(function(url) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function(event) {
    var blob = xhr.response;
  };
  xhr.open('GET', url);
  xhr.send();
}).catch(function(error) {
  // Handle any errors
});*/