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

fetch("https://sar10686.corebridge.net/SalesModule/Orders/OrderProduct.asmx/GetOrderProductQueueEntriesPaged", {

      "headers": {

            "accept": "application/json, text/javascript, */*; q=0.01",

            "accept-language": "en-US,en;q=0.9",

            "content-type": "application/json; charset=UTF-8",

            "priority": "u=1, i",

            "sec-ch-ua": "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",

            "sec-ch-ua-mobile": "?0",

            "sec-ch-ua-platform": "\"Windows\"",

            "sec-fetch-dest": "empty",

            "sec-fetch-mode": "cors",

            "sec-fetch-site": "same-origin",

            "x-requested-with": "XMLHttpRequest",

            "cookie": "ClientTag=22BE2ABE-D4C1-4A15-B42C-FC303FBB7298; UserRights=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; DefaultModule=Sales; HasCompletedSetupV2=True; ApplicationType=FD4naGyhk0IXStNRYgln15wXeB/jZH86s0heNFkfXdg=; UserId=tHf3DtAKnd9ehnpIdKdP2g==; UserName=+cNHthNvtyxVIrHwxL7LIw==; UserTimeZoneIdentifier=42SFBouJcrbg28G9Wp7KMVac4vfZallkIwIUeOqGL2c=; UserTimeZoneOffset=D+BwgMz2hifuHl0BC3bbyg==; showUserTzMoniker=FJtcr14ZHg6LV29SEn95jQ==; LocationId=w9hxGXa6WnQ4/QJa2uoqhw==; TenantDatabaseName=sOrBZ7+ABzD79bLytUv272cVXGLdypJwg4rsIDt0pBg=; TenantConnectionString=ZtqCtVvaEpp5sbd0oT1JoOJjMNiTZWOzal6bpZMOGaZ9HPP42J8QkL2OUeRZMYb2h/N0s+PGgt5XcLisJsuAb5AfjdL1K84BTKBSxpXiIWYdrdJlU5nmqi3HNbcMvegEWBIc4kONo7AJt7aknMBUQa72KSL1VvSphBTGd+RIX3g=; EmailEnabled=8OKBznESnInR3tUiV9dNhA==; tenantTypeId=QkxY9wqtzbDGJmL/L84dbw==; TenantCoreBridgeHostName=vnPD5p4GV0/WJ/3git0HqQ==; googtrans=/en/en; __utmz=249700116.1721344729.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); _ga=GA1.2.2022194508.1721344729; _ga_ZLGWX426TP=GS1.1.1721345994.1.1.1721346025.0.0.0; ai_user=An+AT|2024-07-18T23:40:41.109Z; ASP.NET_SessionId=jplaugaxftwk04mfxzaf4ora; offset=600; __utmc=249700116; cbManagementSystemLogin=2D53A627EE818240FEB1E39F452CEE4AFE5C160120DADDA08F6C3BEFFAC5DD037DD84E466F4AFE9CEFE7CB938C3BFA4ED08C7BBAC091F6F84A003C4D5506D7BC05E2CBF58E568451EC506B5A5DF88060665A069276EB1488772B83463AAFDFCF; custHistoryPaymentsTabIdx=0; __utma=249700116.2022194508.1721344729.1730160866.1730166416.435; __utmt=1; __utmb=249700116.10.10.1730166416",

            "Referer": "https://sar10686.corebridge.net/DesignModule/DesignMainQueue.aspx",

            "Referrer-Policy": "strict-origin-when-cross-origin"

      },

      "body": "{\"sEcho\":2,\"iColumns\":21,\"sColumns\":\"\",\"iDisplayStart\":0,\"iDisplayLength\":\"500\",\"iSortCol_0\":0,\"sSortDir_0\":\"asc\",\"viewType\":\"design\",\"queueType\":\"design_wip\",\"txSearch\":\"\",\"pageIndex\":1,\"arrQueueFilters\":[null,\"\",null,\"\",\"\",\"\",null,\"\",null,null,\"\",\"\",null,null]}",

      "method": "POST"

}).then((res) => {

      return res.json();

}).then((json) => {

      alert(json);

});




