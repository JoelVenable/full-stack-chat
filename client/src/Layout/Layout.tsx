import React from "react";
import TopNav from "./TopNav";

interface Props {
  children: React.ReactChild;
}

const Layout = ({ children }: Props): React.ReactElement => {
  return (
    <>
      <TopNav />
      {children}
    </>
  );
};

export default Layout;
