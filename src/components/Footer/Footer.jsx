import React from "react";

import {
  footer,
  footer_content,
  footer_title,
  footer_divider,
  copyright_text,
} from "./Footer.module.css";

function Footer() {
  return (
    <div className={footer}>
      <div className="container">
        <div className={footer_content}>
          <h2 className={footer_title}>MIMS Inventory System</h2>
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
