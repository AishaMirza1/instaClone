import { Link } from "react-router-dom";
import styles from "./signupLogin.module.css"

import InstagramLogo from "../components/InstagramLogo";
export function SignUp(){
    return <>
    <div className={styles.signupLoginPage}>
          <div>
           <InstagramLogo />
           <p>Sign up to see photos and videos from your friends.</p>
            <form>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Username"/>
                <input type="text" placeholder="Password"/>
                <p>People who use our service may have uploaded your contact information to Instagram. Learn More</p>

                <button>Sign up</button>
            </form>
          </div>

      </div>   
     <div className={styles.signupLoginPage}>
            <p>Have an account?<Link to="/account/login"> Login</Link></p>
          </div>
          
    
    </>
}