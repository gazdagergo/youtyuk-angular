
process.env.FIREBASE_PROJECT = JSON.stringify({
  apiKey: "AIzaSyBfXtwHBhGS6UVEZiBMel2n79GQ8tPlqI8",
  authDomain: "youtyuk-4e5b5.firebaseapp.com",
  databaseURL: "https://youtyuk-4e5b5.firebaseio.com",
  projectId: "youtyuk-4e5b5",
  storageBucket: "youtyuk-4e5b5.appspot.com",
  messagingSenderId: "699546239047"
});

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const payHeper = require('./barionHelper');

exports.writeExample = functions.database.ref('/payments').onWrite(event => {
  payHeper.initPayment();
});
