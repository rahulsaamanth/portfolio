import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const Numbers = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  })

  const translateYProgress = useTransform(scrollYProgress, [0, 1], [300, -300])

  return (
    <div ref={ref}>
      <div className="h-[500px] overflow-hidden relative flex justify-center items-center flex-col">
        <div className="flex">
          <h1 className="relative z-20 text-[64px] max-sm:text-[34px] max-md:text-[46px] max-lg:text-[58px] drop-shadow-[0_35px_35px_rgba(255,255,255,0.2)]">
            Years of Expertise
          </h1>
        </div>
        <motion.h1
          style={{ y: translateYProgress }}
          className="absolute z-10 font-bold text-[120px] max-sm:text-[64px] max-md:text-[72px] max-lg:text-[98px] "
        >
          02&nbsp;
        </motion.h1>
      </div>
      <div className="w-full h-[500px] overflow-hidden relative flex justify-center items-center flex-col">
        <div className="flex">
          <h1 className="relative z-20  text-[64px] max-sm:text-[34px] max-md:text-[46px] max-lg:text-[58px] drop-shadow-[0_35px_35px_rgba(255,255,255,0.2)]">
            No. of Projects
          </h1>
        </div>
        <motion.h1
          style={{ y: translateYProgress }}
          className="absolute z-10 font-bold text-[120px] max-sm:text-[64px] max-md:text-[72px] max-lg:text-[98px] "
        >
          10+
        </motion.h1>
      </div>
      <div className="w-full h-[500px] overflow-hidden relative flex justify-center items-center flex-col">
        <div className="flex">
          <h1 className="relative z-20 text-[64px] max-sm:text-[34px] max-md:text-[46px] max-lg:text-[58px] drop-shadow-[0_35px_35px_rgba(255,255,255,0.2)]">
            🤍 for w. development
          </h1>
        </div>
        <motion.h1
          style={{ y: translateYProgress }}
          className="absolute z-10 font-bold text-[120px] max-sm:text-[64px] max-md:text-[72px] max-lg:text-[98px] "
        >
          101%
        </motion.h1>
      </div>
    </div>
  )
}

export default Numbers
