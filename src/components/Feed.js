import Post from "./Post"
import styles from "./feed.module.css"
export default function Feed(){
    return<div className="grid-col-2 mid-align">
        <div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </div>
}