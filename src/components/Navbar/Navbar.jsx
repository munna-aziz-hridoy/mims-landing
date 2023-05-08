import React from "react";
import { MdEmail } from "react-icons/md";

import { navbar, logo, menu, contact } from "./Navbar.module.css";

function Navbar() {
  return (
    <nav>
      <div className={`${navbar} container`}>
        <div className={logo}>
          <p>MIMS</p>
        </div>
        <ul className={menu}>
          {["Demostration", "Presentation", "Contact"].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className={contact}>
          <button>Support</button>
          <p>
            <MdEmail fontSize={20} />
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
