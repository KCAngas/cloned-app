import { auth, provider } from "../firebase-config.js";
import { signInWithRedirect } from "firebase/auth"
import "../styles/Auth.css"

import Cookies from "universal-cookie"
const cookies = new Cookies();

export const Auth = (props) => {
    const { setIsAuth } = props;

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithRedirect(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);
            setIsAuth(true);
        } catch(err) {
            console.error(err)
        }
    }
    return <div className="auth">
        <p> Sign In With Google To Continue</p>
        <button className="btn" onClick={signInWithGoogle}> Sign In With Google</button>
    </div>
}