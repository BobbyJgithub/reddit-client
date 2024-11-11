import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPosts } from "../features/searchSlice";
import styles from "./SearchBar.module.css";
import PostItem from "./PostItem";
import PostList from "./PostList";

function SearchBar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.searchResults);
  const isLoading = useSelector((state) => state.search.isLoading);
  const hasError = useSelector((state) => state.search.hasError);
  const posts = useSelector((state) => state.posts.posts);

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchPosts({ query, posts }));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.searchBar}>
        <input
          type="text"
          id="search"
          name="search"
          className={styles.input}
          value={query}
          onChange={handleSearch}
          placeholder="Search"
        />
        <button type="submit" className={styles.button}>
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;