import Album from "../Album/Album";
import styles from "./AlbumList.module.css";

export default function AlbumList({ albums }) {
    return (
        <div className={styles.albumListContainer}>
            {albums.map((album) => (
                <Album key={album.id} albumId={album.id} />
            ))}
        </div>
    );
}