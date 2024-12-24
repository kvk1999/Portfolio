import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="p-8 bg-bg text-center">
      <div className="flex justify-center mt-44">
        <li className="list-circle font-oswald font-light group mt-1 text-orange-600"></li>
        <h3 className="text-white font-oswald text-2xl font-thin">Get In Touch</h3>
      </div>

      <div className="mt-20">
        <a href="mailto:koushikraghavan@gmail.com" className="group font-oswald font-extrabold text-white  text-8xl ">Need a developer ?
          <div class="bg-white h-[2px] w-0 ml-60 group-hover:w-8/12 transition-all mt-3 duration-500"></div>
        </a>
      </div>

      <div className="mt-40 flex gap-4 ml-24">
        <div>
          <h5 className="text-white font-oswald mr-12 mb-2 text-xl">Call Me</h5>
          <a href="tel:+918072951551" className="group font-oswald text-gray-400">+91 8072951551
            <div class="bg-white h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div>
          </a>
        </div>
        <div>
          <h5 className="text-white font-oswald mr-8 text-xl mb-2 ">Social</h5>
          <div className="flex gap-4 ml-12">
            <a href="https://www.linkedin.com/in/koushik-raghavan-kunnavakkam-vinchimur-011a0113a/" className="text-gray-400 font-oswald group">LinkedIn<div class="bg-white h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
            <a href="https://github.com/kvk1999" className="text-gray-400 font-oswald group">Github<div class="bg-white h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
          </div>
        </div>
        <div className="mr-20">
          <h5 className="text-white font-oswald text-xl mb-2 ">Let's grab a cofee.</h5>
          <a href="mailto:koushikraghavan@gmail.com" className="text-gray-400 font-oswald ml-20 group">koushikraghavan@gmail.com<div class="bg-white h-[2px] w-0 ml-20 group-hover:w-9/12 transition-all mt-0 duration-500"></div></a>
        </div>
      </div><hr className="w-11/12 ml-12 mt-12 " />

      <div>
        <p className="text-gray-400 font-oswald mt-6">© Copyright 2024, KOUSHIK K V</p>
      </div>
    </section>
  );
}