import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";
import styles from "../pages/home.module.css"
export function AppLayout(){
    return <div >
        
        <Outlet />
    </div>
}