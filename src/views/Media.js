import React from "react";

const Media = () => {
  console.log("media");
  return (
    <div className="media">
      <h2 id="music-title">Videos</h2>
      <div className="video-container">
        <iframe
          className="music-videos"
          width="475"
          height="315"
          src="https://youtube.com/embed/fCEgYGMSTD8?feature=share"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <iframe
          className="music-videos"
          width="475"
          height="315"
          src="https://www.youtube.com/embed/2aRTKgbAo1c?feature=share"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <iframe
          className="music-videos"
          width="475"
          height="315"
          src="https://youtube.com/embed/Oi03rAOF3Cs?feature=share"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <iframe
          className="music-videos"
          width="475"
          height="315"
          src="https://www.youtube.com/embed/tpSz-eiYtYQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <iframe
          className="music-videos"
          width="475"
          height="315"
          src="https://www.youtube.com/embed/R5zlBwYO1HQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <iframe
          className="music-videos"
          width="475"
          height="315"
          src="https://www.youtube.com/embed/VgvotBMszUc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Media;
