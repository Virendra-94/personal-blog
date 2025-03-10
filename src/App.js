import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PostCreationForm from "./components/PostCreationForm";
import PostDetailView from "./components/PostDetailView";
import Header from "./components/Header";

const App = () => {
  const [posts, setPosts] = useState(() => {
    return JSON.parse(localStorage.getItem("posts")) || [];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage posts={posts} />} />
        <Route
          path="/create"
          element={<PostCreationForm addPost={addPost} />}
        />
        <Route
          path="/post/:id"
          element={<PostDetailView posts={posts} deletePost={deletePost} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
