import { useScroll, useTransform, motion } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"
import Modal from "../sections/ProjectModal"
import { projects } from "../constants"

const ProjectCard = ({ setSelected, project }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <div key={project.id} className="flex flex-col justify-center gap-10">
        <motion.h3
          whileHover={{
            scale: 1.025,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => {
            setSelected(project)
          }}
          className="rounded-lg font-bold text-[28px] sm:text-[36px] cursor-pointer underline hover:no-underline underline-offset-2 w-fit"
        >
          {project.title}&nbsp;<sup>↗</sup>
        </motion.h3>
        <p className="leading-8 text-[18px]">{project.description}</p>
      </div>
    </div>
  )
}

const Projects = () => {
  const [selected, setSelected] = useState(null)

  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 0"],
  })

  const translateYProgress = useTransform(scrollYProgress, [0, 1], [-250, 250])

  return (
    <div ref={containerRef} id="projects" className="my-48 sm:ml-8 sm:pt-24">
      <div className="h-auto max-sm:px-10 max-md:px-20 max-lg:px-28 max-2xl:px-64 px-96 flex flex-col gap-16">
        <div className="max-md:hidden">
          <motion.h1
            style={{ x: translateYProgress }}
            className="text-[72px] max-sm:text-[36px] max-md:text-[52px] max-lg:text-[64px] font-bold"
          >
            My Code Chronicles&nbsp;...
          </motion.h1>
        </div>
        <h1
          className={`text-[72px] max-sm:text-[36px] max-md:text-[52px] max-lg:text-[64px] font-bold md:hidden`}
        >
          My Code Chronicles&nbsp;...
        </h1>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            setSelected={setSelected}
            project={project}
          />
        ))}

        <Modal selected={selected} setSelected={setSelected} />
      </div>
    </div>
  )
}

export default Projects
