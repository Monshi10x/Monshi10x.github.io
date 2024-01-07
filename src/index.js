// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore, collection, addDoc, getDocs, getDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyD1ejmkXphiO_opWxIK6j0DOTL3HbJXw1E",
      authDomain: "signscheduler.firebaseapp.com",
      projectId: "signscheduler",
      storageBucket: "signscheduler.appspot.com",
      messagingSenderId: "895903994322",
      appId: "1:895903994322:web:7bf734a996bd7867cb380b",
      measurementId: "G-VR35T9C7WY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

console.log(await getCollectionDataObject("users"));

async function addDocToCollection(collectionName, jsonData) {
      let docRef = null;

      try {
            docRef = await addDoc(collection(db, collectionName), jsonData);
            console.log("Document written with ID: ", docRef.id);
      } catch(e) {
            console.error("Error adding document: ", e);
      }

      return docRef;
}

async function getDocsFromCollection(collectionName) {
      let collectionData;

      try {
            collectionData = await getDocs(collection(db, collectionName));
      } catch(e) {
            console.error("Error getting document: ", e);
      }

      return collectionData;
}

async function getCollectionDataObject(collectionName) {
      let collectionData;
      let collectionDataArray = [];

      try {
            collectionData = await getDocs(collection(db, collectionName));
            collectionData.forEach((doc) => {
                  collectionDataArray.push({id: doc.id, data: doc.data()});
            });
      } catch(e) {
            console.error("Error getting collection data: ", e);
      }

      return collectionDataArray;
}