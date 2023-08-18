import React from "react"

const Footer = () => {
  return (
    <div className="sm:text-[18px] text-16px pb-10 flex flex-col justify-center items-center gap-2">
      <h3 className="text-center">
        Crafted with&nbsp;
        <a href="https://react.dev/" className="underline">
          React
        </a>
        ,&nbsp;
        <a href="https://www.framer.com/motion/" className="underline">
          framer-motion
        </a>
        , &nbsp;
        <a href="https://tailwindcss.com/" className="underline">
          Tailwindcss
        </a>
        &nbsp; and 🖤 By Rahul Saamanth Perna
      </h3>
      <h3 className="text-center">
        Credits for Sanjoo and, finally Love for Kathyaini Perna
      </h3>
    </div>
  )
}

export default Footer
