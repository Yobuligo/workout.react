import { Card } from "../../components/card/Card";
import { useToggle } from "../../hooks/useToggle";
import styles from "./DeviceSelector.module.scss";
import { IDeviceSelectorProps } from "./IDeviceSelectorProps";

export const DeviceSelector: React.FC<IDeviceSelectorProps> = (props) => {
  const [selected, toggleSelected] = useToggle(props.selected);

  const onToggleSelected = () => {
    if (toggleSelected()) {
      props.onselect?.(props.device);
    } else {
      props.onUnselect?.(props.device);
    }
  };

  return (
    <Card
      className={selected ? styles.selected : styles.unselected}
      onClick={onToggleSelected}
    >
      {props.device.name}
    </Card>
  );
};
