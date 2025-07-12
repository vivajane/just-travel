import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase.Config";
import { doc, setDoc } from "firebase/firestore";

const SignUp = async (email, password, userName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      userName: userName,
    });
    return user;
  } catch (error) {
    console.error("Error signing up:", error.message);
    throw error;
  }
};

export default SignUp;
