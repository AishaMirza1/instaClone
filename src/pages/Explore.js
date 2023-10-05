import { SideBar } from "../components/SideBar"

export function Explore(){
    return (<div className="grid" >
        <SideBar/>
        <div className="grid-col-2">
            <div className={StyleSheet.exploreContainer}>
                
            </div>
        </div>
    </div>
        
    )
    
}