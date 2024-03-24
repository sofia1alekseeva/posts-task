import { Link } from "react-router-dom";
import styles from "./app-header-link.module.css";
import { FC } from "react";

type TAppHeaderLinkProps = {
  isActive: boolean;
  text: string;
  icon: string;
  to: string;
};

const AppHeaderLink: FC<TAppHeaderLinkProps> = ({
  isActive,
  text,
  icon,
  to,
}) => {
  return (
    <nav
      className={`${isActive ? styles.active : styles.notActive} ${
        styles.container
      }`}
    >
      <div className={styles.logo}>{icon}</div>
      <Link to={to}>{text}</Link>
    </nav>
  );
};

export default AppHeaderLink;
