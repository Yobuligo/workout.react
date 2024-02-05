/**
 * This type represents a placeholder for translations. A placeholder must either be of type literal or JSX.Element type, to inject e.g. links.
 */
export type Placeholder = {
  [key: string]: string | number | boolean | JSX.Element;
};
