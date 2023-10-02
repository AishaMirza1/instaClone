import { Link } from "react-router-dom";
import styles from "./instagramLogo.module.css"
import { BsInstagram  } from "react-icons/bs";
export default function InstagramLogo(){
    return <div className={styles.logoContainer}>
       <h1 className={styles.instagramLogo}>Instagram</h1>
       <h2 className={styles.instaLogo} ><Link  to="/"> <BsInstagram /></Link></h2>
    </div>
}

