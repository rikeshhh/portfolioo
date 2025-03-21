import React, { ReactNode } from "react";

export const CardTitle: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold text-gray-900">
      {children}
    </h3>
  );
};
