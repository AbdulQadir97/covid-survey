
import { initializeApp } from "firebase/app";
import { getAuth } from '@firebase/auth';
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAFczf_7v6quXtK3J_1qRAn9MlMqy0HBvY",
  authDomain: "covidsurveyform-84240.firebaseapp.com",
  projectId: "covidsurveyform-84240",
  storageBucket: "covidsurveyform-84240.appspot.com",
  messagingSenderId: "147450480712",
  appId: "1:147450480712:web:6a78652a956a346378707d",
  measurementId: "G-RXDQJG0HP1"
};
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const db = getFirestore(app)
  export const storage = getStorage(app)