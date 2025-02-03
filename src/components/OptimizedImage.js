import { useState, useEffect } from 'react';

export default function OptimizedImage({ src, alt, className, width, height }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoading(false);
    img.onerror = () => setError(true);
  }, [src]);

  if (error) return <div className="image-error">Failed to load image</div>;
  
  return (
    <>
      {loading && <div className="image-placeholder" style={{ width, height }} />}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loading ? 'hidden' : ''}`}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
    </>
  );
} 