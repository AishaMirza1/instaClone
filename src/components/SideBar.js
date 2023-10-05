import styles from "./sidebar.module.css"
import { GoHome,GoHeart,GoPlusCircle,GoSearch } from "react-icons/go";
import { FiZap } from "react-icons/fi";
import InstagramLogo from "./InstagramLogo"
import { LuGrid,LuUser2 } from "react-icons/lu";
import { ImCompass2 } from "react-icons/im";
import { NavLink } from "react-router-dom";
import Search from "./Search"
import { useEffect, useState } from "react";
import SideSearchBar from "./SideSearchBar";
import {motion} from "framer-motion"
export function SideBar(){
    const [width, setWidth]   = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", ()=>{ setWidth(window.innerWidth);});
        return () => window.removeEventListener("resize",()=>{console.log("removed")});
    }, []);
    const[showSearchBar,setShowSearchBar] = useState(false)
    console.log(showSearchBar)
    return<motion.div animate={{paddingRight:showSearchBar? "1rem":"2.7rem"}} className={styles.sideBar}> 
     <InstagramLogo showSearchBar={showSearchBar}/>
     <ul style={showSearchBar?{transition:"2s all ease",paddingRight:"10"}:{}}>
     <li> <NavLink to="/" ><GoHome/><span style={showSearchBar?{display:"none"}:{}}>Home</span></NavLink></li>
     <li onClick={()=>setShowSearchBar((prev)=>!prev)}><a href="#">{width<767? <Search/>:<><GoSearch/><span style={showSearchBar?{display:"none"}:{}}>Search</span></>}</a></li>
     <li><NavLink to="/explore"><ImCompass2/><span style={showSearchBar?{display:"none"}:{}}>Explore</span></NavLink></li>
     <li><NavLink to="/reels/:reelId"><LuGrid/><span style={showSearchBar?{display:"none"}:{}}>Reels</span></NavLink></li>
     <li><a href="#"><FiZap/><span style={showSearchBar?{display:"none"}:{}}>Messages</span></a></li>
     <li><a href="#"><GoHeart/><span style={showSearchBar?{display:"none"}:{}}>Notification</span></a></li>
     <li><a href="#"><GoPlusCircle/><span style={showSearchBar?{display:"none"}:{}}>Create</span></a></li>
     <li><NavLink to="/profile/username" ><LuUser2 /><span style={showSearchBar?{display:"none"}:{}}>Profile</span></NavLink></li>
     
     </ul>
   
       {showSearchBar && <SideSearchBar showSearchBar={showSearchBar}/>} 
    
     
    </motion.div>
    
}