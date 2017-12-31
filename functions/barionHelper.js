var request = require('request');

function postRequest() {
  return new Promise((resolve, reject) => {
    var json = {
      "POSKey": "199122ddbf344141a14d135e7225b14a",
      "PaymentType": "Immediate",
      "GuestCheckOut": true,
      "FundingSources": ["Bankcard"],
      "PaymentRequestId": 12,
      "Transactions": [{
        "POSTransactionId": "TRANS-12",
        "Payee": "gazda.gergely@hotmail.com", 
        "Total": 33,
        "Items": [{
          "Name": "TestItem",
          "Description": "A test item",
          "Quantity": 1,
          "Unit": "piece",
          "UnitPrice": 1000,
          "ItemTotal": 1000
        }]
      }],
      "Locale": "hu-HU",
      "Currency": "HUF"
    };

    var options = {
      url: 'https://api.test.barion.com//v2/Payment/Start',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      json: json
    };

    request(options, function(err, res, body) {
      if (res && (res.statusCode === 200 || res.statusCode === 201)) {
        resolve(body);
      }
    });
  });
}


module.exports = {
  initPayment: function() {
    result = postRequest().then(res => console.log(res));
  }
};
