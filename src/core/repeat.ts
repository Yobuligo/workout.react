export const repeat = (times: number, action: (index: number) => void) => {
  for (let i = 0; i < times; i++) {
    action(i);
  }
};
