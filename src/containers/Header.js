import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-al">
      <h1 class="nom">OLA WILLIAMS</h1>
      <div className="link">
        <Link class="necro" to="/necropolis">
          {" "}
          Necropolis{" "}
        </Link>
        <Link class="art" to="/artwork">
          {" "}
          Artwork
        </Link>

        <a class="blog1" href="https://www.tumblr.com/blog/agogecomics">
          Blog
        </a>
        <Link class="about" to="/about">
          {" "}
          About
        </Link>
        <Link class="contact" to="/contact">
          {" "}
          Contact
        </Link>
      </div>
    </header>
  );
};
export default Header;
