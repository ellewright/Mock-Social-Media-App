import { useEffect, useState } from "react";
import { getUser } from "../../api/users";
import styles from "./User.module.css";

export default function User({ userId }) {
    const [user, setUser] = useState({
        id: null,
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: 0.0,
                lng: 0.0
            }
        }
    });

    useEffect(() => {
        const loadUser = async () => {
            const response = await getUser(userId);
            setUser(response);
        };

        loadUser();
    }, [userId]);

    return user.id !== null && (
        <div className={styles.userContainer}>
            <h1>{user.name}</h1>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <div>
                <p>{user.address.street}</p>
                <p>{user.address.suite}</p>
                <p>{user.address.city}</p>
                <p>{user.address.zipcode}</p>
                <div>
                    <p>{user.address.geo.lat}</p>
                    <p>{user.address.geo.lng}</p>
                </div>
            </div>
        </div>
    );
}