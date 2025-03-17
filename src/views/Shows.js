import React from "react";
import BandsInTownWidget from "../components/BandsInTownWidget";
const bandsInTownArtistId = "id_15581154";
const Shows = () => {
  return (
    <div className="shows">
      <h2 id="tour-title">Shows</h2>
      <div className="widget_iframe widget-container">
        <BandsInTownWidget
          artistId={bandsInTownArtistId}
          theme={{
            backgroundColor: "rgba(66,63,63,1)",
            separatorColor: "rgba(192,36,36,1)",
            textColor: "rgba(241,238,238,1)",
            dateFormat: "MMM. D, YYYY",
          }}
        />
      </div>
    </div>
  );
};

export default Shows;
