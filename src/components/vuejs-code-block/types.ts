import type {
  ComponentPublicInstance,
  ExtractPropTypes,
  MaybeRefOrGetter,
  PropType,
  Slot
} from 'vue';

export const vuejsCodeBlockProps = () =>
  ({
    code: {
      type: String as PropType<string>,
      required: true
    }
  } as const);

export type InnerVueToPrintProps = ExtractPropTypes<
  ReturnType<typeof vuejsCodeBlockProps>
>;

export type VuejsCodeBlock = {
  default: Slot;
  trigger: Slot;
};

export type VuejsCodeBlockExpose = {
  //   TODO: fix this
  // handlePrint: () => void;
};

export type VuejsCodeBlockInstance = ComponentPublicInstance<
  InnerVueToPrintProps,
  VuejsCodeBlockExpose
>;

export interface UseVuejsCodeBlockProps {
  code: MaybeRefOrGetter<string>;
}

export type PublicVuejsCodeBlockProps = Partial<
  Omit<UseVuejsCodeBlockProps, 'code'>
> &
  Pick<UseVuejsCodeBlockProps, 'code'>;

export type PropertyFunction<T> = () => T;
