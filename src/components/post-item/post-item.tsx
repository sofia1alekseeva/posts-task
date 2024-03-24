import { useNavigate } from "react-router-dom";
import { TPost } from "../../types/TPosts";
import styles from "./post-item.module.css";
import { FC } from "react";

const PostItem: FC<TPost> = ({ id, title, body, userId }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/posts/${id}`);
  };
  return (
    <li key={id} className={styles.container} onClick={onClick}>
      <span className={styles.title}>{title}</span>
      <p className={styles.body}>{body}</p>
    </li>
  );
};

export default PostItem;
