import { TPosts } from "../types/TPosts";

const API = "https://jsonplaceholder.typicode.com/";

const getPosts = () => fetch(`${API}/posts`);

export { getPosts };
