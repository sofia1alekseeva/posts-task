import { useEffect, useState } from "react"
import { TPosts } from "../../types/TPosts";
import { posts } from "../../api";
import useFetch from "../../hooks/useFetch";
import PostItem from "../post-item/post-item";
import styles from './post-list.module.css';

const PostsList = () => {
    // const [posts, setPosts] = useState<TPosts>([]);

    const {data, loading, error } = useFetch<TPosts>(posts.getPosts);
console.log('data', data);
    return <ul className={styles.list}>
        {
        data?.map(({id, userId, title, body}) => (<PostItem title={title} id={id} body={body} userId={userId}/>))
        }
    </ul>
}

export default PostsList;