import Comment from "../Comment/Comment";
import styles from "./CommentList.module.css";

export default function CommentList({ comments }) {
    return (
        <div className={styles.commentListContainer}>
            {comments.map((comment) => (
                <Comment key={comment.id} commentId={comment.id} />
            ))}
        </div>
    );
}