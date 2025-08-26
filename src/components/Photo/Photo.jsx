import { useEffect, useState } from "react";
import { getPhoto } from "../../api/photos";
import styles from "./Photo.module.css";

export default function Photo({ photoId }) {
    const [photo, setPhoto] = useState({
        id: null,
        albumId: null,
        title: "",
        url: "",
        thumbnailUrl: ""
    });

    useEffect(() => {
        const loadPhoto = async () => {
            const response = await getPhoto(photoId);
            setPhoto(response);
        };

        loadPhoto();
    }, [photoId]);

    return photo.id !== null && (
        <div className={styles.photoContainer}>
            <h1>{photo.title}</h1>
            {/* <img src={photo.url} alt="Photo." /> */}
            {/* <img src={photo.thumbnailUrl} alt="Thumbnail." /> */}

            {/* Apparently, these urls don't point to anything anymore. */}
            {/* TODO: Load photos from somewhere else. */}
        </div>
    );
}