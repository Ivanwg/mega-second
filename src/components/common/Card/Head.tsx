import { type FC, type ReactNode } from "react";

type HeadProps = {
  children?: ReactNode;
};

export const Head: FC<HeadProps> = ({ children }) => {
  return (
    <div className={"mt-6 flex w-full flex-col gap-2.5 text-center"}>
      {children}
    </div>
  );
};
