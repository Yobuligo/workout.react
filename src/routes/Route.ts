type IsParameter<Part> = Part extends `:${infer ParamName}` ? ParamName : never;

type FilteredParts<Path> = Path extends `${infer PartA}/${infer PartB}`
  ? IsParameter<PartA> | FilteredParts<PartB>
  : IsParameter<Path>;

type Params<Path> = { [Key in FilteredParts<Path>]: string };

export class Route<TPath extends string> {
  constructor(readonly origin: TPath) {}

  toPath<TParams extends Params<TPath>>(params: TParams): string {
    let path = this.origin;
    for (const propName in params) {
      path.replaceAll(`:${propName}`, params[propName]);
    }
    return path;
  }
}
