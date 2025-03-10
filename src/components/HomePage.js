import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ posts }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Personal Blog</h2>
      {/* <Link to="/create" className="btn btn-primary mb-3">
        Create New Post
      </Link> */}
      {posts.length === 0 ? (
        <p className="text-muted text-center">No blog posts yet.</p>
      ) : (
        <div className="list-group">
          {posts.map((post) => (
            <Link
              to={`/post/${post.id}`}
              key={post.id}
              className="list-group-item list-group-item-action"
            >
              <h5 className="mb-1">{post.title}</h5>
              <small className="text-muted">By {post.author}</small>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
