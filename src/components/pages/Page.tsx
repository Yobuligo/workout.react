import { IPageProps } from "./IPageProps";
import styles from "./Page.module.scss";

export const Page: React.FC<IPageProps> = (props) => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h3>{props.title}</h3>
        <div className={styles.subTitle}>{props.subTitle}</div>
      </header>
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};
