import { ImageListItem } from "../ImageListItem/ImageListItem";

export function ImageList({ imgList }) {
    return (
        <div>
            {imgList.map((img, index) => {
                return (
                    <div key={index}>
                        <ImageListItem img={img} />
                    </div>
                );
            })}
        </div>
    );
}
