'use client';

import { type ReactNode, useState } from 'react';
import { Loader } from '../ui/Loader/Loader';

type LoaderWrapperProps = {
  children: ReactNode;
};

export default function LoaderWrapper({ children }: LoaderWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  return <>{isLoading ? <Loader setHideLoader={setIsLoading} /> : children}</>;
};
