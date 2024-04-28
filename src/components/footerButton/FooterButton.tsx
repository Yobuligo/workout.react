import { Card } from "../card/Card";
import { Spinner } from "../spinner/Spinner";
import { SpinnerSize } from "../spinner/SpinnerSize";
import styles from "./FooterButton.module.scss";
import { IFooterButtonProps } from "./FooterButtonProps";

export const FooterButton: React.FC<IFooterButtonProps> = (props) => {
  return (
    <div className={styles.footerButton}>
      <Card className={styles.generateCard} onClick={props.onClick}>
        {props.displaySpinner ? (
          <Spinner spinnerSize={SpinnerSize.SMALL} />
        ) : (
          <div className={styles.caption}>{props.caption}</div>
        )}
      </Card>
    </div>
  );
};
