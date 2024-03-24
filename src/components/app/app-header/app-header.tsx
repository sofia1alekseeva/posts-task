import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AppHeaderLink from "../app-header-link/app-header-link";
import styles from './app-header.module.css';

const AppHeader: FC = () => {
  const location = useLocation();
  const [active, setActive] = useState<string>("/");

  useEffect(() => {
    if (location.pathname) {
      setActive(location.pathname);
    }
  }, [location]);
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <AppHeaderLink to="/posts" isActive={active === "/posts"} text="Посты" icon="" />
      </div>
    </header>
  );
};

export default AppHeader;
