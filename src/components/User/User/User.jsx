import { useEffect, useState } from "react";
import { getUser } from "../../../api/users";
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
            <h1 className={styles.userName}>{user.name}</h1>
            <div className={styles.userSocialsContainer}>
                <p>
                    Username: <a href="/">@{user.username.toLowerCase()}</a>
                </p>
                <p>
                    Email: {user.email.toLowerCase()}
                </p>
            </div>
            <div className={styles.userAddressContainer}>
                <p>
                    Address:
                </p>
                <p>
                    {user.address.street} {user.address.suite}
                </p>
                <p>
                    {user.address.city} {user.address.zipcode}
                </p>
                <div>
                    <p>
                        {user.address.geo.lat} {user.address.geo.lng}
                    </p>
                </div>
            </div>
        </div>
    );
}