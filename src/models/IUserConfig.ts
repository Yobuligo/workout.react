export interface IUserConfig {
  /**
   * Returns if the training devices should be displayed in device selector list
   */
  displayTrainingDevices: boolean;

  /**
   * Returns the ids of the devices, which should be selected in the device selector list
   */
  selectedDeviceIds: string[];
}
