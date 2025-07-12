import { getDoc, doc } from "firebase/firestore";
import { db, auth } from "./firebase.Config";
import { signInWithEmailAndPassword } from "firebase/auth";



const Login = async(email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const userDoc = await getDoc(doc(db, "users" , user.uid))
        const userData = userDoc.exists() ? userDoc.data() : {}
        return {...userData, ...user}

    } catch (error) {
        console.log("Error signing up:", error.message);
        throw error;
        
    }
    
}

export default Login