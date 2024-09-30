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

export type codeBlockSlot = {
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
// The type `PublicCodeBlockProps` allows optional properties from UseCodeBlockProps,
// but ensures that properties are required.
export type PublicCodeBlockProps = Partial<
  // Omit properties from UseCodeBlockProps to make the remaining props optional
  Omit<UseCodeBlockProps, 'code' | 'class' | 'id'>
> &
  // Then explicitly pick properties from UseCodeBlockProps to make them required
  Pick<UseCodeBlockProps, 'code' | 'class' | 'id'>;

export type PropertyFunction<T> = () => T;
