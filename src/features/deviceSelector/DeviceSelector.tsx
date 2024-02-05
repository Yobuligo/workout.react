import { IDeviceSelectorProps } from "./IDeviceSelectorProps";

export const DeviceSelector: React.FC<IDeviceSelectorProps> = (props) => {
  const onSelect = () => {
    props.onselect?.(props.device);
  };

  return <button onClick={onSelect}>{props.device.name}</button>;
};
