import { PublicLineProps } from './types';

const defaultProps = {};

export function useCode(props: PublicLineProps) {
  props = { ...defaultProps, ...props };

  return {
    props
  };
}
