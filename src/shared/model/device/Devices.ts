import { texts } from "../../../i18n/texts";
import { nextId } from "../../../utils/nextId";
import { configureDevices } from "./configureDevices";

export const Devices = configureDevices({
  balanceBoard: {
    id: nextId(),
    title: texts.devices.balanceBoard,
  },
  box: {
    id: nextId(),
    title: texts.devices.box,
  },
  dumbbell: {
    id: nextId(),
    title: texts.devices.dumbbell,
  },
  kettleBell: {
    id: nextId(),
    title: texts.devices.kettleBell,
  },
  resistanceBand: {
    id: nextId(),
    title: texts.devices.resistanceBand,
  },
  rope: {
    id: nextId(),
    title: texts.devices.rope,
  },
  weightedVest: {
    id: nextId(),
    title: texts.devices.weightedVest,
  },
});
