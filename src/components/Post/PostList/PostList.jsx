import Post from "../Post/Post";
import styles from "./PostList.module.css";

export default function PostList({ posts }) {
    return (
        <div className={styles.postListContainer}>
            {posts.map((post) => (
                <Post key={post.id} userId={post.id} />
            ))}
        </div>
    );
}