import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TPost, TPosts } from "../../types/TPosts";
import { posts } from "../../api";
import styles from "./post-page.module.css";
import Loader from "../../components/loader/loader";

const PostPage: FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [post, setPost] = useState<TPost | null>(null);

  useEffect(() => {
    setLoading(true);
    posts
      .getPosts()
      .then((resp) => resp.json())
      .then((response: TPosts) => {
        const p = response?.find((item) => item?.id === Number(id));
        if (p) {
          setPost(p);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      {loading && <Loader extraClass={styles.loader} />}
      {post && !error && (
        <div key={post.id} className={styles.post_wrapper}>
          <span className={styles.title}>{post.title}</span>
          <p className={styles.body}>{post.body}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default PostPage;
