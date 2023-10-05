import styles from "./sideSearchBar.module.css"
import inputStyles from "./search.module.css"
import {motion} from "framer-motion"
export default function SideSearchBar({showSearchBar}){
    return(
        <motion.div animate={showSearchBar?{transform:"translateX(11%)"}:{}} transition={{ease: "ease", duration: .5}}  className={styles.sideSearchBar}>
            <h2>Search</h2>
            <input className={inputStyles.search} type="text" placeholder="Search" id="search"/>
            <hr></hr>
            <p>Recent</p>
            <p>No recent searches...</p>
        </motion.div>
    )
}