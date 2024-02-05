import * as translations from "../i18n";
import { ITranslation } from "../types/ITranslation";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { texts } from "../i18n/texts";
import { Placeholder } from "../types/Placeholder";
import { TranslationResult } from "../types/TranslationResult";
import { fillPlaceholders } from "../utils/fillPlaceholders";

/**
 * This custom hook is responsible for providing access to translatable texts of the selected language.
 * The texts are defined in folder 'i18n'. They can be addressed via constant {@link texts}.
 * It can be used as follows:
 *
 * @example
 * const { t } = useTranslation()
 * t(texts.myTextReference)
 *
 * // Placeholders can be provided as second parameter
 * // The placeholder in the corresponding text definition must be defined as e.g. "myTextReference": "Hello {{name}}"
 * t(texts.myTextReference, { name: "John" })
 *
 */
const useTranslation = () => {
  const language = "en";

  const getTranslations = <T extends object>(
    keys: string[],
    placeholders?: T
  ) => {
    let text = keys.reduce((obj, key) => {
      return obj[key];
    }, (translations as any)[language]);

    if (placeholders) {
      text = fillPlaceholders(text, placeholders);
    }

    return text;
  };

  /**
   * Returns the text with the given {@link key}.
   *
   * @example
   * {
   *    "demo": "Hello World",
   * }
   *
   * t(texts.demo);
   */
  function t(key: string): string;
  /**
   * Returns the text with the given {@link key} and {@link placeholders}.
   *
   * @example
   * {
   *    "demo": "Hello World",
   *    "demo2": "Hello World {{firstname}}"
   *    "demo3": "Hello World {{link}}" // <- injects as placeholder into the text
   * }
   *
   * t(texts.demo);
   * t(texts.demo2, { firstname: "John" });
   * t(texts.demo3, { link: <Link>click me</Link> })
   */
  function t<T extends Placeholder>(
    key: string,
    placeholders: T
  ): TranslationResult<T>;
  /**
   * Returns the text from the given {@link translation}.
   *
   * @example
   * {
   *    "demo": "Hello World",
   *    "demo2": "Hello World {{firstname}} {{link}}"
   * }
   *
   * const translation: ITranslation = {
   *   text: texts.demo2,
   *   placeholders: { firstname: "John", link: <Link>click me</Link> },
   * };
   * t(translation);
   */
  function t<T = string>(translation: ITranslation): T;
  function t<T = string>(first: unknown, second?: unknown): T {
    if (typeof first === "string") {
      const keySegments = first.split(".");
      return getTranslations(keySegments, second as any);
    }

    const translation = first as ITranslation;
    const keySegments = translation.text.split(".");
    return getTranslations(keySegments, translation.placeholders);
  }

  return { t };
};

export default useTranslation;
