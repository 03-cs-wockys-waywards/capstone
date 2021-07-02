import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCIbFoG3SWm5wVN1JThFcMsmsOeHCK2s2U',
  authDomain: 'tutorial-5feba.firebaseapp.com',
  databaseURL: 'tutorial-5feba.firebaseio.com',
  projectId: 'tutorial-5feba',
  storageBucket: 'tutorial-5feba.appspot.com',
  messagingSenderId: '21605533601',
  appId: '1:21605533601:ios:9e560433f13c3ac00eede0',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };