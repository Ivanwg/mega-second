import Link from "next/link";
import LogoIcon from "~/assets/svg/LogoIcon";
import Button, { ButtonVariants } from "~/components/ui/Button";
import cn from "classnames";
import { type FC } from "react";

const Header = () => {
  return (
    <header
      className={cn(
        "items-cetner fixed z-40 h-[75px] w-full justify-center bg-black-transparent backdrop-blur-md duration-300 ease-in",
      )}
    >
      <div className="container relative mx-auto flex h-full items-center justify-between">
        <Link href={"/"}>
          <LogoIcon />
        </Link>
        <ul className="flex gap-9 text-base text-white">
          <li>
            <Link href={"/mega"}>Mega</Link>
          </li>
          <li>
            <Link href={"/"}>Mega Light</Link>
          </li>
          <li>
            <Link href={"/"}>Mega Keyboard</Link>
          </li>
          <li>
            <Link href={"/"}>Софт</Link>
          </li>
          <li>
            <Link href={"/"}>Контакты</Link>
          </li>
        </ul>
        <div>
          <Button className="px-6 py-3.5" variant={ButtonVariants.black}>
            Оформить заказ
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
