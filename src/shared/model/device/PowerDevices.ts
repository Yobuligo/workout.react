import { texts } from "../../../i18n/texts";
import { nextId } from "../../../utils/nextId";
import { configureDevices } from "./configureDevices";

export const PowerDevices = configureDevices({
  balanceBoard: {
    id: nextId(),
    title: texts.powerDevices.balanceBoard,
  },
  box: {
    id: nextId(),
    title: texts.powerDevices.box,
  },
  dumbbell: {
    id: nextId(),
    title: texts.powerDevices.dumbbell,
  },
  kettleBell: {
    id: nextId(),
    title: texts.powerDevices.kettleBell,
  },
  resistanceBand: {
    id: nextId(),
    title: texts.powerDevices.resistanceBand,
  },
  rope: {
    id: nextId(),
    title: texts.powerDevices.rope,
  },
  weightedVest: {
    id: nextId(),
    title: texts.powerDevices.weightedVest,
  },
});
