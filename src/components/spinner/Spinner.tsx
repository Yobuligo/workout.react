import { CSSProperties } from "react";
import { ISpinnerProps } from "./ISpinnerProps";
import styles from "./Spinner.module.scss";
import { SpinnerSize } from "./SpinnerSize";

export const Spinner: React.FC<ISpinnerProps> = (props) => {
  const getBorderSize = () => {
     switch (props.spinnerSize) {
      case SpinnerSize.SMALL:
        return 3;
      case SpinnerSize.LARGE:
        return 6;
      default:
        return 5;
    }
  };

  const getSize = () => {
    switch (props.spinnerSize) {
      case SpinnerSize.SMALL:
        return 24;
      case SpinnerSize.LARGE:
        return 72;
      default:
        return 48;
    }
  };

  const style = {
    "--width": `${getSize()}px`,
    "--height": `${getSize()}px`,
    "--borderSize": `${getBorderSize()}px`,
  } as CSSProperties;

  return <span className={styles.loader} style={style}></span>;
};
