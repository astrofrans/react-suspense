import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => (
  <main className="min-h-[80vh]">
    <div className="grid grid-cols-1 gap-4 mt-14 max-w-7xl mx-auto px-6 sm:grid-cols-2 md:grid-cols-4">
      {children}
    </div>
  </main>
);
