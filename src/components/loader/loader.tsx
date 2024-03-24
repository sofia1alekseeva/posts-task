import { Oval } from "react-loader-spinner";
import styles from "./loader.module.css";
import { FC } from "react";

interface ILoaderProps {
  extraClass?: string;
}

const Loader: FC<ILoaderProps> = ({ extraClass }) => {
  return (
    <div className={`${styles.container} ${extraClass ? extraClass : ""}`}>
      <Oval
        height={'60%'}
        width={'60%'}
        color="rgb(18, 138, 96)"
        wrapperClass={styles.icon}
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="rgb(40, 255, 180)"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </div>
  );
};

export default Loader;
