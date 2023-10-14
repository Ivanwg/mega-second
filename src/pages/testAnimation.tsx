import React from "react";

import TextAnimation from "~/modules/main/TextAnimation";
import VideoAnimation from "~/modules/main/VideoAnimation";
import CardList from "~/temp_folder/CardList";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <TextAnimation />
      <div className="bg-white-2 flex flex-col ">
        <div className="container mx-auto">
          <div className="flex w-full flex-col items-center justify-center gap-12 px-4 py-16 ">
            <div className="mb-[100px] mt-[180px] w-full text-center text-7.5xl">
              Mega — новая эпоха для лучших
              <br /> охранных компаний
            </div>
            <VideoAnimation />
          </div>
          <div className="mb-[100px] mt-[180px] w-full max-w-[1304px] text-7.5xl">
            Выбери свою Mega - новая линейка оборудования во вселенной RITM.
          </div>
          <div className="grid w-full w-full justify-center gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            <CardList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
