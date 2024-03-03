import { Card } from "../card/Card";
import { Spinner } from "../spinner/Spinner";
import styles from "./FooterButton.module.scss";
import { IFooterButtonProps } from "./FooterButtonProps";

export const FooterButton: React.FC<IFooterButtonProps> = (props) => {
  return (
    <div className={styles.footerButton}>
      <Card className={styles.generateCard} onClick={props.onClick}>
        <h4>{props.caption}</h4>
        <Spinner />
        {/* {props.displaySpinner && <Spinner />} */}
      </Card>
    </div>
  );
};
