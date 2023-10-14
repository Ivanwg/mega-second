import { type FC, type ReactNode } from "react";

type DescriptionProps = {
  children?: ReactNode;
};

export const Description: FC<DescriptionProps> = ({ children }) => {
  return <div className={"text-gray-2 text-base font-medium"}>{children}</div>;
};
