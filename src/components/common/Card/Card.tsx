import { type ReactNode } from "react";

import { Head } from "./Head";
import { Description } from "./Description";
import { Title } from "./Title";
import { Specification } from "./Specification";
import { SpecificationGroup } from "./SpecificationGroup";

const Card = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="card flex max-w-[413px] flex-col items-center items-center justify-between rounded-md bg-white-1 px-11 py-8">
      {children}
    </div>
  );
};

Card.Head = Head;
Card.Description = Description;
Card.Title = Title;
Card.Specification = Specification;
Card.SpecificationGroup = SpecificationGroup;

export default Card;
