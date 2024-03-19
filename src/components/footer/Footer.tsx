import styles from "./Footer.module.scss";
import { IFooterProps } from "./IFooterProps";

export const Footer: React.FC<IFooterProps> = (props) => {
  return <div className={styles.footer}>{props.children}</div>;
};
