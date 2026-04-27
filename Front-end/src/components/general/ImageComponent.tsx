import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ImageProps {
  alt: string;
  src: string;
  caption: string;
  width?: number;
  height?: number;
}

const FALLBACK_SRC = '/images/placeholder.png';

const ImageComponent: React.FC<{ image: ImageProps }> = ({ image }) => {
  const [imgSrc, setImgSrc] = useState(image.src);

  useEffect(() => {
    setImgSrc(image.src);
  }, [image.src]);

  const handleError = () => {
    if (imgSrc !== FALLBACK_SRC) {
      setImgSrc(FALLBACK_SRC);
    }
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