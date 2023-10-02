import styles from "./sidebar.module.css"
import { GoHome,GoHeart,GoPlusCircle,GoSearch } from "react-icons/go";
import { FiZap } from "react-icons/fi";
import InstagramLogo from "./InstagramLogo"
import { LuGrid,LuUser2 } from "react-icons/lu";
import { ImCompass2 } from "react-icons/im";
import { NavLink } from "react-router-dom";
import Search from "./Search"
import { useEffect, useState } from "react";
export function SideBar(){
    const [width, setWidth]   = useState(window.innerWidth);
useEffect(() => {
    window.addEventListener("resize", ()=>{ setWidth(window.innerWidth);});
    return () => window.removeEventListener("resize",()=>{console.log("removed")});
}, []);
    return<div className={styles.sideBar}> 
     <InstagramLogo />
     <ul>
     <li> <NavLink to="/" ><GoHome/><span>Home</span></NavLink></li>
     <li><a href="#">{width<767? <Search/>:<span><GoSearch/>Search</span>}</a></li>
     <li><NavLink to="/explore"><ImCompass2/><span>Explore</span></NavLink></li>
     <li><NavLink to="/reels/:reelId"><LuGrid/><span>Reels</span></NavLink></li>
     <li><a href="#"><FiZap/><span>Messages</span></a></li>
     <li><a href="#"><GoHeart/><span>Notification</span></a></li>
     <li><a href="#"><GoPlusCircle/><span>Create</span></a></li>
     <li><NavLink to="/profile/username" ><LuUser2 /><span>Profile</span></NavLink></li>
     </ul>
    </div>
    
}