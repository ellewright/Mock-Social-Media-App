import { useEffect, useState } from "react";
import { getComment } from "../../../api/comments";
import styles from "./Comment.module.css";

export default function Comment({ commentId }) {
    const [comment, setComment] = useState({
        id: null,
        postId: null,
        email: "",
        name: "",
        body: ""
    });

    useEffect(() => {
        const loadComment = async () => {
            const response = await getComment(commentId);
            setComment(response);
        };

        loadComment();
    }, [commentId]);

    return comment.id !== null && (
        <div className={styles.commentContainer}>
            <h1>{comment.name}</h1>
            <p>{comment.body}</p>
            <p>{comment.email}</p>
        </div>
    );
}