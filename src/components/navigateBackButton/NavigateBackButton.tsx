import { useNavigate } from "react-router-dom";
import { INavigateBackButtonProps } from "./INavigateBackButtonProps";
import styles from "./NavigateBackButton.module.scss";
import { ReactComponent as ChevronLeft } from "../../assets/icons/chevron_left.svg";

export const NavigateBackButton: React.FC<INavigateBackButtonProps> = (
  props
) => {
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(props.navigateBackPath);
  };

  return (
    <ChevronLeft className={styles.chevronLeft} onClick={onNavigateBack} />
  );
};
