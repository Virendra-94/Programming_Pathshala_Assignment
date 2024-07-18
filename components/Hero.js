"use client";
import React, { useEffect } from 'react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';

// Install Swiper modules
SwiperCore.use([Autoplay]);

const Hero = () => {
  useEffect(() => {
    const swiper = new SwiperCore('.swiper-container', {
      autoplay: {
        delay: 1000, 
        disableOnInteraction: false, 
      },
      loop: true, 
    });

    return () => {
      swiper.destroy(); 
    };
  }, []);

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-5xl font-bold">
                  Lessons and insights <br />
                  <span className="text-green-500">from 8 years</span>
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                  Where to grow your business as a photographer: site or social media?
                </p>
                <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded">Register</button>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-5xl font-bold">
                  Slide 2 Content
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                  Slide 2 Description
                </p>
                <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded">Register</button>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-5xl font-bold">
                  Slide 3 Content
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                  Slide 3 Description
                </p>
                <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded">Register</button>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;


// import React from 'react';

// const Hero = () => {
//   return (
//     <section className="bg-gray-100 py-20">
//       <div className="container mx-auto flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
//         <h1 className="text-3xl sm:text-5xl font-bold">
//           Lessons and insights <br />
//           <span className="text-green-500">from 8 years</span>
//         </h1>
//         <p className="mt-4 text-lg text-gray-600">
//           Where to grow your business as a photographer: site or social media?
//         </p>
//         <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded">Register</button>
//       </div>
//     </section>
//   );
// }

// export default Hero;
