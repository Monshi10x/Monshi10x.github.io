import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore, collection, addDoc, getDocs, getDoc} from "firebase/firestore";
import {getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
      apiKey: "AIzaSyD1ejmkXphiO_opWxIK6j0DOTL3HbJXw1E",
      authDomain: "signscheduler.firebaseapp.com",
      projectId: "signscheduler",
      storageBucket: "signscheduler.appspot.com",
      messagingSenderId: "895903994322",
      appId: "1:895903994322:web:7bf734a996bd7867cb380b",
      measurementId: "G-VR35T9C7WY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

/*
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
      })
      .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
      });
*/

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



let data = await getCollectionDataObject("boardItem");
console.log(data);
for(let i = 0; i < data.length; i++) {
      console.log(data[i]);
      let container = new UIContainerType3("width:200px;height:500px;", "test", document.getElementById("MainContent"));
      let item = createText(JSON.stringify(data[i]), "display:block;height:100%;", container.contentContainer);
      item.id = "boardItem";
}

