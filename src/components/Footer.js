import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>All rights reserved &copy;.</p>
      <div className="socials">
        <Link to="https://t.me/Lady_Glammm">
          <div className="tg"></div>
        </Link>
        <Link to="https://www.instagram.com/lady_glammm">
          <div className="inst"></div>
        </Link>
        <Link to="https://vk.com/lady_glammm">
          <div className="vk"></div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;