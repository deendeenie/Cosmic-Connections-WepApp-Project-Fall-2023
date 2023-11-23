import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAZKpMc6pIfCEQyTM9cqdSJ8pR4-WjZUP0",
  authDomain: "webapp-project-2023.firebaseapp.com",
  databaseURL: "https://webapp-project-2023-default-rtdb.firebaseio.com",
  projectId: "webapp-project-2023",
  storageBucket: "webapp-project-2023.appspot.com",
  messagingSenderId: "861223693626",
  appId: "1:861223693626:web:8d732194cfcf03f9287403"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)