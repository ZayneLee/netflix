import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <img
        alt="Netflix logo"
        src={process.env.PUBLIC_URL + `/logo.png`}
        className="nav_logo"
        onClick={() => window.location.reload()}
      />
      <img
        alt="User logged"
        src={process.env.PUBLIC_URL + `/avatar.png`}
        className="nav_avatar"
      />
    </nav>
  );
}

export default Nav;
