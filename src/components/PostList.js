import React, { useEffect } from "react";
import PostItem from "./PostItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../features/postsSlice";

function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
