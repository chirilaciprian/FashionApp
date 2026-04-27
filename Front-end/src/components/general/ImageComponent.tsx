import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ImageProps {
  alt: string;
  src: string;
  caption: string;
  width?: number;
  height?: number;
}

const ImageComponent: React.FC<{ image: ImageProps }> = ({ image }) => {
  const [imgSrc, setImgSrc] = useState(image.src);

  const handleError = () => {
    // Set a placeholder image when the original image fails to load
    setImgSrc('https://commercial.bunn.com/img/image-not-available.png');
  };

  return (
    <LazyLoadImage
      src={imgSrc}
      alt={image.alt}
      height={image.height}
      width={image.width}
      effect="blur"
      onError={handleError}
      className="object-cover"
    />
  );
};

export default ImageComponent;