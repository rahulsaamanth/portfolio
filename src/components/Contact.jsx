import { useScroll, useTransform, motion } from "framer-motion"
import React, { useRef, useState } from "react"
import emailjs from "emailjs-com"
import CopyToClipboard, { copyToClipboard } from "react-copy-to-clipboard"

const Contact = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 0"],
  })

  const translateYProgress = useTransform(scrollYProgress, [0, 1], [250, -250])

  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [emptySubmit, setEmptySubmit] = useState(false)

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target
    setEmptySubmit(false)
    setForm({
      ...form,
      [name]: value,
    })
  }
  // template_gopckbf
  // service_cnaz7yh
  // odAIKP69MprU8SOuz

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name != "" && form.email != "") {
      setLoading(true)

      emailjs
        .send(
          "service_cnaz7yh",
          "template_gopckbf",
          {
            from_name: form.name,
            to_name: "RahulSaamanth",
            from_email: form.email,
            to_email: "rahulsaamanth@yahoo.com",
            message: form.message,
          },
          "odAIKP69MprU8SOuz"
        )
        .then(
          () => {
            setLoading(false)
            setForm({
              name: "",
              email: "",
              message: "",
            })
          },
          (error) => {
            setLoading(false)
            console.error(error)

            alert("something went wrong")
          }
        )
    } else {
      setEmptySubmit(true)
      setTimeout(() => {
        setEmptySubmit(false)
      }, 2000)
    }
  }

  const [mailCopied, setMailCopied] = useState(false)

  const handleCopiedMailId = () => {
    setMailCopied(true)
    setTimeout(() => {
      setMailCopied(false)
    }, 3000)
  }

  return (
    <div className={`my-48 sm:ml-8 sm:pt-24`} id="contact" ref={containerRef}>
      <div className="h-auto max-sm:px-10 max-md:px-20 max-lg:px-28 max-2xl:px-64 px-96 flex flex-col gap-16 ">
        <div className="max-md:hidden">
          <motion.h1
            style={{ x: translateYProgress }}
            className="text-[72px] max-sm:text-[36px] max-md:text-[52px] max-lg:text-[64px] font-bold"
          >
            Let's Get In Touch&nbsp;...
          </motion.h1>
        </div>
        <h1
          className={`text-[72px] max-sm:text-[36px] max-md:text-[52px] max-lg:text-[64px] font-bold md:hidden`}
        >
          Let's Get In Touch&nbsp;...
        </h1>
        <div className="flex flex-col-reverse 2xl:flex-row gap-10">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col flex-1 gap-8"
          >
            <label className="border-b-2 border-black cursor-text">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="border-none outline-none font-medium w-full"
              />
            </label>
            <label className="border-b-2 border-black cursor-text">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="border-none outline-none font-medium w-full"
              />
            </label>
            <label className="border-b-2 border-black cursor-text">
              <textarea
                rows={5}
                name="message"
                onChange={handleChange}
                value={form.message}
                placeholder="Message"
                className="border-none outline-none font-medium w-full"
              />
            </label>
            <button
              type="submit"
              className={`${emptySubmit && "bg-red-600 hover:bg-red-600"} ${
                loading && "bg-green-600 hover:bg-green-600"
              } btn btn-primary bg-black text-white hover:bg-black/80`}
            >
              {emptySubmit
                ? "HaHa! You can't do that"
                : loading
                ? "Thank you for your time"
                : "submit"}
            </button>
            <div className="flex items-center justify-center space-x-6 text-center">
              <p>profiles:&nbsp;</p>
              <a
                href="https://github.com/rahulsaamanth"
                target="_blank"
                className="underline text-center"
              >
                GitHub<sup>↗</sup>
              </a>
              <a
                href="https://www.linkedin.com/in/rahulsaamanth/"
                target="_blank"
                className="underline text-center"
              >
                LinkedIn<sup>↗</sup>
              </a>
            </div>
            <div className="flex items-center justify-center space-x-6 text-center">
              <p>source code:&nbsp;</p>
              <a
                href="https://github.com/rahulsaamanth/portfolio"
                className="underline text-center"
              >
                here<sup>↗</sup>
              </a>
            </div>
          </form>
          <div className="flex-1 text-[18px]">
            <p>
              If you have a project in mind or are looking for a skilled
              developer to join your team, I'd like to hear more about it. From
              web development to design and everything in between, I'm ready to
              contribute my expertise and passion to help bring your ideas to
              life.
              <br />
              <br />
              As a passed out of 2022, I can promise you two things , I know
              things and I can and will learn faster.
              <br />
              <br />
              <br />
            </p>
            <div className="flex flex-col space-y-4">
              <CopyToClipboard
                text="rahulsaamanth@outlook.com"
                onCopy={handleCopiedMailId}
              >
                <p className="cursor-copy">
                  <span
                    style={{
                      fontSize: "24px",
                    }}
                  >
                    ✉
                  </span>
                  &nbsp;
                  <span className="active:underline sm:hover:font-semibold">
                    rahulsaamanth@outlook.com
                  </span>
                  &nbsp;
                  {mailCopied && (
                    <span className="font-bold">
                      Copied<span className="text-[24px]">✓</span>
                    </span>
                  )}
                </p>
              </CopyToClipboard>
              <p>📞&nbsp;+917993174492</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
