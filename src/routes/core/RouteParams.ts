type IsParam<TPath> = TPath extends `:${infer TParamName}` ? TParamName : never;

type FilterParts<TPath> = TPath extends `${infer TPartA}/${infer TPartB}`
  ? IsParam<TPartA> | FilterParts<TPartB>
  : IsParam<TPath>;

export type RouteParams<TPath extends string> = {
  [P in FilterParts<TPath>]: string;
};
