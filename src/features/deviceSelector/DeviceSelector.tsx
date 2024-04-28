import { useState } from "react";
import { ReactComponent as CheckIcon } from "../../assets/icons/check.svg";
import { Card } from "../../components/card/Card";
import { style } from "../../core/style";
import useTranslation from "../../hooks/useTranslation";
import styles from "./DeviceSelector.module.scss";
import { IDeviceSelectorProps } from "./IDeviceSelectorProps";

export const DeviceSelector: React.FC<IDeviceSelectorProps> = (props) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(props.selected);

  const onToggleSelected = () => {
    setSelected((previous) => {
      previous = !previous;
      if (previous) {
        props.onSelect?.(props.device);
      } else {
        props.onUnselect?.(props.device);
      }
      return previous;
    });
  };

  return (
    <Card
      className={style(
        styles.card,
        styles.title,
        selected ? styles.selected : styles.unselected
      )}
      onClick={onToggleSelected}
    >
      {selected && <CheckIcon className={styles.checkIcon} />}
      {t(props.device.title)}
    </Card>
  );
};
