import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const WhatDoIOffer = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 0"],
  })

  const translateYProgress = useTransform(scrollYProgress, [0, 1], [250, -250])

  return (
    <div
      ref={containerRef}
      className="h-auto max-sm:px-10 max-md:px-20 max-lg:px-28 max-2xl:px-64 px-96 flex flex-col gap-16 overflow-hidden"
    >
      <div className="max-md:hidden">
        <motion.h1
          style={{ x: translateYProgress }}
          className="text-[72px] max-sm:text-[36px] max-md:text-[52px] max-lg:text-[64px] font-bold"
        >
          What Do I Offer&nbsp;...
        </motion.h1>
      </div>
      <h1
        className={`text-[72px] max-sm:text-[36px] max-md:text-[52px] max-lg:text-[64px] font-bold md:hidden`}
      >
        What Do I offer&nbsp;...
      </h1>
      <div className="flex flex-col md:grid md:grid-rows-2 md:grid-flow-col gap-8 text-[18px]">
        <div className="flex flex-col gap-8 justify-center">
          <h4 className="text-[28px] font-bold">Front-End development</h4>
          <p className="leading-8">
            As a web developer, I have expertise in creating engaging user
            interfaces. And I enjoy tackling complex challenges, whether it's
            optimizing the website performance or responsive designs.
          </p>
        </div>
        <div className="flex flex-col gap-8 justify-center">
          <h4 className="text-[28px] font-bold">Back-End Communication</h4>
          <p className="leading-8">
            Here, am mainly focus on creating robust server-side solutions to
            power web applications. And GraphQL is the best choice for this ,
            cuz it provides efficient communication with databases.
          </p>
        </div>
        <div className="flex flex-col gap-8 justify-center">
          <h4 className="text-[28px] font-bold">
            User Experience(UX) and Design
          </h4>
          <p className="leading-8">
            Creating and crafting intuitive user interfaces and user experiences
            that elevate digital products needs expertise in frameworks like
            framer-motion, tailwind css. Don't worry I got this.
          </p>
        </div>
        <div className="flex flex-col gap-8 justify-center">
          <h4 className="text-[28px] font-bold">
            Mobile Application Development
          </h4>
          <p className="leading-8">
            Coming to MAD , I have recently experimenting with it, that's why
            you see a little "less than" symbol in the intro. Using React-Native
            and I gotta say am pretty good at it. And also it provides
            cross-platform support.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhatDoIOffer
