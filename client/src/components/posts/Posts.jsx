import { Link } from "react-router-dom";
import Post from "../post/Post";
import React from "./posts.css";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Link key={index} className="link" to={`/post/${post._id}`}>
          <Post post={post} />
        </Link>
      ))}
    </div>
  );
};

export default Posts;
