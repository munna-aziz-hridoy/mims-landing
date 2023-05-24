import React from "react";

import { BsArrowRightShort } from "react-icons/bs";

import {
  footer,
  footer_content,
  footer_title,
  footer_divider,
  copyright_text,
  footer_menu,
  footer_menus,
  footer_logo,
  footer_subscribe,
  footer_more,
  subscribe_text,
  footer_address,
  footer_menu_title,
} from "./Footer.module.css";

function Footer() {
  return (
    <div className={footer}>
      <div className="container">
        <div className={footer_content}>
          <div className={footer_menus}>
            <div>
              <h2 className={footer_title}>MIMS Inventory System</h2>
              <p className={footer_address}>mims@example.com</p>
              <p className={footer_address}>
                Plot 11/A, Road 90, Block NE-L, <br />
                Dhaka 1212
              </p>
            </div>
            <ul className={footer_menu}>
              <h2 className={footer_menu_title}>Column 1</h2>
              {["About Us", "Contact", "MIMS"].map((item) => (
                <li>{item}</li>
              ))}
            </ul>
            {[1, 2].map((item) => (
              <ul className={footer_menu}>
                <h2 className={footer_menu_title}>Column {item + 1}</h2>
                {[1, 2, 3, 4, 5].map((item) => (
                  <li>Demo Menu {item}</li>
                ))}
              </ul>
            ))}
            <div>
              <h2 className={footer_logo}>Mirailit</h2>
              <p className={footer_more}>
                More about us <BsArrowRightShort fontSize={22} />{" "}
              </p>
              <p className={subscribe_text}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto distinctio officia.
              </p>
              <div className={footer_subscribe}>
                <input placeholder="Email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          <div className={footer_divider} />

          <p className={copyright_text}>
            ©Copyright reserved <span>Mirailit</span> Dhaka, Bangladesh{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
