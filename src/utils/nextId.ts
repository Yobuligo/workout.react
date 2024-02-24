class IdGenerator {
  private cursor = 0;

  next(): string {
    this.cursor++;
    return this.cursor.toString();
  }
}

const idGenerator = new IdGenerator();
export const nextId = () => {
  return idGenerator.next();
};
