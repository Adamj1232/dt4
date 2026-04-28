import React, { useState } from 'react'

const videos = [
  {
    id: 'x_TPHqS6cpY',
    title: 'Dealer Takes Four playing New Country - Live Performance Video'
  },
  {
    id: 'aaSuqQCC5AI',
    title: 'Dealer Takes Four - Live Performance Video',
    thumbnail: false
  },
  {
    id: 'v7SCjju9mno',
    title: 'Dealer Takes Four - Live Performance Video'
  },
  {
    id: 'dza5snWkfcQ',
    title: "Dealer Takes Four - Studio recording of 'Locked and Loaded'"
  },
  {
    id: 'R5zlBwYO1HQ',
    title: "Dealer Takes Four - Studio recording of 'Time Will Tell'"
  }
]

const Media = () => {
  const [activeVideoIds, setActiveVideoIds] = useState([])

  const loadVideo = videoId => {
    setActiveVideoIds(videoIds =>
      videoIds.includes(videoId) ? videoIds : [...videoIds, videoId]
    )
  }

  return (
    <div className="media">
      <h2 id="music-title">VIDEOS</h2>
      <div className="video-container">
        {videos.map(video =>
          activeVideoIds.includes(video.id) ? (
            <iframe
              key={video.id}
              loading="lazy"
              className="music-videos"
              width="475"
              height="315"
              src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <button
              key={video.id}
              className="video-facade music-videos"
              type="button"
              onClick={() => loadVideo(video.id)}
              aria-label={`Play video: ${video.title}`}
            >
              {video.thumbnail === false ? (
                <div className="video-thumbnail-placeholder">{video.title}</div>
              ) : (
                <img
                  src={video.thumbnail || `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt=""
                  loading="lazy"
                  width="475"
                  height="315"
                  onError={event => {
                    const fallback = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`
                    if (event.currentTarget.src !== fallback) event.currentTarget.src = fallback
                  }}
                />
              )}
              <span className="video-play-button" aria-hidden="true">
                Play
              </span>
            </button>
          )
        )}
      </div>
    </div>
  )
}

export default Media
