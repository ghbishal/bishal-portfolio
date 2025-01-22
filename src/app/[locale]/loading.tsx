import { Spinner } from '@/components/ui/Spinner';
import React from 'react';

const Loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Spinner size="xl" />
    </div>
  );
};

export default Loading;
