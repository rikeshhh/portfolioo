"use client";

import React from "react";

import { ContentCardProps } from "@/type/type";

import { PinContainer } from "./ui/3d-pin";

export function AnimatedPinDemo({
  title,
  description,
  subtitle,
  imageUrl,
  projectUrl,
  
}: ContentCardProps) {
  console.log(subtitle);
  return (
    <div className="flex items-center justify-center w-full h-[40rem] container mx-auto">
      <PinContainer title={`Visit ${title}`} href={projectUrl}>
        <div className="flex flex-col w-[300px] md:w-[40rem] h-[25rem] p-4 tracking-tight text-slate-100/50">
          <h3 className="text-base font-bold text-slate-100 pb-2">{title}</h3>

          <p className="text-base font-normal text-slate-500">{description}</p>

          <div className="relative w-full h-64 md:h-auto md:aspect-[16/9] rounded-3xl overflow-hidden mt-4">
            <div
              className="w-full h-full bg-center scale-110 bg-no-repeat bg-contain transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
