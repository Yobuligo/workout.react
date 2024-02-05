import { NavigateBackButton } from "../navigateBackButton/NavigateBackButton";
import { IPageProps } from "./IPageProps";
import styles from "./Page.module.scss";

export const Page: React.FC<IPageProps> = (props) => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.title}>
          {props.navigateBackPath && (
            <NavigateBackButton navigateBackPath={props.navigateBackPath} />
          )}
          <h3>{props.title}</h3>
        </div>
        <div className={styles.subTitle}>{props.subTitle}</div>
      </header>
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>{props.footer}</footer>
    </div>
  );
};
