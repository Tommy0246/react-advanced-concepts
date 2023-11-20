import "./ImageListItem.css";
import { saveAs } from "file-saver";

export function ImageListItem({ img }) {
    async function downloadImage(e) {
        const resp = await fetch(img.download_url);
        const blob = await resp.blob();
        saveAs(blob, img.author + "_" + img.id);
    }

    return (
        <>
            <img src={img.download_url} className="img" />
            <button onClick={downloadImage}></button>
        </>
    );
}
