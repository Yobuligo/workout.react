import { ReactComponent as CheckIcon } from "../../assets/icons/check.svg";
import { Card } from "../../components/card/Card";
import { style } from "../../core/style";
import { useToggle } from "../../hooks/useToggle";
import useTranslation from "../../hooks/useTranslation";
import styles from "./DeviceSelector.module.scss";
import { IDeviceSelectorProps } from "./IDeviceSelectorProps";

export const DeviceSelector: React.FC<IDeviceSelectorProps> = (props) => {
  const { t } = useTranslation();
  const [selected, toggleSelected] = useToggle(props.selected);

  const onToggleSelected = () => {
    if (toggleSelected()) {
      props.onSelect?.(props.device);
    } else {
      props.onUnselect?.(props.device);
    }
  };

  return (
    <Card
      className={style(
        styles.card,
        selected ? styles.selected : styles.unselected
      )}
      onClick={onToggleSelected}
    >
      <>
        {selected && <CheckIcon className={styles.checkIcon} />}
        {t(props.device.title)}
      </>
    </Card>
  );
};
