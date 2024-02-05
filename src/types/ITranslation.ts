// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { texts } from "../i18n/texts";
import { Placeholder } from "./Placeholder";

/**
 * An implementation of this interface represents a translation.
 * It contains of a {@link text}, which should be a key of {@link texts}
 * and it can contain placeholders, which should be set within {@link text}.
 *
 * @example
 * const translation: Translation<{ name: string }> = {
 *   text: texts.hello,
 *   placeholders: { name: "John" },
 * };
 */
export interface ITranslation {
  text: string;
  placeholders?: Placeholder;
}
