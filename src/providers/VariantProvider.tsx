'use client';

import type {
  Dispatch,
  ReactNode,
  SetStateAction,
} from 'react';
import {
  createContext,
  useState,
} from 'react';

type Variants = 'DEFAULT' | 'PROJECT' | 'BUTTON' | 'TEXT';

type ContextProps = {
  variant: Variants;
  setVariant: Dispatch<SetStateAction<Variants>>;
};

const Context = createContext<ContextProps>({
  variant: 'DEFAULT',
  setVariant: () => {},
});

const VariantProvider = ({ children }: { children: ReactNode }) => {
  const [variant, setVariant] = useState<Variants>('DEFAULT');

  return (
    <Context value={{ variant, setVariant }}>
      {children}
    </Context>
  );
};

export { Context, VariantProvider };
