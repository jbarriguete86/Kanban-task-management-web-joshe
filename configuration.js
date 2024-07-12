
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { doc, getDoc, getDocs, updateDoc, addDoc, collection, getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDuLXeShHUjUD_PEPQBucHMGp_R0e_p-wo",
//   authDomain: "kanban-task-management-joshe.firebaseapp.com",
//   projectId: "kanban-task-management-joshe",
//   storageBucket: "kanban-task-management-joshe.appspot.com",
//   messagingSenderId: "346726850724",
//   appId: "1:346726850724:web:63e3ebf2ac84048ff30631",
//   measurementId: "G-74NCLCHL5G"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app)
// const ticketsRef= collection(db, "users")

// const getBoards = async () => {
//     try {
//       const querySnapshot = await getDocs(ticketsRef);
//       let boardsDb = [];
//       querySnapshot.forEach((doc) => {
//         boardsDb.push({ id: doc.id, ...doc.data() });
//       });
//       return boardsDb;
//     } catch (error) {
//       console.error("Error fetching boards:", error);
//       throw error; // Propagate the error further if needed
//     }
//   };

async function fetchData(){
    const response = await fetch("./data.json")
    if(!response.ok){
        throw new Error('Network response was not ok' + response.statusText)
    }
    return await response.json()
}

export default async function initialize(){
    try {
        const boards = await fetchData()
        return boards
    } catch (error){
        console.error('Error fetching data:', error)
    }
}

// export {getBoards}