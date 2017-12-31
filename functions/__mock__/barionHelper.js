const request = require('request');

function mockGet() {
  return new Promise((resolve, reject) => {
    var options = {
      url: 'https://youtyuk-4e5b5.firebaseio.com/mockBarion/0.json',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
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
    return mockGet();
  }
};
