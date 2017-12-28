var replace = require('replace-in-file');
firebaseApiKey = process.env.FIREBASE_API_KEY;
const options = {
  files: 'environments/environment.prod.ts',
  from: /{FIREBASE_API_KEY}/g,
  to: firebaseApiKey,
  allowEmptyPaths: false,
};

try {
  let changedFiles = replace.sync(options);
  console.log('FirebaseApiKey set');
}
catch (error) {
  console.error('Error occurred:', error);
}