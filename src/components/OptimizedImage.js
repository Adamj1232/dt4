export default function OptimizedImage({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  fetchpriority,
  sizes,
  srcSet,
  style
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      fetchpriority={fetchPriority || fetchpriority}
      sizes={sizes}
      srcSet={srcSet}
      style={style}
    />
  )
}
