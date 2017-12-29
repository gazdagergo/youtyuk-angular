// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "{FIREBASE_API_KEY}",
    authDomain: "youtyuk-4e5b5.firebaseapp.com",
    databaseURL: "https://youtyuk-4e5b5.firebaseio.com",
    projectId: "youtyuk-4e5b5",
    storageBucket: "youtyuk-4e5b5.appspot.com",
    messagingSenderId: "{MESSAGING_SENDER_ID}"
  }
};
