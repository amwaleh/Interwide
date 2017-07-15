import React from "react";
import { lifecycle, compose } from "recompose";
import "./style.css";

const Video = ({path})=> (

  <div >
    <div className="video-container">
      <div className="filter" />
      <video autoPlay loop  >
        <source src={path} type="video/webm" />
            Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
    </div>
  </div>
);

const enhance = compose(
    lifecycle({
      componentWillMount() {
        require("./coverr");
      },
    }),
);

export default enhance(Video)
;
