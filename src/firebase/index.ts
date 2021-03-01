import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import firebaseConfig from './firebaseConfig';

export function useFirebase(): firebase.app.App {
  if (firebase.apps.length === 0) {
    const firebaseApp = firebase.initializeApp(firebaseConfig);
    firebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .catch(error => console.error(error));
    return firebaseApp;
  } else {
    return firebase.app();
  }
}
