/*
 Simplifies the OptimizedImage component to rely on native browser lazy loading
 and decoding attributes, removing JS-based loading state management.
*/
export default function OptimizedImage({ src, alt, className, width, height }) {
  // Removed useState and useEffect for manual loading/error handling

  // Removed error handling div, native loading doesn't provide simple error fallback here
  // Consider adding a CSS-based fallback or error style if needed

  return (
    <img
      src={src}
      alt={alt}
      className={className} // Removed dynamic 'hidden' class based on loading state
      width={width}
      height={height}
      loading="lazy" // Rely on native lazy loading
      decoding="async" // Allow asynchronous decoding
    />
    // Removed placeholder div
  );
}
