import React, { useEffect, useRef, useState } from "react";

import { MdInventory } from "react-icons/md";

import {
  demostration,
  left,
  right,
  left_content,
  right_content,
  active,
} from "./Demostration.module.css";

function Demostration() {
  const [activeField, setActiveField] = useState(1);

  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className="container">
      <div className={demostration}>
        <div className={left}>
          <lottie-player
            ref={ref}
            src="https://assets6.lottiefiles.com/packages/lf20_tco2osel.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
          <div className={left_content}>
            <div>
              <p>
                <MdInventory fontSize={28} />
                <span>Inventory System</span>
              </p>
              <h2>Mims Inventory</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium laboriosam nemo et, voluptates..
            </p>
          </div>
        </div>
        <div className={right}>
          {[1, 2, 3].map((item) => {
            return (
              <div
                onClick={() => setActiveField(item)}
                className={`${right_content} ${activeField === item && active}`}
              >
                {activeField === item ? (
                  <>
                    <h2>0{item}</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Explicabo, magni culpa. Inventore eligendi corporis eaque
                      neque qui in vitae itaque rerum. Aspernatur omnis totam
                      mollitia dolores maxime. Porro quod facilis odit
                      temporibus? Officiis, dolor illum.
                    </p>
                  </>
                ) : (
                  <>
                    <div />
                    <p>We create management system</p>
                    <p>23.09.2022</p>
                    <button>details</button>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Demostration;
