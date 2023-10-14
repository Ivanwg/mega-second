import React, { useEffect, useState, useRef } from "react";

import { useScroll } from "~/hooks/useScroll";
import { FRAME_COUNT, IMG_PATH, initialFrame } from "~/utils/animation";

const Home: React.FC = () => {
  const [frameIndex, setFrameIndex] = useState(0);
  const { scrollFraction } = useScroll();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const allImages = Array.from(
      new Array(FRAME_COUNT),
      (_, i) => `${IMG_PATH}${i.toString().padStart(3, "0")}.png`,
    );
    allImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const drawImage = (image: HTMLImageElement) => {
    canvasCtxRef.current!.drawImage(image, 0, 0);
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvasCtxRef.current = canvas.getContext("2d");

      const initialImg = new Image();
      initialImg.src = initialFrame;
      initialImg.onload = () => drawImage(initialImg);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const updateImage = (index: number) => {
      const newImg = new Image();
      newImg.src = `${IMG_PATH}${index.toString().padStart(3, "0")}.png`;
      newImg.onload = () => drawImage(newImg);
    };

    updateImage(frameIndex);
  }, [frameIndex]);

  useEffect(() => {
    const newFrameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.ceil(scrollFraction * FRAME_COUNT),
    );
    setFrameIndex(newFrameIndex);
  }, [scrollFraction]);

  return (
    <div className="image-sequence-container-hero">
      <div className="image-sequence-container-inner-hero">
        <canvas width={1920} height={1080} ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default Home;
