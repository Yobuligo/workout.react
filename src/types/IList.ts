export interface IList<T> {
  readonly items: T[];
  append(item: T): void;
  contains(item: T): boolean;
  remove(item: T): void;
  removeAll(): void;
}
