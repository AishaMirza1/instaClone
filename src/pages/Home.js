import Feed from "../components/Feed";
import { SideBar } from "../components/SideBar";
import styles from "./home.module.css"

export function Home(){
    return <div className={styles.homePage} >
        <SideBar />
        <Feed />
    </div>
}