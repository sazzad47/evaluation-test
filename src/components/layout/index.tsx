import React, { ReactNode } from "react";
import InitialState from "../../services/InitialState";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  
  return (
    <div  className="w-full max-w-7xl  mx-auto mb-20 p-20">
      <InitialState/>
      {children}
    </div>
  );
}

export default Layout;
