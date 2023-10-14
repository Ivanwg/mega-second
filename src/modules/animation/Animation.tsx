import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Observer from "gsap/dist/Observer";
import Image from "next/image";

const MegaPower: React.FC = () => {
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

  const rightSideWrapRef = useRef<HTMLDivElement>(null);
  const decisionContentRef = useRef<HTMLDivElement>(null);
  const decisionLetterstRef = useRef<HTMLDivElement>(null);
  const decisionImgRef = useRef<HTMLDivElement>(null);

  const classicContentRef = useRef<HTMLDivElement>(null);
  const classicLetterstRef = useRef<HTMLDivElement>(null);
  const classicImgRef = useRef<HTMLDivElement>(null);

  const elementaryContentRef = useRef<HTMLDivElement>(null);
  const elementaryLetterstRef = useRef<HTMLDivElement>(null);
  const elementaryImgRef = useRef<HTMLDivElement>(null);

  const energyContentRef = useRef<HTMLDivElement>(null);
  const energyLetterstRef = useRef<HTMLDivElement>(null);
  const energyImgRef = useRef<HTMLDivElement>(null);

  const lastBlocktRef = useRef<HTMLDivElement>(null);


  gsap.registerPlugin(ScrollTrigger, Observer);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const flagmanItems = flagmanRef.current ? gsap.utils.toArray(flagmanRef.current.children) : [];
      const beautyItems = gsap.utils.toArray(".js-beauty-item");
      const lastItems = gsap.utils.toArray(".js-last-item");

      const megaTL = gsap.timeline({ 
        paused: true,
      });
      megaTL.to({}, { duration: .4 });
      megaTL.fromTo(titleRef.current, { autoAlpha: 1 }, { autoAlpha: 0, duration: .2 });
      megaTL.fromTo(subtitleRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: .5 });
      megaTL.fromTo(circleRef.current, { autoAlpha: 1, yPercent: 50, y: `${window.innerHeight / 2}`, scale: .7 }, { yPercent: 0, y: 0, scale: 10, duration: 5 }, '-=.7');
      megaTL.fromTo(megaImageRef.current, { yPercent: 0, autoAlpha: 1 }, { yPercent: -40, duration: 5 }, '-=5.7');
      // megaTL.to(subtitleRef.current, { autoAlpha: 0, duration: .5 });
      // megaTL.fromTo(flagmanItems, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, stagger: 1 });

      // megaTL.to(megaImageRef.current, { yPercent: -50, top: '50%', scale: 2, duration: 4 });

      // megaTL.from(flagmanRef.current, { autoAlpha: 1, duration: .0001 }, '-=4');
      // megaTL.to(flagmanItems, { autoAlpha: 0, duration: 1.2 }, '-=4');

      // megaTL.fromTo(filterRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, '-=3');
      // megaTL.fromTo(filterListRef.current, { yPercent: 100 }, { yPercent: 0, duration: 3 }, '-=2');

      megaTL.to({}, { duration: 1 });

      // megaTL.to(megaImageRef.current, { scale: 1, duration: 3 });
      // megaTL.fromTo(blurRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 3 }, '-=3');
      // megaTL.to(filterRef.current, { autoAlpha: 0, duration: .3 }, '-=3');

      // megaTL.fromTo(firstBlurListRef.current, { autoAlpha: 0, yPercent: 20 }, { autoAlpha: 1, yPercent: 0, duration: 3 }, '-=2');

      // megaTL.to({}, { duration: .3 });

      // megaTL.to(firstBlurListRef.current, { autoAlpha: 0, yPercent: 0, duration: .3 });
      // megaTL.fromTo(secondBlurListRef.current, { autoAlpha: 0 }, { autoAlpha: 1, yPercent: 0, duration: 3 }, '-=.3');

      // megaTL.to({}, { duration: .3 });

      // megaTL.to(secondBlurListRef.current, { autoAlpha: 0, duration: .3 });
      // megaTL.fromTo(thirdBlurListRef.current, { autoAlpha: 0 }, { autoAlpha: 1, yPercent: 0, duration: 3 }, '-=.3');

      // megaTL.to({}, { duration: .3 });

      // megaTL.fromTo(beautyWrapRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 2 });
      // megaTL.to(megaImageRef.current, { scale: 1.2, duration: 2 }, '-=2');
      // megaTL.to(blurRef.current, { autoAlpha: 0, duration: 1 }, '-=.7');
      // megaTL.fromTo(beautyItems, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, stagger: 1 });


      // megaTL.to({}, { duration: 1 });
      // megaTL.to(beautyWrapRef.current, { autoAlpha: 0, duration: 1 }, '-=1');
      // megaTL.to(megaImageRef.current, { left: '75%', scale: .9, duration: 2 }, '-=1');
      // megaTL.fromTo(rightSideWrapRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 2 }, '-=1.5');
      // megaTL.fromTo(decisionLetterstRef.current, { autoAlpha: 0, yPercent: 40 }, { autoAlpha: 1, yPercent: 0, duration: 2 }, '-=1');
      // megaTL.fromTo(decisionImgRef.current, { autoAlpha: 0, xPercent: 100 }, { autoAlpha: 1, xPercent: 0, duration: 2 }, '-=1');

      // megaTL.to({}, { duration: .3 });

      // megaTL.to(decisionContentRef.current, { autoAlpha: 0, duration: .5 });
      // megaTL.to(classicContentRef.current, { autoAlpha: 1, duration: .5 }, '-=.5');
      // megaTL.fromTo(classicLetterstRef.current, { autoAlpha: 0, yPercent: 40 }, { autoAlpha: 1, yPercent: 0, duration: 2 }, '-=1');
      // megaTL.fromTo(classicImgRef.current, { autoAlpha: 0, xPercent: 100 }, { autoAlpha: 1, xPercent: 0, duration: 2 }, '-=1');

      // megaTL.to({}, { duration: .3 });

      // megaTL.to(classicContentRef.current, { autoAlpha: 0, duration: .5 });
      // megaTL.to(elementaryContentRef.current, { autoAlpha: 1, duration: .5 }, '-=.5');
      // megaTL.fromTo(elementaryLetterstRef.current, { autoAlpha: 0, yPercent: 40 }, { autoAlpha: 1, yPercent: 0, duration: 2 }, '-=1');
      // megaTL.fromTo(elementaryImgRef.current, { autoAlpha: 0, xPercent: 100 }, { autoAlpha: 1, xPercent: 0, duration: 2 }, '-=1');

      // megaTL.to({}, { duration: .3 });

      // megaTL.to(elementaryContentRef.current, { autoAlpha: 0, duration: .5 });
      // megaTL.to(energyContentRef.current, { autoAlpha: 1, duration: .5 }, '-=.5');
      // megaTL.fromTo(energyLetterstRef.current, { autoAlpha: 0, yPercent: 40 }, { autoAlpha: 1, yPercent: 0, duration: 2 }, '-=1');
      // megaTL.fromTo(energyImgRef.current, { autoAlpha: 0, xPercent: 100 }, { autoAlpha: 1, xPercent: 0, duration: 2 }, '-=1');

      // megaTL.to({}, { duration: .3 });

      // megaTL.to(energyContentRef.current, { autoAlpha: 0, duration: .5 });
      // megaTL.fromTo(lastBlocktRef.current, {autoAlpha: 0}, {autoAlpha: 1, duration: .5}, '-=.5');
      // megaTL.to(megaImageRef.current, { left: '50%', scale: 1, duration: 2 }, '-=.5');
      // megaTL.fromTo(lastItems, { autoAlpha: 0, y: 100 }, { autoAlpha: 1, y: 0, duration: 1, stagger: 1 });

      // megaTL.to({}, { duration: 1 });

      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        // end: 'bottom bottom',
        end: `top top-=${window.innerHeight * 3}px`,
        animation: megaTL,
        scrub: 1,
        markers: false,
        // pin: pinnedRef.current,
        pinSpacing: false,
      });


      let animating: boolean;
      /* eslint-disable */
      let currentIndex = 0;

      function gotoSection(index: number, direction: number) {
        console.log('ddd')
        return;
      }

      Observer.create({
        type: "wheel,touch,pointer,scroll",
        preventDefault: true,
        wheelSpeed: -1,
        onUp: () => {
          if (st.isActive) return;
          // console.log("down");
          // if (animating) return;
          gotoSection(currentIndex + 1, +1);
        },
        onDown: () => {
          if (st.isActive) return;
          // console.log("up");
          // if (animating) return;
          gotoSection(currentIndex - 1, -1);
        },
        tolerance: 10,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    // если анимация выполняется слишком быстро или медленно, отрегулируйте минимальную высоту секции
    <section className="min-h-[800vh] bg-white-2" ref={sectionRef}>
      <div className="sticky top-0 flex h-[100vh] min-h-[100vh] overflow-clip bg-white" ref={pinnedRef}>
        <div
          ref={circleRef}
          className="absolute bottom-0 left-0 top-0 right-0 cir z-[-1] m-auto flex h-[20rem] w-[20rem] items-center justify-center rounded-full bg-black text-7.5xl select-none invisible"
        ></div>
        <div
          ref={titleRef}
          className="absolute bottom-0 left-0 top-0 right-0 flex items-center justify-center text-17xl text-black text-center"
        >
          MEGAМОЩЬ
        </div>
        <div
          ref={subtitleRef}
          className="absolute bottom-0 left-0 top-0 right-0 flex items-center justify-center text-7.5xl text-center text-white mix-blend-difference"
        >
          в миникорпусе
        </div>
        <div ref={flagmanRef} className="absolute left-0 top-0 h-[100vh] z-[6] text-white invisible">
          <h2>
            Флагман линейки — <br />
            там где нужна гибкость
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsa nobis ad, magnam, ab, eum excepturi maxime fuga delectus a totam.</p>
          <div>lG LTE</div>
          <div>Тут иконки</div>
        </div>
        <div
          ref={megaImageRef}
          className="absolute top-[100%] left-[50%] -translate-x-2/4 z-[5] m-x-auto h-screen w-screen invisible"
        >
          <Image
            layout="fill"
            objectFit="contain"
            src={"/gsapobserver/NewMega.png"}
            alt="Mega_1"
          />
        </div>

        <div ref={filterRef} className="z-[5] absolute bottom-0 left-0 top-0 right-0 invisible flex items-end backdrop-brightness-75">
          <ul className="flex pb-10 justify-around w-[100%]" ref={filterListRef}>
            {
              [1, 2, 3, 4, 5].map((index) =>
                <li className="bg-blue-900 h-[80px] p-20 text-white" key={index}>{index + ' TEXT BLOCK'}</li>
              )
            }
          </ul>
        </div>

        <div ref={blurRef} className="z-[5] absolute bottom-0 left-0 top-0 right-0 invisible backdrop-blur-sm">
          <ul className="absolute absolute bottom-0 left-0 top-0 right-0 flex pb-10 items-center invisible justify-around w-[100%]" ref={firstBlurListRef}>
            {
              [1, 2, 3].map((index) =>
                <li className="bg-blue-900 h-[80px] p-20 text-white" key={index}>элемент 1 списка</li>
              )
            }
          </ul>
          <ul className="absolute absolute bottom-0 left-0 top-0 right-0 flex pb-10 items-center invisible justify-around w-[100%]" ref={secondBlurListRef}>
            {
              [1, 2, 3].map((index) =>
                <li className="bg-red-900 h-[80px] p-20 text-white" key={index}>элемент 2 списка</li>
              )
            }
          </ul>
          <ul className="absolute absolute bottom-0 left-0 top-0 right-0 flex pb-10 items-center invisible justify-around w-[100%]" ref={thirdBlurListRef}>
            {
              [1, 2, 3].map((index) =>
                <li className="bg-blue-900 h-[80px] p-20 text-white" key={index}>элемент 3 списка</li>
              )
            }
          </ul>
        </div>

        <div className="z-[5] absolute bottom-0 left-0 top-0 right-0 flex items-center justify-center invisible backdrop-brightness-50" ref={beautyWrapRef}>
          <h2 className="text-white js-beauty-item">
            Красивый заголовок
          </h2>
          <p className="absolute bottom-5 m-x-auto text-white js-beauty-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto corrupti aspernatur mollitia omnis? Voluptate
          </p>
        </div>

        <div className="z-[5] absolute bottom-0 left-0 top-0 right-0 flex items-center justify-center invisible backdrop-brightness-75" ref={rightSideWrapRef}>
          <div className="z-[5] absolute bottom-0 left-0 top-0 right-0 flex justify-between" ref={decisionContentRef}>
            <div className="w-[50vw] text-white" ref={decisionLetterstRef}>
              Модуль расширения радиоканала 868
              Решение, не имеющее аналогов. Стены — для вас не помеха.
              Расстояния - только для преодоления. Мы сделали возможной передачу сигнала датчик-прибор на расстоянии 5000 м. Без ретрансляторов.

              5-6 капитальных перекрытий - именно такая пробиваемость радиоканала.
            </div>
            <div className="relative h-[100vh] w-[50vw]" ref={decisionImgRef}>
              <Image
                layout="fill"
                objectFit="contain"
                src={"/gsapobserver/ext1-1600px.png"}
                alt="Mega_1"
              />
            </div>
          </div>
        </div>

        <div className="z-[5] absolute bottom-0 left-0 top-0 right-0 flex justify-between invisible" ref={classicContentRef}>
          <div className="w-[50vw] text-white" ref={classicLetterstRef}>
            Классика, как вы
            и хотели. Когда нет смысла платить
            за лишнее. Классика, как вы
            и хотели. Когда нет смысла платить
            за лишнее. Классика, как вы
            и хотели. Когда нет смысла платить
            за лишнее.
          </div>
          <div className="relative h-[100vh] w-[50vw]" ref={classicImgRef}>
            <Image
              layout="fill"
              objectFit="contain"
              src={"/gsapobserver/ext2-1600px.png"}
              alt="Mega_1"
            />
          </div>
        </div>

        <div className="z-[5] absolute bottom-0 left-0 top-0 right-0 flex justify-between invisible" ref={elementaryContentRef}>
          <div className="w-[50vw] text-white" ref={elementaryLetterstRef}>
            Несмотря на наличие штатного Ethernet,
            не ограничивайте себя.  Несмотря на наличие штатного Ethernet,
            не ограничивайте себя. Несмотря на наличие штатного Ethernet,
            не ограничивайте себя.
          </div>
          <div className="relative h-[100vh] w-[50vw]" ref={elementaryImgRef}>
            <Image
              layout="fill"
              objectFit="contain"
              src={"/gsapobserver/ext3-1600px.png"}
              alt="Mega_1"
            />
          </div>
        </div>

        <div className="z-[5] absolute bottom-0 left-0 top-0 right-0 flex justify-between invisible" ref={energyContentRef}>
          <div className="w-[50vw] text-white" ref={energyLetterstRef}>
            Казалось бы, причём тут счетчики электроэнергии? Казалось бы, причём тут счетчики электроэнергии? Казалось бы, причём тут счетчики электроэнергии?
          </div>
          <div className="relative h-[100vh] w-[50vw]" ref={energyImgRef}>
            <Image
              layout="fill"
              objectFit="contain"
              src={"/gsapobserver/ext4-1600px.png"}
              alt="Mega_1"
            />
          </div>
        </div>


        <div className="z-[5] absolute bottom-0 left-0 top-0 right-0 flex items-center justify-center invisible" ref={lastBlocktRef}>
          <h2 className="text-white js-last-item">
            А ещё, мы сразу комплектуем прибор надежным блоком питания
          </h2>
          <p className="absolute bottom-5 m-x-auto text-white js-last-item">
            Прошел все необходимые испытания при сертификации CE
          </p>
        </div>

      </div>

    </section>
  );
};

export default MegaPower;
