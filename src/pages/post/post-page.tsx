import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { TPost, TPosts } from "../../types/TPosts";
import { posts } from "../../api";
import styles from "./post-page.module.css";
import Loader from "../../components/loader/loader";

const PostPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch<TPosts>(posts.getPosts);
  const [post, setPost] = useState<TPost | null>(null);

  useEffect(() => {
    if (data && id) {
      const p = data?.find((item) => item.id === Number(id));
      if (p) {
          setPost(p);
      }
    }
  }, [data]);

  return (
    <div className={styles.mainBlock}>
      {loading && <Loader extraClass={styles.loader}/>}
      {post && (
        <div key={post.id} className={styles.postWrapper}>
          <span className={styles.title}>{post.title}</span>
          <p className={styles.body}>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostPage;
