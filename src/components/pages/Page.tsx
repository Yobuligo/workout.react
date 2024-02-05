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
          <div>
            <h3>{props.title}</h3>
            <p className={styles.subTitle}>{props.subTitle}</p>
          </div>
        </div>
      </header>
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>{props.footer}</footer>
    </div>
  );
};
