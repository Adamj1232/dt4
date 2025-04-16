import React from 'react'

const Media = () => {
  console.log('media')
  return (
    <div className="media">
      <h2 id="music-title">Videos</h2>
      <div className="video-container">
        <iframe
          loading="lazy"
          className="music-videos"
          width="475"
          height="315"
          src="https://www.youtube.com/embed/x_TPHqS6cpY?si=OT-5E109V6t-F76Z"
          title="Dealer Takes Four playing New Country - Live Performance Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <iframe
          loading="lazy"
          className="music-videos"
          width="475"
          height="315"
          src="https://www.youtube.com/embed/v7SCjju9mno?si=KwqyHqZXioijCSjj"
          title="Dealer Takes Four - Live Performance Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <iframe
          loading="lazy"
          className="music-videos"
          width="475"
          height="315"
          src="https://www.youtube.com/embed/dza5snWkfcQ?si=Dt36rfyH1kb2Y24H"
          title="Dealer Takes Four - Studio recording of 'Locked and Loaded'"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        {/* <iframe
          loading="lazy"
          className="music-videos"
          width="475"
          height="315"
          src="https://www.youtube.com/embed/OLNoQ_mcaM4"
          title="Dealer Takes Four - Studio recording of 'Blame It On The Radio'"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        /> */}
        <iframe
          loading="lazy"
          className="music-videos"
          width="475"
          height="315"
          src="https://www.youtube.com/embed/R5zlBwYO1HQ"
          title="Dealer Takes Four - Studio recording of 'Time Will Tell'"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default Media
