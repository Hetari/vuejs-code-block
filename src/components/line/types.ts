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
}

// Props goes here
export type PublicLineProps = Partial<Omit<UseLineProps, 'line'>> &
  Pick<UseLineProps, 'line'>;
