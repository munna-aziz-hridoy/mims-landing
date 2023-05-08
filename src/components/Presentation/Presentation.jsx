import React, { useEffect, useRef } from "react";

import {
  title,
  presentation,
  presentation_lottie,
} from "./Presentation.module.css";

function Presentation() {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className={`container ${presentation}`}>
      <h2 className={title}>Presentations</h2>

      <div className={presentation_lottie}>
        <lottie-player
          ref={ref}
          src="https://assets3.lottiefiles.com/packages/lf20_lrdkqhnc.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}

export default Presentation;
