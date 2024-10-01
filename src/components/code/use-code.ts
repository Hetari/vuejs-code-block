import { toValue } from 'vue';
import { PublicCodeProps } from './types';

const defaultProps = {};

export function useCode(props: PublicCodeProps) {
  props = { ...defaultProps, ...props };

  return {
    props
  };
}
