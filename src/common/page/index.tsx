import React, { FC } from "react";
import "./index.less";

const Page: FC = ({ children, ...rest }) => {
  return <div className="page">{children}</div>;
};

export default Page;
