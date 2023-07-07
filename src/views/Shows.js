import React from 'react'

const Shows = () => {
  return (
    <div className="shows">
        <h2 id="tour-title">Shows</h2>
        <div className="widget_iframe widget-container">
          <iframe
            title="tour-dates"
            className="widget_iframe tour-widget"
            src="https://www.reverbnation.com/widget_code/html_widget/artist_8523411?widget_id=52&pwc[design]=default&pwc[background_color]=%23333333&pwc[layout]=detailed&pwc[show_map]=0%2C1&pwc[size]=fit"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
    </div>
  )
}

export default Shows
