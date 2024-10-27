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

const COLOUR = {
      BillboardMenus: "white",
      MediumGrey: "#cecece",
      MidGrey: "#888",
      DarkGrey: "rgb(51,51,51)",
      Blue: "blue",
      LightBlue: "#00a1ff",
      MidBlue: "rgb(170 186 255)",
      DarkBlue: "#000088",
      Black: "black",
      White: "white",
      Red: "red",
      Yellow: "yellow",
      Orange: "#ff4000",
      BrightGreen: "rgb(21, 193, 34)",
      Purple: "rgb(149, 0, 200)"
};
const STYLE = {
      Button: "display: block; float: left; width: 45%; background-color: " + COLOUR.Blue + "; color:white;min-height: 35px; margin: 10px; border:4px solid " + COLOUR.Blue + ";cursor: pointer;",
      InputField: "float:left;width:200px;height:15px;margin: 4px;padding:4px;border:1px solid;box-shadow: rgb(199 199 199) 4px 6px 20px 0px;box-sizing:content-box;",
      InputInfield: "float:left;width:250px;min-height:40px;border:1px solid rgb(177, 177, 177);box-shadow: rgb(199 199 199) 4px 6px 20px 0px;position: relative;margin:5px;background-color:white;",
      DropDownField: "float:left;width:200px;height:15px;margin: 4px;padding:4px;border:1px solid rgb(177, 177, 177);;box-shadow: rgb(199 199 199) 4px 6px 20px 0px;box-sizing:content-box;",
      DropDownInfield: "float:left;width:250px;min-height:40px;border:1px solid rgb(177, 177, 177);;box-shadow: rgb(199 199 199) 4px 6px 20px 0px;position: relative;margin:5px;background-color:white;",
      Label: "color:black;float:left;width:200px;height:25px;margin: 0px;padding:4px;box-sizing:border-box;",
      Checkbox: "color:black;float:left;width:200px;height:15px;margin: 10px;padding:10px;border:1px solid rgb(177, 177, 177);box-sizing:content-box;",
      CheckboxInfield: "float: left; min-height: 42px; border: 1px solid rgb(177, 177, 177); box-shadow: rgb(199 199 199) 4px 6px 20px 0px;position: relative; margin: 5px; background-color: white; width: 97%;padding-top: 4px;box-sizing:border-box;",
      Depictions: "float:left;width:15px;height:30px;margin: 5px;padding:4px;border:1px solid #888;box-sizing:content-box;background-color:white;",
      BillboardMenus: "display:block;float:left;box-sizing:border-box;background-color:" + COLOUR.BillboardMenus + ";min-height:30px; margin: 10px 20px 30px;width: calc(100% - 40px);box-shadow: rgb(0 0 0 / 80%) 3px 4px 10px 0px;padding:10px;accent-color:" + COLOUR.Blue + ";",
      DropShadow: "box-shadow: rgb(98 98 98) 5px 5px 10px -3px;",
      HeaderFont: "font-family: 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;font-weight:bold;font-size:14px;",
      HeadingStyle1: "height:30px;z-index:99;position: relative;margin:0px;background-color:" + COLOUR.DarkBlue + ";width:100%;box-sizing: border-box;padding:0px;font-size:10px;color:white;text-align:center;line-height:30px;box-shadow: rgb(61 61 61) 0px 6px 14px 2px;margin:20px 0px;border:1px solid " + COLOUR.DarkBlue + ";",
      Table: "float:left;width:100%;border-collapse: collapse;table-layout: auto;color:white;",
      TableHeader: "font-weight: bold; font-family: 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;background-color:" + COLOUR.Blue + ";colour:white;table-layout: auto;",
      TableData: "box-sizing: border-box;outline: 1px solid #000;outline-offset:-1px;text-align:left;padding: 5px;color:black;background-color:white;table-layout: fixed;",
      Div: "float:left;box-sizing:border-box;border:1px solid #000;border-collapse: collapse;background-color:" + COLOUR.MidBlue + ";",
      Div2: "display: block; float: left; width: 88%; background-color: white; min-height: 10px; margin: 10px 20px 30px; box-shadow: rgba(0, 0, 0, 0.8) 3px 4px 10px 0px; padding: 10px; accent-color: blue;overflow-y:auto;max-height:800px;",
      Div3: "display: block; box-sizing:border-box;float: left; background-color: white; min-height: 10px; margin: 10px 20px 30px;width: calc(100% - 40px); box-shadow: rgba(0, 0, 0, 0.8) 3px 4px 10px 0px; padding: 0px; accent-color: blue;overflow-y:none;max-height:800px;"
};


function createText(text, overrideCssStyles, parentObjectToAppendTo) {
      let _text = document.createElement('p');
      _text.innerText = text;
      _text.style.cssText += overrideCssStyles;
      if(parentObjectToAppendTo != null) {
            parentObjectToAppendTo.appendChild(_text);
      }
      return _text;
}

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
      let item = createText(JSON.stringify(data[i]), null, document.getElementById("MainContent"));
      item.id = "boardItem";
}

let container = new UIContainerType3("width:200px;height:100px;", "test", document.getElementById("MainContent"));
console.log(container);
console.log("T");