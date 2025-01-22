import { Context } from '@/providers/VariantProvider';
import { useContext } from 'react';

export const useVariants = () => {
  const { setVariant, variant } = useContext(Context);

  return { variant, setVariant };
};
