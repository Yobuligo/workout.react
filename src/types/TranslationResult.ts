/**
 * This type represents a translation result, which can either be of type string or of type JSX.Element.
 * It can be of type JSX.Element, if the placeholder object contains a property of type JSX.Element, to e.g. inject a link, that should be clicked within the translation.
 *
 * @example
 * // placeholder, which contains simple text
 * {
 *   firstname: "John",
 * }
 *
 * // placeholder, which contains a JSX.Element, which should be injected within a translation
 * {
 *   link: <Link to={"/"}>click me</Link>,
 * }
 */
export type TranslationResult<T> = T extends { [key: string]: infer U }
  ? U extends JSX.Element
    ? JSX.Element
    : string
  : string;
