import { useNavigate } from "react-router-dom";
import { TPost } from "../../types/TPosts";
import styles from './post-item.module.css'


const PostItem = ({id, title, body, userId}:TPost) => {
  const navigate = useNavigate();
    const onClick = () => {
        navigate(`/posts/${id}`)
      }
    return <li key={id} className={styles.mainBlock} onClick={onClick}>
        <span className={styles.title}>{title}</span>
        <p className={styles.body}>{body}</p>
    </li>
}


export default PostItem;