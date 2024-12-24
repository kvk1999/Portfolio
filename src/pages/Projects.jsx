import React from 'react';
import IncomeandExpenses from '../assets/IncomeandExpenses.png'
import FakeStore from '../assets/fakestore.png'
import TravelLanding from '../assets/travel.png'
import MovieSearchApp from '../assets/MoviezBonanza.png'
import Development from '../assets/Development.png'
import Course from '../assets/course.png'


export default function Projects() {
  return (
    <section id="projects" className="p-8 bg-slate-200"><hr />
      <h2 className="text-5xl text-slate-800 font-extrabold font-oswald text-center mt-20">Projects💻</h2>
      <div className='grid grid-cols-3 w-8/12 ml-60 gap-5 mt-5 mb-10 '>
      {/* IncomeandExpenses Game */}
        <div className="mt-4 grid gap-4 border rounded-md bg-slate-900 hover:scale-105 hover:animate-pulse">
            <div className="p-4 rounded-lg">
              <img src={IncomeandExpenses} alt="" className='rounded-md'/>
              <h3 className="text-2xl font-oswald font-bold text-transparent text-center mt-2 bg-clip-text
                       bg-gradient-to-r from-linear1 to-linear">Memory Game</h3>
              <div className="flex justify-between mt-2">
                <a href="https://github.com/kvk1999/CRUD" className="text-white text-lg  font-oswald group">GitHub<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
                <a href="https://kvk1999crud.netlify.app" className="text-white text-lg mr-2 font-oswald group">Live<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
              </div>
            </div>
        </div>
      {/* Fake Store */}
        <div className="mt-4 grid gap-4 border rounded-md bg-slate-900 hover:scale-105 hover:animate-pulse">
            <div className="p-4 rounded-lg">
              <img src={FakeStore} alt="" className='rounded-md'/>
              <h3 className="text-2xl font-outfit font-bold text-transparent text-center mt-2 bg-clip-text
                       bg-gradient-to-r from-linear1 to-linear">Expense Tracker</h3>
              <div className="flex justify-between mt-2">
                <a href="https://github.com/kvk1999/reactjstocssfakestore" className="text-white text-lg ml-1 group">GitHub<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
                <a href="https://reactjstocssfakestore.netlify.app" className="text-white text-lg mr-2 group">Live<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
              </div>
            </div>
        </div>
      {/* Travel Landing Page */}
        <div className="mt-4 grid gap-4 border rounded-md bg-slate-900 hover:scale-105 hover:animate-pulse">
            <div className="p-4 rounded-lg">
              <img src={TravelLanding} alt="" className='rounded-md'/>
              <h3 className="text-2xl font-outfit font-bold text-transparent text-center mt-2 bg-clip-text
                       bg-gradient-to-r from-linear1 to-linear">Trabook-Landing Page</h3>
              <div className="flex justify-between mt-2">
                <a href="https://github.com/kvk1999/landingpage" className="text-white text-lg ml-1 group">GitHub<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
                <a href="https://kvk1999landingpage.netlify.app" className="text-white text-lg mr-2 group">Live<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
              </div>
            </div>
        </div>
      {/* MovieSearchApp */}
        <div className="mt-4 grid gap-4 border rounded-md bg-slate-900 hover:scale-105 hover:animate-pulse">
            <div className="p-4 rounded-lg">
              <img src={MovieSearchApp} alt="" className='rounded-md'/>
              <h3 className="text-2xl font-outfit font-bold text-transparent text-center mt-2 bg-clip-text
                       bg-gradient-to-r from-linear1 to-linear">Movie Search App</h3>
              <div className="flex justify-between mt-2">
                <a href="https://github.com/kvk1999/moviessearchingapp" className="text-white text-lg ml-1 group">GitHub<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
                <a href="https://moviezbonanza.netlify.app" className="text-white text-lg mr-2 group">Live<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
              </div>
            </div>
        </div>
      {/* Development App */}
        <div className="mt-4 grid gap-4 border rounded-md bg-slate-900 hover:scale-105 hover:animate-pulse">
            <div className="p-4 rounded-lg">
              <img src={Development} alt="" className='rounded-md'/>
              <h3 className="text-2xl font-outfit font-bold text-transparent text-center mt-2 bg-clip-text
                       bg-gradient-to-r from-linear1 to-linear">Ecommerce Cart</h3>
              <div className="flex justify-between mt-2">
                <a href="https://github.com/kvk1999/memorygame" className="text-white text-lg ml-1 group">GitHub<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
                <a href="https://kvk1999memorygame.netlify.app" className="text-white text-lg mr-2 group">Live<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
              </div>
            </div>
        </div>
      {/* Course Page */}
      <div className="mt-4 grid gap-4 border rounded-md bg-slate-900 hover:scale-105 hover:animate-pulse">
          <div className="p-4 rounded-lg">
            <img src={Course} alt="" className='rounded-md'/>
            <h3 className="text-2xl font-outfit font-bold text-transparent text-center mt-2 bg-clip-text
                         bg-gradient-to-r from-linear1 to-linear">Tailwind CSS Landing Page</h3>
            <div className="flex justify-between mt-2">
              <a href="https://github.com/kvk1999/twlandingpage/tree/main" className="text-white text-lg ml-1 group">GitHub<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
              <a href="https://twlandpage.netlify.app" className="text-white text-lg mr-2 group">Live<div class="bg-amber-500 h-[2px] w-0 ml-0 group-hover:w-full transition-all mt-0 duration-500"></div></a>
            </div>
            </div>
        </div>
        {}
      </div><hr />
    </section>
  );
}