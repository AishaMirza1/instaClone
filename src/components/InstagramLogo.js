import { Link } from "react-router-dom";
import styles from "./instagramLogo.module.css"
import { BsInstagram  } from "react-icons/bs";
export default function InstagramLogo({showSearchBar}){
    return <div className={styles.logoContainer} >
       <h1 className={styles.instagramLogo} style={showSearchBar?{display:"none"}:{}}>Instagram</h1>
       <h1 className={styles.instaLogo} style={showSearchBar?{display:"block", marginBottom:"3rem"}:{}} ><Link  to="/"> <BsInstagram /></Link></h1>
    </div>
}

