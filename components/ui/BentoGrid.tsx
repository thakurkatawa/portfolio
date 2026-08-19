"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "lottie-react";
import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import { motion } from "framer-motion";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  techIcons,
  iconClassName,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  techIcons?: { name: string; icon: string }[];
  iconClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "thakurkatawa@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
      }}
    >
      <div className={`${id === 6 ? "flex justify-center" : ""} h-full`}>
        {/* Main Image */}
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt="Bento item image"
              className={cn(imgClassName, "object-cover object-center")}
              width={500}
              height={500}
            />
          )}
        </div>

        {/* Spare Image */}
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 ? "w-full opacity-80" : ""
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt="Bento spare image"
              className="object-cover object-center w-full h-full"
              width={500}
              height={500}
            />
          )}
        </div>

        {/* Background Gradient */}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" />
          </BackgroundGradientAnimation>
        )}

        {/* Content */}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
            id === 2 ? "justify-start pt-8" : "justify-center"
          )}
        >
          {/* Description */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10 mb-2 text-center">
            {description}
          </div>

          {/* Title */}
          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 mb-4 text-center">
            {title}
          </div>

          {/* Globe */}
          {id === 2 && <GridGlobe />}

          {/* Email / Lottie */}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0 block">
                <Lottie
                  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                  style={{
                    height: 200,
                    width: 400,
                  }}
                />
              </div>

              <MagicButton
                title={
                  copied
                    ? "Email is Copied!"
                    : "Copy my email address"
                }
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}

          {/* Technology Icons */}
          {techIcons && (
            <motion.div
              className="grid grid-cols-3 gap-4 mt-4"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {techIcons.map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center"
                  variants={item}
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    title={tech.name}
                    className={cn(
                      "w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 transition-all duration-300 ease-in-out hover:scale-110",
                      "hover:filter hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]",
                      iconClassName
                    )}
                    width={64}
                    height={64}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* GitHub Stats */}
          {id === 3 && (
            <div className="flex justify-center items-center h-full w-full overflow-hidden p-4">
              <div
                className="relative transition-all duration-300 ease-in-out hover:scale-105"
                style={{
                  borderRadius: "2rem",
                  transition: "all 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 20px 10px rgba(255, 255, 255, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Image
                  src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=thakurkatawa&theme=2077"
                  alt="GitHub Stats for thakurkatawa"
                  className="max-w-full max-h-full object-contain"
                  width={500}
                  height={300}
                  style={{
                    borderRadius: "2rem",
                    filter: "brightness(1)",
                    transition: "all 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "brightness(1.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "brightness(1)";
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};