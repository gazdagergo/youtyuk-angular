var replace = require('replace-in-file');

const firebaseApiKey = process.env.FIREBASE_API_KEY;
const messagingSenderId = process.env.MESSAGING_SENDER_ID;
const projectId = process.env.PROJECT_ID;

const options = {
  files: 'environments/environment.prod.ts',
  from: [
    '{FIREBASE_API_KEY}',
    '{MESSAGING_SENDER_ID}',
    /{PROJECT_ID}/g
  ],
  to: [
    firebaseApiKey,
    messagingSenderId,
    projectId
  ],
  allowEmptyPaths: false,
};

try {
  let changedFiles = replace.sync(options);
  console.log('Environmental variables set in environment.prod.ts');
}
catch (error) {
  console.error('Error occurred:', error);
}