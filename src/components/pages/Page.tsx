import { IPageProps } from "./IPageProps";
import styles from "./Page.module.scss";

export const Page: React.FC<IPageProps> = (props) => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h3>{props.title}</h3>
      </header>
      <main>{props.children}</main>
    </div>
  );
};
