import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAK01ABMXwoV5PoVbCe4iltkHcZT2Zjkbw",
  authDomain: "ai-cypher.firebaseapp.com",
  projectId: "ai-cypher",
  storageBucket: "ai-cypher.appspot.com",
  messagingSenderId: "667191630254",
  appId: "1:667191630254:web:06e1115e08d61ce69d503f"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
export { auth, provider };
export{ firebaseApp};
