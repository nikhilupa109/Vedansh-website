import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyImage = ({
  src,
  alt,
  placeholder = `${import.meta.env.BASE_URL}placeholder.svg`,
  className = '',
  style = {}
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView && src) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setImageLoaded(true);
      };
    }
  }, [inView, src]);

  return (
    <div ref={ref} className={`lazy-image-wrapper ${className}`} style={style}>
      <img
        src={imageSrc}
        alt={alt}
        style={{
          filter: imageLoaded ? 'blur(0)' : 'blur(10px)',
          transition: 'filter 0.5s ease-out',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

export default LazyImage;
