import { useToggle } from "../../hooks/useToggle";
import { ISwitchProps } from "./ISwitchProps";
import styles from "./Switch.module.scss";

export const Switch: React.FC<ISwitchProps> = (props) => {
  const [checked, toggleChecked] = useToggle(props.checked ?? false);

  const onChecked = () => toggleChecked();

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={checked} onChange={onChecked} />
      <span className={styles.slider} />
    </label>
  );
};
