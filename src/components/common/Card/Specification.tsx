import { type FC, type ReactNode } from "react";

type SpecificationProps = {
  children?: ReactNode;
};

export const Specification: FC<SpecificationProps> = ({ children }) => {
  return (
    <li
      className={
        "text-black-2 py-4.5 border-t-gray-3 flex justify-between gap-1 text-base"
      }
    >
      {children}
    </li>
  );
};
