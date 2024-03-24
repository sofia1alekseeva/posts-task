import { FC, useEffect, useState } from "react";
import { TPosts } from "../../types/TPosts";
import PostItem from "../post-item/post-item";
import styles from "./posts-list.module.css";
import Loader from "../loader/loader";
import { getPosts } from "../../api/posts";
import { useLocation, useSearchParams } from "react-router-dom";

const PostsList: FC = () => {
  const [posts, setPosts] = useState<TPosts | []>([]);
  const [error, setError] = useState<string | null>(null);
  const [fetching, setFetching] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const getCurrentPosts = (queryParams: {
    _page?: number;
    _limit?: number;
  }) => {
    getPosts(queryParams)
      .then((response) => {
        if (totalCount === 0) {
          const total = response.headers.get("x-total-count");
          setTotalCount(Number(total));
        }
        return response.json();
      })
      .then((data) => {
        setPosts((prevState) => [...prevState, ...data]);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setCurrentPage((prevState) => prevState + 1);
        setFetching(false);
      });
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    let page: number;
    if (params.has("page")) {
      page = Number(params.get("page"));
      setCurrentPage(page);
    } else {
      page = currentPage;
      setSearchParams((params) => {
        params.set("page", page.toString());
        return params;
      });
    }
    getCurrentPosts({ _limit: 10 * page });
  }, []);

  useEffect(() => {
    if (fetching) {
      getCurrentPosts({ _page: currentPage, _limit: 10 });
    }
    const scrollHandler = (e: any) => {
      const scrollBottom =
        document.documentElement.scrollHeight -
          (document.documentElement.scrollTop + window.innerHeight) <
        100;
      if (scrollBottom) {
        setFetching(true);
        setSearchParams((params) => {
          params.set("page", currentPage.toString());
          return params;
        });
      }
    };
    if (currentPage <= 5) {
      document.addEventListener("scroll", scrollHandler);
    }
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [fetching, currentPage]);

  const onClick = () => {
    setFetching(true);
    setSearchParams((params) => {
      params.set("page", currentPage.toString());
      return params;
    });
  };
  return (
    <ul className={styles.list}>
      {!error &&
        posts.map(({ id, userId, title, body }, index) => (
          <PostItem
            key={id}
            title={title}
            id={id}
            body={body}
            userId={userId}
          />
        ))}
      {(fetching || !posts.length) && !error && (
        <Loader extraClass={styles.loader} />
      )}
      {error && <p>{error}</p>}
      {currentPage > 5 && posts.length < totalCount && (
        <button className={styles.load_more_btn} onClick={onClick}>
          Загрузить еще
        </button>
      )}
    </ul>
  );
};

export default PostsList;
