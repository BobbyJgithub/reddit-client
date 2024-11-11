import React from "react";
import { useSelector } from "react-redux";
import styles from "./PostItem.module.css";

function PostItem({ post }) {
    const urlPattern = /https:\/\/www.reddit.com\/gallery\/\w+/;
    if (urlPattern.test(post.url)) {
        return null; // Return null to render nothing
      }

  return (
    <div className={styles.post}>
      <div className={styles.scoreContainer}>
        <p>{post.subreddit}</p>
        <p className={styles.score}>{post.score}</p>
      </div>
      <p className={styles.title}>{post.title}</p>
      <img src={post.url} alt="Reddit" className={styles.img} />
      <div className={styles.details}>
        <p className={styles.author}>{post.author}</p>
        <div className={styles.interactions}>
          <p className={styles.numComments}>{post.num_comments}</p>
          <p className={styles.numCrossposts}>{post.num_crossposts}</p>
        </div>
      </div>
    </div>
  );
}

export default PostItem;