import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full max-w-7xl min-h-screen mx-auto p-20">
      {children}
    </div>
  );
}

export default Layout;
