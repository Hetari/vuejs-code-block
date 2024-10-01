import type {
  ComponentPublicInstance,
  ExtractPropTypes,
  MaybeRefOrGetter,
  PropType
} from 'vue';

type CodeProps = {
  code: string;
  language: string;
  linesHighlighted: string[] | number[];
  wordsHighlighted: string[];
  asElement: string;
};

// Props goes here
export const codeProps = () =>
  ({
    value: {
      type: Object as PropType<CodeProps>,
      required: true
    }
  } as const);

export type codeProps = ExtractPropTypes<ReturnType<typeof codeProps>>;

export type codeExpose = {
  // TODO: fix this
};

export type codeInstance = ComponentPublicInstance<codeProps, codeExpose>;

// Props goes here
export interface UseCodeProps {
  value: MaybeRefOrGetter<object>;
}

// Props goes here
export type PublicCodeProps = Partial<Omit<UseCodeProps, 'value'>> &
  Pick<UseCodeProps, 'value'>;
