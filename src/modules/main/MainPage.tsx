import React, { useEffect, useRef, useState } from "react";

import TextAnimation from "~/modules/main/TextAnimation";
import CardList from "~/temp_folder/CardList";
import cn from "classnames";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import Animation from "../animation/Animation";


const MainPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    if (videoRef.current) {
      const rect = videoRef.current.getBoundingClientRect();
      if (rect.y <= rect.height && rect.y >= 0 && !videoRef.current.ended) {
        videoRef.current
          .play()
          .then(() => undefined)
          .catch(() => undefined);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (titleRef.current && videoRef.current) {
      if (!isVisible && !videoRef.current.ended) {
        videoRef.current.style.marginTop = `-${titleRef.current.offsetHeight}px`;
      }
      if (isVisible) {
        videoRef.current.style.marginTop = `0`;
        videoRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [isVisible]);
  return (
    <div className="flex flex-col">
      <Header />
      <TextAnimation />
      <div ref={mainRef} className="flex flex-col bg-white-2 ">
        <div className="container mx-auto">
          <div className="flex w-full flex-col items-center justify-center gap-12 px-4 py-16 ">
            <div
              ref={titleRef}
              className={cn(
                "invisible w-full pt-[180px] text-center text-7.5xl opacity-0 duration-300 ease-in",
                { ["!visible !opacity-100"]: isVisible },
              )}
            >
              Mega — новая эпоха для лучших
              <br /> охранных компаний
            </div>
            <video
              className="duration-300 ease-in"
              onEnded={() => {
                setIsVisible(true);
              }}
              ref={videoRef}
              muted
              src="/video/MegaOpenFast.mp4"
            />
          </div>
          <div
            className={cn(
              "invisible mb-[100px] mt-[180px] w-full max-w-[1304px] text-7.5xl opacity-0 duration-300 ease-in",
              { ["!visible !opacity-100"]: isVisible },
            )}
          >
            Выбери свою Mega - новая линейка оборудования во вселенной RITM.
          </div>
          <div
            className={cn(
              "invisible grid w-full w-full justify-center gap-5 opacity-0 duration-300 ease-in md:grid-cols-2 lg:grid-cols-4 lg:gap-7",
              { ["!visible !opacity-100"]: isVisible },
            )}
          >
            <CardList />
          </div>
        </div>
      </div>

      <Animation />
      <Footer />
    </div>
  );
};

export default MainPage;
