import { useEffect, useState } from "react";
import { TPosts } from "../../types/TPosts";
import { posts } from "../../api";
import useFetch from "../../hooks/useFetch";
import PostItem from "../post-item/post-item";
import styles from "./post-list.module.css";
import Loader from "../loader/loader";

const PostsList = () => {
  const { data, loading, error } = useFetch<TPosts>(posts.getPosts);

  return (
    <ul className={styles.list}>
      {loading && <Loader extraClass={styles.loader} />}
      {data?.map(({ id, userId, title, body }) => (
        <PostItem key={id} title={title} id={id} body={body} userId={userId} />
      ))}
    </ul>
  );
};

export default PostsList;
