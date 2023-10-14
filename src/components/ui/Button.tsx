import { type FC, type ReactNode } from "react";
import cn from "classnames";

export enum ButtonVariants {
  white = "ease-in font-medium rounded-full text-black-1 border border-transparent hover:border-white bg-white text-base duration-200 hover:bg-black-1 hover:text-white",
  whiteOutline = "border-gray-1 ease-in font-medium rounded-full border text-base duration-200 hover:border-black-1 hover:bg-black-1 hover:text-white",
  black = "ease-in rounded-full font-medium text-white bg-gray-opacity text-base duration-200 hover:bg-white hover:text-black-1",
}

type ButtonProps = {
  className?: string;
  variant: ButtonVariants;
  children: ReactNode;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ children, onClick, className, variant }) => {
  return (
    <button
      className={cn(variant, className, "flex items-center justify-center")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
