import React, { useEffect, useRef, useState } from "react"
import Numbers from "../sections/Numbers"
import WhatDoIOffer from "../sections/WhatDoIOffer"

const About = () => {
  return (
    <div className="my-48 sm:ml-8 sm:pt-24" id="about">
      <div className="h-auto max-sm:px-10 max-md:px-20 max-lg:px-28 max-2xl:px-64 px-96 z-10 gap-24 flex max-xl:flex-col">
        <h3 className={`text-[42px] font-bold`}>Briefing me...</h3>
        <p className="text-[18px]  md:flex-1">
          I like to introduce myself as a software engineer, I thrive on
          crafting seamless and visually appealing websites and Android
          applications that meets clients needs. My journey in this world began
          4 years ago, and since then I've been trying to stay up-to-date with
          latest technologies and trends in ever-evolving tech landscape.
          <br />
          <br />
          <br />I strongly believe the line quoted by John Lennon, that
          "Everything will be Good in the end , if it's not good , it's not the
          End."
        </p>
      </div>
      <section className="max-md:hidden">
        <Numbers />
      </section>
      <section className="md:hidden my-48 sm:pt-24 flex flex-col gap-20">
        <div className="w-full h-auto overflow-hidden relative flex justify-center items-center flex-col">
          <h1 className="text-[64px] max-sm:text-[28px] max-md:text-[46px] max-lg:text-[58px] drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)]">
            Years of Expertise
          </h1>
          <h1 className="font-bold text-[120px] max-sm:text-[64px] max-md:text-[72px] max-lg:text-[98px]">
            02
          </h1>
        </div>
        <div className="w-full h-auto overflow-hidden relative flex justify-center items-center flex-col">
          <h1 className="text-[64px] max-sm:text-[28px] max-md:text-[46px] max-lg:text-[58px] drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)]">
            No. of Projects
          </h1>
          <h1 className="font-bold text-[120px] max-sm:text-[64px] max-md:text-[72px] max-lg:text-[98px]">
            03
          </h1>
        </div>
        <div className="w-full h-auto overflow-hidden relative flex justify-center items-center flex-col">
          <h1 className="text-[64px] max-sm:text-[28px] max-md:text-[46px] max-lg:text-[58px] drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)]">
            🤍 for W. development
          </h1>
          <h1 className="font-bold text-[120px] max-sm:text-[64px] max-md:text-[72px] max-lg:text-[98px]">
            101
          </h1>
        </div>
      </section>
      <WhatDoIOffer />
    </div>
  )
}

export default About
