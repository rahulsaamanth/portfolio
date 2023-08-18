import React, { useRef } from "react"
import { useInView } from "framer-motion"

const overview = () => {
  const ref = useRef(null)

  const isInView = useInView(ref, { once: true })

  return (
    <>
      <section
        ref={ref}
        style={{
          transform: isInView ? "" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.6s cubic-bezier(0.17,0.55,0.55,1) 0.5s",
        }}
      >
        <div className="flex my-48 sm:ml-8">
          <div
            className={`w-auto h-auto max-sm:px-10 max-md:px-20 max-lg:px-28 max-2xl:px-64 px-96 z-10`}
          >
            <h1 className="max-sm:text-[36px] max-md:text-[50px] max-2xl:text-[60px] text-[80px]">
              Hey You!,
              <br />
              I'm Rahul Saamanth.
              <br />A Passionate web ≥ Android developer with a flair for
              crafting user-friendly digital solutions. And I love to
              communicate through my work.
            </h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default overview
