import { SupportedLanguageTypes, themesType } from 'code-block';
import type {
  ComponentPublicInstance,
  ExtractPropTypes,
  MaybeRefOrGetter,
  PropType
} from 'vue';

// import { AllLanguagesSupported } from '../utils';

// Props goes here
export const codeBlockProps = () =>
  ({
    class: {
      type: String as PropType<string>,
      required: false,
      default: ''
    },
    id: {
      type: String as PropType<string>,
      required: false,
      default: ''
    },
    code: {
      type: String as PropType<string>,
      required: true
    },
    language: {
      type: String as PropType<SupportedLanguageTypes>,
      required: true
    },
    codeClass: {
      type: String as PropType<string>,
      required: false,
      default: ''
    },
    linesHighlighted: {
      type: Array as PropType<string[] | number[]>,
      required: false,
      default: []
    },
    wordsHighlighted: {
      type: Array as PropType<string[]>,
      required: false,
      default: []
    },
    asElement: {
      type: String as PropType<string>,
      required: false,
      default: ''
    },
    numbered: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false
    },
    theme: {
      type: String as PropType<themesType>,
      required: true
    },
    fileName: {
      type: String as PropType<string>,
      required: false,
      default: ''
    },
    showHeader: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false
    }
  } as const);

export type codeBlockPropsTypes = ExtractPropTypes<
  ReturnType<typeof codeBlockProps>
>;

export type codeBlockExpose = {
  //   TODO: fix this
  // handlePrint: () => void;
};

export type codeBlockInstance = ComponentPublicInstance<
  codeBlockPropsTypes,
  codeBlockExpose
>;

// Props goes here
export interface UseCodeBlockProps {
  class: MaybeRefOrGetter<string | null>;
  id: MaybeRefOrGetter<string | null>;
  code: MaybeRefOrGetter<string>;
  language: MaybeRefOrGetter<SupportedLanguageTypes>;
  codeClass: MaybeRefOrGetter<string>;
  linesHighlighted: MaybeRefOrGetter<string[] | number[]>;
  wordsHighlighted: MaybeRefOrGetter<string[]>;
  asElement: MaybeRefOrGetter<string>;
  numbered: MaybeRefOrGetter<boolean>;
  theme: MaybeRefOrGetter<themesType>;
  fileName: MaybeRefOrGetter<string>;
}

// Props goes here
// The type `PublicCodeBlockProps` allows optional properties from UseCodeBlockProps,
// but ensures that properties are required.
export type PublicCodeBlockProps = Partial<
  // Omit properties from UseCodeBlockProps to make the remaining props optional
  Omit<
    UseCodeBlockProps,
    | 'code'
    | 'class'
    | 'id'
    | 'language'
    | 'codeClass'
    | 'linesHighlighted'
    | 'wordsHighlighted'
    | 'asElement'
    | 'numbered'
    | 'theme'
    | 'fileName'
  >
> &
  // Then explicitly pick properties from UseCodeBlockProps to make them required
  Pick<
    UseCodeBlockProps,
    | 'code'
    | 'class'
    | 'id'
    | 'language'
    | 'codeClass'
    | 'linesHighlighted'
    | 'wordsHighlighted'
    | 'asElement'
    | 'numbered'
    | 'theme'
    | 'fileName'
  >;
