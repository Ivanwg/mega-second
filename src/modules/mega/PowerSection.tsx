import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import DualSimIcon from "~/assets/svg/DualSimIcon";
import SoftwareIcon from "~/assets/svg/SoftwareIcon";
import SecurityRoundedIcon from "~/assets/svg/SecurityRoundedIcon";
import EthernetIcon from "~/assets/svg/EthernetIcon";
import SensorIcon from "~/assets/svg/SensorIcon";

const PowerSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const flagmanRef = useRef<HTMLDivElement>(null);
  const megaImageRef = useRef<HTMLDivElement>(null);

  const filterRef = useRef<HTMLDivElement>(null);
  const filterListRef = useRef<HTMLUListElement>(null);
  const blurRef = useRef<HTMLDivElement>(null);
  const firstBlurListRef = useRef<HTMLUListElement>(null);
  const secondBlurListRef = useRef<HTMLUListElement>(null);
  const thirdBlurListRef = useRef<HTMLUListElement>(null);

  const beautyWrapRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const flagmanItems = gsap.utils.toArray(".js-megaPower-flagman-item");
      const beautyItems = gsap.utils.toArray(".js-beauty-item");

      const megaTL = gsap.timeline({ paused: true });
      megaTL.fromTo(titleRef.current, {}, { duration: 0.3 });
      megaTL.fromTo(
        titleRef.current,
        { autoAlpha: 1 },
        { autoAlpha: 0, duration: 0.2 },
      );
      megaTL.fromTo(
        subtitleRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.5 },
      );
      megaTL.fromTo(
        circleRef.current,
        { yPercent: 50, y: `${window.innerHeight / 2}`, scale: 0.7 },
        { yPercent: 0, y: 0, scale: 10, duration: 6 },
        "-=.7",
      );
      megaTL.fromTo(
        megaImageRef.current,
        { yPercent: 0, autoAlpha: 1 },
        { yPercent: -40, duration: 5 },
        "-=5.7",
      );
      megaTL.to(subtitleRef.current, { autoAlpha: 0, duration: 0.5 });
      megaTL.fromTo(
        flagmanItems,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 1, stagger: 1 },
      );

      megaTL.to(megaImageRef.current, {
        yPercent: -50,
        top: "50%",
        scale: 2,
        duration: 1,
      });
      megaTL.to(flagmanItems, { autoAlpha: 0, duration: 0.5 }, "-=1");

      megaTL.fromTo(
        filterRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 1 },
        "-=.9",
      );
      megaTL.fromTo(
        filterListRef.current,
        { yPercent: 100 },
        { yPercent: 0, duration: 1 },
        "-=.5",
      );
      // '-=.4
      megaTL.fromTo(titleRef.current, {}, { duration: 0.3 });

      megaTL.to(megaImageRef.current, { scale: 1, duration: 1 });
      megaTL.fromTo(
        blurRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 1 },
        "-=1",
      );
      megaTL.to(filterRef.current, { autoAlpha: 0, duration: 0.3 }, "-=1");

      megaTL.fromTo(
        firstBlurListRef.current,
        { autoAlpha: 0, yPercent: 20 },
        { autoAlpha: 1, yPercent: 0, duration: 1 },
        "-=.9",
      );
      megaTL.to(firstBlurListRef.current, {
        autoAlpha: 0,
        yPercent: 0,
        duration: 0.3,
      });
      megaTL.fromTo(
        secondBlurListRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, yPercent: 0, duration: 1 },
        "-=.1",
      );
      megaTL.to(secondBlurListRef.current, { autoAlpha: 0, duration: 0.3 });
      megaTL.fromTo(
        thirdBlurListRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, yPercent: 0, duration: 1 },
        "-=.1",
      );

      // megaTL.fromTo(titleRef.current, {}, {duration: .3});

      megaTL.fromTo(
        beautyWrapRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 1 },
      );
      megaTL.to(megaImageRef.current, { scale: 1.2, duration: 1 }, "-=1");
      megaTL.to(blurRef.current, { autoAlpha: 0, duration: 0.7 }, "-=.7");
      megaTL.fromTo(
        beautyItems,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 1, stagger: 1 },
      );

      megaTL.fromTo(titleRef.current, {}, { duration: 0.3 });
      console.log(beautyItems);

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        animation: megaTL,
        scrub: 1,
        markers: false,
        // pin: pinnedRef.current,
        pinSpacing: false,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    // если анимация выполняется слишком быстро или медленно, отрегулируйте минимальную высоту секции
    <section className="min-h-[600vh] bg-white-2" ref={sectionRef}>
      <div
        className="sticky top-0 flex h-[100vh] min-h-[100vh] overflow-clip bg-white"
        ref={pinnedRef}
      >
        <div
          ref={circleRef}
          className="cir absolute bottom-0 left-0 right-0 top-0 z-[-1] m-auto flex h-[20rem] w-[20rem] select-none items-center justify-center rounded-full bg-black-1 text-7.5xl"
        ></div>
        <div
          ref={titleRef}
          className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center text-center text-17xl text-black"
        >
          MEGAМОЩЬ
        </div>
        <div
          ref={subtitleRef}
          className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center text-center text-7.5xl text-white mix-blend-difference"
        >
          в миникорпусе
        </div>
        <div
          ref={flagmanRef}
          className="absolute left-0 top-0 z-[6] flex h-[100vh] h-[100vh] w-full flex-col items-center justify-center text-white"
        >
          <h2 className="js-megaPower-flagman-item text-center text-7.7xl text-white ">
            Флагман линейки — <br />
            там где нужна гибкость
          </h2>
          <p className="js-megaPower-flagman-item mb-16 block pt-8 text-sm font-normal text-white">
            Обеспечивает конфигурацию под любую задачу.
          </p>
        </div>
        <div
          ref={megaImageRef}
          className="m-x-auto invisible absolute left-[50%] top-[100%] z-[5] h-screen w-screen -translate-x-2/4"
        >
          <Image
            layout="fill"
            objectFit="contain"
            src={"/MegaDark.png"}
            alt="Mega_1"
          />
        </div>

        <div
          ref={filterRef}
          className="invisible absolute bottom-0 left-0 right-0 top-0 z-[5] flex items-end backdrop-brightness-75"
        >
          <ul
            className="flex w-[100%] justify-around pb-10"
            ref={filterListRef}
          >
            {/* {[1, 2, 3, 4, 5].map((index) => (
              <li className="h-[80px] bg-blue-900 p-20 text-white" key={index}>
                {index + " TEXT BLOCK"}
              </li>
            ))} */}
          </ul>
        </div>

        <div
          ref={blurRef}
          className="invisible absolute bottom-0 left-0 right-0 top-0 z-[5] backdrop-blur-sm"
        >
          <ul
            className="invisible absolute absolute bottom-0 left-0 right-0 top-0 flex w-[100%] items-center justify-around pb-10"
            ref={firstBlurListRef}
          ></ul>
          <ul
            className="invisible absolute absolute bottom-0 left-0 right-0 top-0 flex w-[100%] items-center justify-center pb-10"
            ref={secondBlurListRef}
          >
            <li className="w-max-[250px] flex flex-col px-5 text-center text-white">
              <DualSimIcon />
              <div className="mt-7">
                2 SIM карты
                <br />
                2G / LTE
              </div>
            </li>
            <li className="flex max-w-[250px] flex-col items-center justify-center px-5 text-center text-white">
              <SoftwareIcon />
              <div className="mt-7">
                Единое ПО конфигурации для всей линейки Mega
              </div>
            </li>
            <li className="flex max-w-[250px] flex-col items-center justify-center px-5 text-center text-white">
              <SecurityRoundedIcon />
              <div className="mt-7">16 проводных охранных шлейфов</div>
            </li>
            <li className="flex max-w-[250px] flex-col items-center justify-center px-5 text-center text-white">
              <EthernetIcon />
              <div className="mt-7">
                Ethernet, WiFi
                <br />
                &nbsp;
              </div>
            </li>
            <li className="flex max-w-[250px] flex-col items-center justify-center px-5 text-center text-white">
              <SensorIcon />
              <div className="mt-7">
                Подключение 64 датчиков на частоте 868 МГц
              </div>
            </li>
          </ul>
          <ul
            className="invisible absolute absolute bottom-0 left-0 right-0 top-0 flex w-[100%] items-center justify-around pb-10"
            ref={thirdBlurListRef}
          >
            {[1, 2, 3].map((index) => (
              <li className="h-[80px] bg-blue-900 p-20 text-white" key={index}>
                элемент 3 списка
              </li>
            ))}
          </ul>
        </div>

        <div
          className="invisible absolute bottom-0 left-0 right-0 top-0 z-[5] flex items-center justify-center backdrop-brightness-50"
          ref={beautyWrapRef}
        >
          <h2 className="js-beauty-item text-center text-7.5xl text-white">
            MEGAмодуль -{" "}
            <span className="text-light-blue">
              всего одно <br /> движение
            </span>{" "}
            для сложных
            <br /> решений
          </h2>
        </div>
      </div>
    </section>
  );
};

export default PowerSection;
