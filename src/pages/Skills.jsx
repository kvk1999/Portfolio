import React from 'react';
import css from '../assets/css.png'
import express from '../assets/express.png'
import figma from '../assets/figma.png'
import git from '../assets/git.png'
import html from '../assets/html.png'
import js from '../assets/js.png'
import mongo from '../assets/mongodb.png'
import sql from '../assets/my sql.png'
import node from '../assets/node.png'
import postman from '../assets/postman.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import testfully from '../assets/testfully.png'
import quote from '../assets/quote.jpg'

export default function Skills() {
  return (
    <section id="skills" className="p-8 bg-bg">
      <img src={quote} alt="" />
      <h3 className="text-white font-oswald font-bold text-3xl text-center mt-12">Technologies I am familiar with</h3>
      <div className="flex gap-4 justify-center mt-12 mb-5">
        <img src={html} alt="" style={{width:"40px", height:"40px"}} />
        <img src={css} alt="" style={{width:"40px", height:"40px"}} />
        <img src={js} alt="" style={{width:"40px", height:"40px"}} />
        <img src={tailwind} alt="" style={{width:"40px", height:"40px"}} />
        <img src={react} alt="" style={{width:"40px", height:"40px"}} />
        <img src={node} alt="" style={{width:"40px", height:"40px"}} />
        <img src={express} alt="" style={{width:"40px", height:"40px"}} />
        <img src={postman} alt="" style={{width:"40px", height:"40px"}} />
        <img src={mongo} alt="" style={{width:"40px", height:"40px"}} />
        <img src={sql} alt="" style={{width:"40px", height:"40px"}} />
        <img src={git} alt="" style={{width:"40px", height:"40px"}} />
        <img src={figma} alt="" style={{width:"40px", height:"40px"}} />
        <img src={testfully} alt="" style={{width:"40px", height:"40px"}} />
      </div>
    </section>
  );
}