import React from "react";
import Header from "../components/Header";
import PostList from "../components/PostList";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../features/postsSlice";

function Root() {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const hasError = useSelector((state) => state.posts.hasError);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const searchResults = useSelector((state) => state.search.searchResults);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error loading post.</div>;
  }

  if (!posts) {
    return <div>No post available.</div>;
  }

  if (searchResults) {
    return (
      <>
      <Header />
        {isLoading && <p>Loading...</p>}
        {hasError && <p>Error loading search results.</p>}
        <PostList posts={searchResults} />
      </>
    );
  }

  return (
    <>
      <Header />
      <PostList posts={posts} />
    </>
  );
}

export default Root;
