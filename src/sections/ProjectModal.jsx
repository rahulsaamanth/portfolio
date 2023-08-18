import React, { useState } from "react"
import { motion } from "framer-motion"

const ProjectModal = ({ selected, setSelected }) => {
  const hiddenMask = `repeating-linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`
  const visibleMask = `repeating-linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`

  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  if (!selected) {
    return <></>
  }

  return (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0 bg-black/50 z-50 cursor-pointer overflow-y-scroll"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[700px] mx-auto my-8 px-8 cursor-default"
      >
        <motion.div
          initial={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
          animate={
            isLoaded &&
            isInView && { WebkitMaskImage: visibleMask, maskImage: visibleMask }
          }
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          <img src={selected.url} onLoad={() => setIsLoaded(true)} />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="bg-slate-100 p-4"
        >
          <h3 className="text-2xl font-bold mb-2">
            {selected.title} - {selected.tagline}
          </h3>
          {selected.tags.map((tag) => (
            <div
              className="badge bg-base-300 border-none text-zinc-600 mr-1 mb-1"
              key={tag}
            >
              {tag}
            </div>
          ))}
          <button
            onClick={() => setSelected(null)}
            className="btn btn-block mt-2"
            style={{ textTransform: "none", border: "1px solid black" }}
          >
            Exit
          </button>
          <a href={selected.link} target="_blank">
            <button
              style={{ textTransform: "none" }}
              className="btn bg-black btn-block my-4 text-white"
            >
              Github
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectModal
