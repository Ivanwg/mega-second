import { type FC, type ReactNode } from "react";

type TitleProps = {
  children?: ReactNode;
};

export const Title: FC<TitleProps> = ({ children }) => {
  return (
    <div className={"text-black-1 text-3xl font-semibold"}>{children}</div>
  );
};
