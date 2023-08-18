import { useEffect, useRef } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {
  window.addEventListener("blur", () => {
    document.title = "Am I Boring You ?"
  })
  window.addEventListener("focus", () => {
    document.title = "RahulSaamanth | Web Dev."
  })

  useEffect(() => {
    window.history.scrollRestoration = "manual"
  }, [])

  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
