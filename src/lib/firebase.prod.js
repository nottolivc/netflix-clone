import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDQpHiuwVt6mKjjEo6pm2kjJj_Tp0Ke14E',
  authDomain: 'netflix-clone-d0508.firebaseapp.com',
  databaseURL: 'https://netflix-clone-d0508.firebaseio.com',
  projectId: 'netflix-clone-d0508',
  storageBucket: 'netflix-clone-d0508.appspot.com',
  messagingSenderId: '413900680155',
  appId: '1:413900680155:web:33ee9c5c63316b51d4d5fe',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data
export { firebase };