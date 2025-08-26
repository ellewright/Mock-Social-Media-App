import User from "../User/User";
import styles from "./UserList.module.css";

export default function UserList({ users }) {
    return (
        <div className={styles.userListContainer}>
            {users.map((user) => (
                <User key={user.id} userId={user.id} />
            ))}
        </div>
    );
}