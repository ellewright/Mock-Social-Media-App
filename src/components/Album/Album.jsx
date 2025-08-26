import { useEffect, useState } from "react";
import { getAlbum } from "../../api/albums";
import styles from "./Album.module.css";

export default function Album({ albumId }) {
    const [album, setAlbum] = useState({
        id: null,
        userId: null,
        title: ""
    });

    useEffect(() => {
        const loadAlbum = async () => {
            const response = await getAlbum(albumId);
            setAlbum(response);
        };

        loadAlbum();
    });

    return album.id !== null && (
        <div className={styles.albumContainer}>
            <h1>{album.title}</h1>
        </div>
    );
}