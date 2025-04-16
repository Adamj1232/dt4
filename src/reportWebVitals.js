const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals')
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        // Core Web Vitals
        getCLS(onPerfEntry) // Cumulative Layout Shift
        getLCP(onPerfEntry) // Largest Contentful Paint
        getFID(onPerfEntry) // First Input Delay

        // Additional metrics
        getFCP(onPerfEntry) // First Contentful Paint
        getTTFB(onPerfEntry) // Time to First Byte

        // Log to console in development
        if (process.env.NODE_ENV === 'development') {
          console.log('Web Vitals:', {
            getCLS,
            getFID,
            getFCP,
            getLCP,
            getTTFB
          })
        }
      })
      .catch(err => {
        console.error('Error loading web-vitals:', err)
      })
  }
}

export default reportWebVitals
