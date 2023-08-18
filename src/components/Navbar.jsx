import React, { useEffect, useRef, useState } from "react"
import { logo_black } from "../assets"
import { navLinks } from "../constants"
import { Link } from "react-router-dom"
import Overview from "../sections/overview"

const Navbar = () => {
  const [menuIsClicked, setMenuIsClicked] = useState(false)

  const [isOverlapping, setIsOverlapping] = useState(false)

  const header = useRef(null)
  const overview = useRef(null)

  function checkIfHeaderIsOverlapping() {
    if (header.current && overview.current) {
      const a = header.current.getBoundingClientRect()
      const b = overview.current.getBoundingClientRect()

      if (a.top + a.height > b.top) setIsOverlapping(true)
      else setIsOverlapping(false)
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", checkIfHeaderIsOverlapping)
    }
    watchScroll()

    return () => {
      window.removeEventListener("scroll", checkIfHeaderIsOverlapping)
    }
  }, [])

  return (
    <>
      <nav
        ref={header}
        className="flex justify-around max-sm:justify-between max-sm:px-5 items-center fixed max-sm:backdrop-blur-[1px] max-sm:backdrop-saturate-50 h-auto w-full py-5 top-0 z-50"
      >
        <div className="flex justify-center items-center max-w-7xl">
          <Link
            to="/"
            className="flex items-center"
            onClick={() => {
              window.scrollTo(0, 0)
            }}
          >
            <img
              src={logo_black}
              alt="LOGO"
              className="h-11 w-11 object-contain"
            />
            <h3
              className={`text-[34px] max-md:hidden ${
                isOverlapping
                  ? "--hideOnIntersection_logoName"
                  : "--revealWhileNotIntersecting_logoName"
              }`}
            >
              &nbsp;|&nbsp;RahulSaamanth
            </h3>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <ul
            className={`list-none flex gap-10 text-[22px] items-center justify-center max-[480px]:hidden ${
              isOverlapping
                ? "--hideOnIntersection_navList"
                : "--revealWhileNotIntersecting_navList"
            }`}
          >
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="cursor-pointer active:text-white hover:text-gray-500 hover:underline"
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div
            className={`menu --navIcon relative ${
              isOverlapping ? "visible opacity-100" : ""
            }`}
          >
            <div
              className={`menu-btn${menuIsClicked ? "-close" : ""}`}
              onClick={() => setMenuIsClicked((prevState) => !prevState)}
            >
              <div className="bg-black btn-line"></div>
              <div className="bg-black btn-line"></div>
              <div className="bg-black btn-line"></div>
            </div>
            <div
              className={`${
                !menuIsClicked ? "hidden" : ""
              } absolute -left-[140px] top-0`}
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`cursor-pointer text-[22px] font-bold active:text-white active:underline hover:text-gray-400 ${
                      menuIsClicked ? "--slideInMenu" : ""
                    }`}
                    onClick={() => {
                      setMenuIsClicked((prevState) => !prevState)
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <div ref={overview}>
          <Overview />
        </div>
      </div>
    </>
  )
}

export default Navbar
