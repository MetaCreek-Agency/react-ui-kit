import { ProductCardProps } from './types';

export const defaultProps: Pick<ProductCardProps, 'type' | 'load'> = {
  type: 'default',
  load: false,
};
