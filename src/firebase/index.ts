import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import firebaseConfig from './firebaseConfig';

export function useFirebase(): firebase.app.App {
  if (firebase.apps.length === 0) {
    return firebase.initializeApp(firebaseConfig);
  } else {
    return firebase.app();
  }
}
