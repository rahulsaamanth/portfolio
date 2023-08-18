import { RedStore, Deliveroo, WeatherReport } from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

export const projects = [
  {
    id: 1,
    url: Deliveroo,
    title: "Deliveroo",
    tagline: "Mobile Application",
    description:
      "It's a food delivery platform that connects users with a wide range of restaurants and eateries in their local area. The app provides a convenient and user-friendly interface for customers to browse menus, place orders , etc in real-time.",
    tags: ["React-Native", "Navigation", "Redux", "GroQ", "Sanity-CMS"],
    link: "https://github.com/rahulsaamanth/deliveroo",
  },
  {
    id: 2,
    url: WeatherReport,
    title: "Weather Report",
    description:
      "An Android application that lets you access how the weather all around the world, including timings and future predictions. And interprets hourly report every day.",
    tagline: "Android Application",
    tags: ["Android", "Android Studio", "Java", "Open API"],
    link: "https://github.com/rahulsaamanth/WeatherReport",
  },
  {
    id: 3,
    url: RedStore,
    title: "RedStore",
    tagline: "Web Application",
    description:
      "An E-commerce Website that provides online shopping of clothes and ornaments. With a basic simple design, it's very easy to interact and surf around in.",
    tags: ["HTML", "Bootstrap", "CSS", "JavaScript"],
    link: "https://github.com/rahulsaamanth/RedStore",
  },
]
