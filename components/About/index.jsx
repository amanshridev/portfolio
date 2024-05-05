import React from 'react';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Navbar from '../NavBar';
import { ReactTyped } from "react-typed";

const About = () => {
  return (
    <section className="min-h-screen">
          <Navbar />
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Aman Shrivastav
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
             I am a <ReactTyped className='font-semibold  text-teal-600' strings={["Front End Developer", "Web Designer", "Ui Designer"]} typeSpeed={80} backSpeed={50} loop />
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
          </div>
        </section>
  )
}

export default About