import styles from "./post.module.css"
import {GoHeart,GoBookmark,GoPaperAirplane} from "react-icons/go";
import {SlBubble} from "react-icons/sl";

export default function Post(){
    return(
        <div className={styles.postContainer}>
           <div className={styles.postUserDetails}>
                <img src="https://beingselfish.in/wp-content/uploads/2023/07/instagram-dp164.jpg" alt="asd"/>
                <div>
                    <h3>UserName</h3>
                    <p>Place</p>
                </div>
                <p>Time</p>
           </div>
           <div className={styles.postContent}>
            <img src="https://beingselfish.in/wp-content/uploads/2023/07/instagram-dp164.jpg" alt="asdawe"/>
           </div>
           <div className={styles.postActions}>
              <div>
              <GoHeart/>
              <SlBubble />
              <GoPaperAirplane />
              </div>
              <GoBookmark/>
           </div>
           <div className={styles.postDetails}>
              <p>2112 likes</p>
              <p><span>username</span>caption hastags dfsdfdsf</p>
              <p>view all 234 comments</p>
             </div>
           <input type="text" placeholder="Add a comment..." />
        </div>
    )
}