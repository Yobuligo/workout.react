export interface IList<T> {
  readonly items: T[];
  append(item: T): void;
  remove(item: T): void;
}
