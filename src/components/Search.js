import styles from "./search.module.css"
export default function Search(){
    return(
        <div >
            
            <input className={styles.search} type="text" placeholder="Search" id="search"/>
        </div>
    )
}