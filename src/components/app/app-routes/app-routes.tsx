import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "../../layout/layout";
import PostsPage from "../../../pages/posts/posts-page";
import PostPage from "../../../pages/post/post-page";
import NotFound from "../../../pages/not-found/not-found";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <Routes location={location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="posts" />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:id" element={<PostPage />} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
