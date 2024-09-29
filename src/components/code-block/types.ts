import type {
  ComponentPublicInstance,
  ExtractPropTypes,
  MaybeRefOrGetter,
  PropType,
  Slot
} from 'vue';

export const codeBlockProps = () =>
  ({
    code: {
      type: String as PropType<string>,
      required: true
    }
  } as const);

export type codeBlockProps = ExtractPropTypes<
  ReturnType<typeof codeBlockProps>
>;

export type codeBlock = {
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
}

export type PublicCodeBlockProps = Partial<Omit<UseCodeBlockProps, 'code'>> &
  Pick<UseCodeBlockProps, 'code'>;

export type PropertyFunction<T> = () => T;
