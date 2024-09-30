import type {
  ComponentPublicInstance,
  ExtractPropTypes,
  MaybeRefOrGetter,
  PropType,
  Slot
} from 'vue';

// Props goes here
export const codeBlockProps = () =>
  ({
    class: {
      type: String as PropType<string>,
      required: false,
      default: ''
    },
    code: {
      type: String as PropType<string>,
      required: true
    }
  } as const);

export type codeBlockProps = ExtractPropTypes<
  ReturnType<typeof codeBlockProps>
>;

export type codeBlockType = {
  default: Slot;
  trigger: Slot;
};

export type codeBlockExpose = {
  //   TODO: fix this
  // handlePrint: () => void;
};

export type codeBlockInstance = ComponentPublicInstance<
  codeBlockProps,
  codeBlockExpose
>;

export interface UseCodeBlockProps {
  code: MaybeRefOrGetter<string>;
  class: MaybeRefOrGetter<string | null>;
}

// Props goes here
export type PublicCodeBlockProps = Partial<Omit<UseCodeBlockProps, 'code'>> &
  Pick<UseCodeBlockProps, 'code'> &
  Partial<Omit<UseCodeBlockProps, 'class'>> &
  Pick<UseCodeBlockProps, 'class'>;

export type PropertyFunction<T> = () => T;
