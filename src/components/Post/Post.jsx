import { useEffect, useState } from "react";
import styles from "./Post.module.css";
import { getPost } from "../../api/posts";

export default function Post({ postId }) {
    const [post, setPost] = useState({
        id: null,
        userId: null,
        title: "",
        body: ""
    });

    useEffect(() => {
        const loadPost = async () => {
            const response = await getPost(postId);
            setPost(response);
        };

        loadPost();
    }, [postId]);

    return post.id !== null && (
        <div className={styles.postContainer}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}