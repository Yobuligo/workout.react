export class Route<TPath extends string> {
  constructor(readonly origin: TPath) {}
}
