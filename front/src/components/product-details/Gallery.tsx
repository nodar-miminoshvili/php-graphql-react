import { useState } from "react";
import LeftArrow from "../../assets/left-arrow.png";

type Props = {
  gallery: string[];
  productName: string;
};

export default function Gallery({ gallery, productName }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div data-testid="product-gallery" className="flex gap-10">
      <ul className="flex flex-col gap-4 max-h-[500px] overflow-y-auto w-fit">
        {gallery.map((imageSrc, idx) => {
          return (
            <li key={idx}>
              <button
                onClick={() => setSelectedImage(idx)}
                className="cursor-pointer"
              >
                <img
                  src={imageSrc}
                  alt={productName}
                  className="w-20 h-20 object-contain"
                />
              </button>
            </li>
          );
        })}
      </ul>
      <div className="relative w-fit h-fit">
        <img
          src={gallery[selectedImage]}
          alt={productName}
          className="w-[575px] h-[478px] object-contain "
        />
        {gallery.length > 1 && (
          <div className="absolute top-1/2 left-0 -translate-y-1/2  flex justify-between px-4 w-full">
            <button
              onClick={() => {
                setSelectedImage((p) => (p === 0 ? gallery.length - 1 : p - 1));
              }}
              className="w-8 h-8 font-semibold text-xl grid place-content-center cursor-pointer text-white bg-primary"
            >
              <img src={LeftArrow} alt="left-button" />
            </button>
            <button
              onClick={() => {
                setSelectedImage((p) => (p === gallery.length - 1 ? 0 : p + 1));
              }}
              className="w-8 h-8 font-semibold text-xl grid place-content-center cursor-pointer text-white bg-primary"
            >
              <img src={LeftArrow} alt="right-button" className="rotate-180" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
