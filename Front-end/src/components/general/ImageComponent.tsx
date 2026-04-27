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
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    setImgSrc(image.src);
    setIsFallback(false);
  }, [image.src]);

  const handleError = () => {
    if (imgSrc !== FALLBACK_SRC) {
      setImgSrc(FALLBACK_SRC);
      setIsFallback(true);
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