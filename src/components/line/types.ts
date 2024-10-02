import type {
  ComponentPublicInstance,
  ExtractPropTypes,
  MaybeRefOrGetter,
  PropType
} from 'vue';

// Props goes here
export const lineProps = () =>
  ({
    line: {
      type: String as PropType<string>,
      required: true
    },
    numbered: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false
    },
    number: {
      type: Number as PropType<number>,
      required: false,
      default: 0
    }
  } as const);

export type lineProps = ExtractPropTypes<ReturnType<typeof lineProps>>;

export type lineExpose = {
  // TODO: fix this
};

export type lineInstance = ComponentPublicInstance<lineProps, lineExpose>;

// Props goes here
export interface UseLineProps {
  line: MaybeRefOrGetter<object>;
  numbered: MaybeRefOrGetter<boolean>;
  number: MaybeRefOrGetter<number>;
}

// Props goes here
export type PublicLineProps = Partial<
  Omit<UseLineProps, 'line' | 'numbered' | 'number'>
> &
  Pick<UseLineProps, 'line' | 'numbered' | 'number'>;
