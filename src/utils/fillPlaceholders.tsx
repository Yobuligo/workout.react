/**
 * Returns if {@link placeholders} contains a property which is of type object.
 * @example
 * // Here property link would be of object type JSX.Element. So the function would return true
 * { contractId: "123", link: <></> };
 */
function containsObjectProp<T extends object>(placeholders: T) {
  for (const propName in placeholders) {
    if (typeof placeholders[propName] === "object") {
      return true;
    }
  }
  return false;
}

/**
 * Returns {@link text} filled with all given literal {@link placeholders}.
 */
function fillTextPlaceholders<T>(text: string, placeholders: T): string {
  for (const propName in placeholders) {
    const value = placeholders[propName];
    text = text.replaceAll(`{{${propName}}}`, value as string);
  }
  return text;
}

/**
 * Returns if the given {@link text} is a placeholder expression.
 * @example
 * text = {{link}}
 */
function isPlaceholderExpression(text: string): boolean {
  return text.startsWith("{{");
}

/**
 * Converts a given {@link text} to a placeholder expression.
 * @example
 * text = "link" -> text = "{{link}}"
 */
function toPlaceholderExpression(text: string): string {
  return `{{${text}}}`;
}

/**
 * Finds a placeholder from {@link placeholders} by a {@link text}.
 * Returns undefined if no placeholder with {@link text} exists.
 */
function findPlaceholder<T extends object>(placeholders: T, text: string) {
  if (isPlaceholderExpression(text)) {
    for (const propName in placeholders) {
      if (toPlaceholderExpression(propName) === text) {
        return placeholders[propName];
      }
    }
  }
  return undefined;
}

/**
 * Returns {@link text} wrapped as a JSX.Element filled with all given {@link placeholders} including objects.
 */
function fillObjectPlaceholders<T extends object>(
  text: string,
  placeholders: T
): JSX.Element {
  // Split text at {{<placeholder-name>}}
  const texts = text.split(/({{.*?}})/);

  // wrap text elements by fragment
  // if text is a placeholder, find the placeholder and set it instead of the text
  const items = texts.map((text) => {
    const placeholder = findPlaceholder(placeholders, text);
    return <>{placeholder ? placeholder : text}</>;
  });

  // return combined element
  return <div>{items}</div>;
}

/**
 * Returns {@link text} filled with all given {@link placeholders}.
 * If the placeholders are just text, the placeholder would be replaced by the corresponding text and a string is returned.
 * If at least one placeholder is of type object, the result is a JSX.Element, which wraps the text by fragments.
 */
export function fillPlaceholders<T extends object>(
  text: string,
  placeholders: T
): T[keyof T] {
  // check if placeholders contains a property of type object
  // if so, it has to be wrapped by a component, so we cannot return a simple string, but a JSX.Element
  if (containsObjectProp(placeholders)) {
    return fillObjectPlaceholders(text, placeholders) as T[keyof T];
  }

  return fillTextPlaceholders(text, placeholders) as T[keyof T];
}
