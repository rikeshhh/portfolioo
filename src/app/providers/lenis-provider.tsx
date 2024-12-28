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
        smoothWheel:true,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisScrollProvider;
