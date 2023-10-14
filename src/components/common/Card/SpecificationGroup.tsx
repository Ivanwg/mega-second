import { type FC, type ReactNode } from "react";

type SpecificationGroupProps = {
  children?: ReactNode;
};

export const SpecificationGroup: FC<SpecificationGroupProps> = ({
  children,
}) => {
  return (
    <ul className={"mt-6.5 w-full [&>*:not(:first-child)]:border-t-[1px]"}>
      {children}
    </ul>
  );
};
