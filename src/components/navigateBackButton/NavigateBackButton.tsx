import { useNavigate } from "react-router-dom";
import { INavigateBackButtonProps } from "./INavigateBackButtonProps";
import styles from "./NavigateBackButton.module.scss";

export const NavigateBackButton: React.FC<INavigateBackButtonProps> = (
  props
) => {
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(props.navigateBackPath);
  };

  return (
    <div className={styles.navigateBackButton} onClick={onNavigateBack}>
      {"<"}
    </div>
  );
};
