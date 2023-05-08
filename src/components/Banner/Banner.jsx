import React, { useState } from "react";

import { BsFillPlayFill, BsArrowUpRight } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

import {
  banner,
  left,
  right,
  video,
  left_img,
  play_button,
  video_modal,
  active,
  cross_button,
} from "./Banner.module.css";

function Banner() {
  const [openVideoModal, setOpenVideoModal] = useState(false);

  return (
    <div className="container relative">
      <div className={banner}>
        <div className={left}>
          <div>
            <h2>
              MIMS <br /> Inventory System
            </h2>
            <p>Designed and Developed by Mirailit</p>
          </div>
          <div className={left_img}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/008/295/031/original/custom-relationship-management-dashboard-ui-design-template-suitable-designing-application-for-android-and-ios-clean-style-app-mobile-free-vector.jpg"
              alt="test"
            />

            <button
              onClick={() => setOpenVideoModal(true)}
              className={play_button}
            >
              <BsFillPlayFill color="#fe3d01" fontSize={50} />
            </button>
          </div>
        </div>
        <div className={right}>
          <BsArrowUpRight fontSize={25} />
          <p>Request Demo</p>
        </div>
      </div>
      <div className={`${video_modal} ${openVideoModal && active}`}>
        <p
          onClick={() => setOpenVideoModal(false)}
          className={`${cross_button} ${openVideoModal && active}`}
        >
          <RxCross2 />
        </p>
        <iframe
          className={video}
          //   width="560"
          height="315"
          src="https://www.youtube.com/embed/oh904_HdkwY?start=30"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Banner;
