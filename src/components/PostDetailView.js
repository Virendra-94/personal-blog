import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const PostDetailView = ({ posts, deletePost }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));

  if (!post)
    return (
      <div className="container mt-4">
        <h3>Post not found.</h3>
      </div>
    );

  return (
    <div className="container mt-4">
      <h2>{post.title}</h2>
      <p className="text-muted">By {post.author}</p>
      <p>{post.content}</p>
      <button
        onClick={() => {
          deletePost(post.id);
          navigate("/");
        }}
        className="btn btn-danger"
      >
        Delete Post
      </button>
    </div>
  );
};

export default PostDetailView;
