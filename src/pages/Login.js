import { Link } from "react-router-dom"
import styles from "./signupLogin.module.css"
import InstagramLogo from "../components/InstagramLogo"
export function Login(){
    
    return  <>
    <div className={styles.signupLoginPage}>
        <div>
            <InstagramLogo />
            <form>
                <input type="text" placeholder="Username or email"/>
                <input type="text" placeholder="Password"/>
                <button>Log in</button>
            </form>
        </div>
 
  
    </div>
    <div className={styles.signupLoginPage} >
        <p>Don't have an account?<Link to="/account/emailsignup"> Sign up</Link></p>
    </div>
    
    </>
    
    
  
}