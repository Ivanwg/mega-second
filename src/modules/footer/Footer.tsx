import Link from "next/link";
import Button, { ButtonVariants } from "~/components/ui/Button";

const Footer = () => {
  return (
    <footer className="bg-black-1 p-20 text-white">
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-3.5">
          <div className="text-7xl font-medium leading-[110%]">
            Попробуй прямо сейчас.
            <br />
            Выбери свое решение.
          </div>
          <div className="mt-3.5 text-xl leading-[135%]">
            Оставьте заявку или позвоните, и мы сами всё за вас заполним.
          </div>
        </div>
        <Button
          className="h-[103px] px-20 !text-xl"
          variant={ButtonVariants.white}
        >
          Оформить заказ
        </Button>
      </div>
      <div className="flex items-end justify-between pb-7 pt-16">
        <div className="">
          <ul className="flex gap-9">
            <li className="flex w-[127px] flex-col text-sm leading-[120%] text-gray-4">
              Санкт-Петербург пр. Энергетиков д.30 к.8
            </li>
            <li className="flex flex-col gap-1">
              <span className="block text-sm leading-[120%] text-gray-4">
                Санкт-Петербург
              </span>
              <span className="block text-xl font-medium leading-[140%]">
                +7 812 325-01-02
              </span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="block text-sm leading-[120%] text-gray-4">
                Москва
              </span>
              <span className="block text-xl font-medium leading-[140%]">
                +7 812 325-01-02
              </span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="block text-sm leading-[120%] text-gray-4">
                Алматы
              </span>
              <span className="block text-xl font-medium leading-[140%]">
                +7 812 325-01-02
              </span>
            </li>
          </ul>
        </div>
        <ul className="flex gap-9 text-base text-white">
          <li>
            <Link href={"/"}>Mega</Link>
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
      </div>
      <div className="flex justify-between border-t border-t-white-opacity pt-8 text-base leading-[140%]">
        <div className="opacity-40">
          Разнообразный и богатый опыт говорит нам, что понимание сути
          ресурсосберегающих технологий не даёт нам иного выбора, кроме
          определения
        </div>
        <div className="">© 2022 Компания &quot;Ритм&quot;</div>
      </div>
    </footer>
  );
};

export default Footer;
