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
    id: {
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

// Props goes here
export interface UseCodeBlockProps {
  class: MaybeRefOrGetter<string | null>;
  id: MaybeRefOrGetter<string | null>;
  code: MaybeRefOrGetter<string>;
}

// Props goes here

export type PublicCodeBlockProps = Partial<Omit<UseCodeBlockProps, 'code'>> &
  Partial<Omit<UseCodeBlockProps, 'class'>> &
  Partial<Omit<UseCodeBlockProps, 'id'>> &
  Partial<Omit<UseCodeBlockProps, 'id'>> &
  Pick<UseCodeBlockProps, 'class'> &
  Pick<UseCodeBlockProps, 'code'>;

export type PropertyFunction<T> = () => T;
