export const writeLocalStorage = <T>(key: string, value: T) => {
  const item = JSON.stringify(value);
  localStorage.setItem(key, item);
};
