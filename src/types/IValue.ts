export interface IValue<T> {
  readonly value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
}
