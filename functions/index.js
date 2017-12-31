
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

const payHeper = require('./__mock__/barionHelper');

exports.newPayment = functions.database.ref('/payments/{PosPayId}').onCreate(event => {
  let paymentId;
  payHeper.initPayment().then(response => {
    paymentId = response.PaymentId;
    const PosPayId = event.params.PosPayId;
    admin.database().ref(`payments/${PosPayId}`).update({
      paymentId: paymentId + PosPayId
    });
  });
});
