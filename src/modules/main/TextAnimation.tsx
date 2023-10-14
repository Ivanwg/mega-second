import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";

const TextAnimation: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".animated-text");
      elements.forEach((el, i) => {
        const containerEl = el as gsap.DOMTarget;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerEl,
            pin: true,
            pinSpacing: false,
            scrub: true,
          },
        });

        tl.to(containerEl, {
          autoAlpha: 1,
        }).to(
          containerEl,
          {
            autoAlpha: i === elements.length - 1 ? 1 : 0,
          },
          0.5,
        );
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="min-h-screen bg-black-1">
      <div className="animated-text flex h-screen items-center justify-center text-center text-7.5xl">
        <span className="text-radial">
          Новаторство <br />
          Независимость
        </span>
      </div>
      <div className="animated-text invisible flex h-screen items-center justify-center text-center text-7.5xl">
        <span className="text-radial">Уникальная разработка Ritm</span>
      </div>
      <div className="animated-text invisible flex h-screen items-center justify-center text-center text-7.5xl">
        <span className="text-radial">
          Открытие новой эпохи
          <br /> в охранных системах
        </span>
      </div>
      <div className="animated-text invisible flex h-screen items-center justify-center text-center text-7.5xl">
        <span className="text-radial">
          Подлинная эволюция
          <br /> на secure-рынке
        </span>
      </div>
      <div className="h-screen"></div>
      <div className="spacer"></div>
    </div>
  );
};

export default TextAnimation;
