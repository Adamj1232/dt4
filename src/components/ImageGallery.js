import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense } from 'react'
import { Image, Transformation } from 'cloudinary-react'
import { Blurhash } from 'react-blurhash'
import Download from 'yet-another-react-lightbox/plugins/download'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'
import './ImageGallery.css'

const Lightbox = lazy(() => import('yet-another-react-lightbox'))

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [mainImageLoaded, setMainImageLoaded] = useState(false)
  const [preloadedLightbox, setPreloadedLightbox] = useState(false)

  const photos = useMemo(
    () => [
      // { id: "photo9", publicId: "dtf/1.jpg" },
      { id: 'photo2', publicId: 'dtf/3.jpg' },
      { id: 'photo3', publicId: 'dtf/4.jpg' },
      { id: 'photo4', publicId: 'dtf/5.jpg' },
      // { id: "photo1", publicId: "dtf/2.jpg" },
      { id: 'photo5', publicId: 'dtf/6.jpg' },
      { id: 'photo6', publicId: 'dtf/7.jpg' },
      { id: 'photo7', publicId: 'dtf/8.jpg' },
      { id: 'photo8', publicId: 'dtf/9.jpg' }
    ],
    []
  )

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setImagesLoaded(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    const galleryElement = document.querySelector('.image-gallery-container')
    if (galleryElement) observer.observe(galleryElement)

    return () => observer.disconnect()
  }, [])

  // Preload next/previous images
  useEffect(() => {
    const preloadAdjacentImages = () => {
      const nextIndex = (photoIndex + 1) % photos.length
      const prevIndex = (photoIndex - 1 + photos.length) % photos.length

      ;[prevIndex, nextIndex].forEach(index => {
        const img = new Image()
        img.src = `https://res.cloudinary.com/dkf9qmqxa/image/upload/c_scale,w_1600,q_80/${photos[index].publicId}`
      })
    }

    if (imagesLoaded) {
      preloadAdjacentImages()
    }
  }, [photoIndex, imagesLoaded, photos])

  // Preload all lightbox images in advance
  const preloadLightboxImages = useCallback(() => {
    photos.forEach(photo => {
      const img = new Image()
      img.src = `https://res.cloudinary.com/dkf9qmqxa/image/upload/c_scale,w_1920,q_85/${photo.publicId}`
    })
    setPreloadedLightbox(true)
  }, [photos])

  // Start preloading when user hovers over any image
  const handleImageHover = useCallback(() => {
    if (!preloadedLightbox) {
      preloadLightboxImages()
    }
  }, [preloadedLightbox, preloadLightboxImages])

  // Preload lightbox component on hover
  useEffect(() => {
    const preloadLightboxComponent = () => {
      const importPromises = [
        import('yet-another-react-lightbox'),
        import('yet-another-react-lightbox/plugins/download'),
        import('yet-another-react-lightbox/plugins/thumbnails')
      ]
      Promise.all(importPromises)
    }

    const container = document.querySelector('.image-gallery-container')
    if (container) {
      container.addEventListener('mouseenter', preloadLightboxComponent, { once: true })
    }

    return () => {
      if (container) {
        container.removeEventListener('mouseenter', preloadLightboxComponent)
      }
    }
  }, [])

  const slides = photos.map(photo => ({
    src: `https://res.cloudinary.com/dkf9qmqxa/image/upload/c_scale,w_1920,q_85/${photo.publicId}`,
    download: `https://res.cloudinary.com/dkf9qmqxa/image/upload/fl_attachment/${photo.publicId}`
  }))

  // Prevent propagation of click events in lightbox
  const handleLightboxClick = e => {
    e.stopPropagation()
  }

  return (
    <div className="image-gallery-container">
      <div className="featured-image">
        {!mainImageLoaded && photos[photoIndex].blurhash && (
          <div className="blur-placeholder">
            <Blurhash
              hash={photos[photoIndex].blurhash}
              width="100%"
              height="100%"
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          </div>
        )}
        <Image
          cloudName="dkf9qmqxa"
          publicId={photos[photoIndex].publicId}
          className={`main-image ${mainImageLoaded ? 'loaded' : ''}`}
          onLoad={() => setMainImageLoaded(true)}
          onClick={() => setIsOpen(true)}
        >
          <Transformation
            width="1600"
            height="1000"
            crop="fill"
            quality="80"
            fetchFormat="auto"
            dpr="auto"
            loading="eager"
          />
        </Image>
      </div>

      {imagesLoaded && (
        <div className="thumbnail-container">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`thumbnail-card ${index === photoIndex ? 'active' : ''}`}
              onClick={() => setPhotoIndex(index)}
              onMouseEnter={handleImageHover}
            >
              <Image cloudName="dkf9qmqxa" publicId={photo.publicId} className="thumbnail-image">
                <Transformation
                  width="200"
                  height="200"
                  crop="fill"
                  quality="60"
                  fetchFormat="auto"
                  dpr="auto"
                />
              </Image>
            </div>
          ))}
        </div>
      )}

      {isOpen && (
        <div onClick={handleLightboxClick}>
          <Suspense fallback={<div className="lightbox-loading">Loading...</div>}>
            <Lightbox
              open={isOpen}
              close={() => setIsOpen(false)}
              index={photoIndex}
              slides={slides}
              plugins={[Download, Thumbnails]}
              carousel={{
                spacing: 0,
                padding: 0,
                preload: 3
              }}
              thumbnails={{
                position: 'bottom',
                width: 120,
                height: 80
              }}
              download={{
                downloadText: 'Download',
                download: true
              }}
              render={{
                buttonPrev: isFirst => (isFirst ? null : undefined),
                buttonNext: isLast => (isLast ? null : undefined),
                iconDownload: () => <span title="Download">⬇️</span>
              }}
              on={{
                click: e => e.stopPropagation()
              }}
            />
          </Suspense>
        </div>
      )}
    </div>
  )
}

export default ImageGallery
