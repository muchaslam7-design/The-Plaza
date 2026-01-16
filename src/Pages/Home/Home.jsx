import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  return (
    <div>
      <section className="relative w-full h-screen bg-purple-600 flex items-center justify-start overflow-hidden">
        
        {/* Background Tilted Boxes */}
        <div className="absolute left-36 top-36 rotate-45 z-10">
          <div className="w-96 h-80 bg-gradient-to-r from-purple-400 to-purple-700 p-[12px] ">
            <div className="w-full h-full bg-purple-600"></div>
          </div>
          <div className="absolute top-6 bottom-16 left-[-100px] w-96 h-80 bg-gradient-to-r from-purple-500 to-purple-800 p-[10px] ">
            <div className="w-full h-full bg-purple-600"></div>
          </div>
        </div>

        {/* Wave bottom */}
        <div
          className="absolute bottom-0 left-0 w-full h-[300px] bg-purple-800"
          style={{
            clipPath: "polygon(0 9%, 23% 9%, 51% 40%, 84% 42%, 100% 34%, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%)",
          }}
        ></div>

        {/* Left image area with ENTRANCE animation */}
        <div className="relative w-[670px] h-[750px] ml-[300px] animate-entrance-model">
          {/* ghost effects */}
          <img
            src="Images/pngimg.com - girls_PNG6491.png"
            alt="model"
            className="absolute top-0 left-0 w-full h-full opacity-40 translate-x-[70px]"
          />
          <img
            src="Images/pngimg.com - girls_PNG6491.png"
            alt="model"
            className="absolute top-0 left-0 w-full h-full opacity-40 translate-x-[150px]"
          />

          {/* main model with FLOAT effect */}
          <img
            src="Images/pngimg.com - girls_PNG6491.png"
            alt="model"
            className="relative z-10 w-full h-full animate-float"
          />
        </div>

        {/* Right side Content with ENTRANCE animation */}
        <div className="relative z-10 flex items-center ml-96 w-10/12 animate-entrance-text">
          <div className="text-white ">
            <p className="uppercase tracking-wide text-2xl font-bold text-main">From $49.99</p>
            <h1 className="text-8xl leading-tight">
              <span className="text-black">202</span>
              <span className='text-9xl text-black'>5</span> <br /> SUMMER <br /> COLLECTION
            </h1>
            <button className="mt-6 px-6 py-3 bg-black text-white font-bold rounded-md hover:bg-gray-800 transition-colors">
              Shop NOW!
            </button>
          </div>
        </div>
      
      </section>
    </div>
  )
}

export default Home