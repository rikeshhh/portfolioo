'use client';
import { ReactLenis } from 'lenis/react';
import React from 'react';

type LenisScrollProviderProps = {
  children: React.ReactNode;
};

const LenisScrollProvider = ({ children }: LenisScrollProviderProps) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.02,
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisScrollProvider;
