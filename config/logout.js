const { signOut } = require("firebase/auth")
const { auth } = require("./firebase.Config")

const Logout = async () => {
    try {
        await signOut(auth)
        console.log("signed out")
    } catch (error) {
        console.log(error)
        
    }
}
export default Logout