import { FC } from 'react';
import styles from './not-found.module.css'

const NotFound:FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <span className={styles.description}>Страница не найдена</span>
    </div>
  );
};

export default NotFound;
