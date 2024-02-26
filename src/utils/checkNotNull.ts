export const checkNotNull = <T>(value: T): NonNullable<T> => {
  if (value === undefined || value === null) {
    throw new Error(
      `Error while getting value. Provided value must be not null.`
    );
  }
  return value;
};
