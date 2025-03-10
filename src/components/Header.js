import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i class="bi bi-substack"></i> Blog
        </Link>
        <div>
          <Link className="btn btn-outline-light" to="/create">
            New Post
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
