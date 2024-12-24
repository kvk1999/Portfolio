import React from "react";
import about from "../assets/about.png";

export default function About() {
  return (
    <section id="about" className="p-8 bg-slate-200">
      <hr />
      <h2 className="text-slate-800 font-oswald font-extrabold text-5xl text-center mt-20">
        About Me📑
      </h2>
      <div className="flex justify-around mb-14">
        <img
          src={about}
          alt=""
          className="mt-10"
          style={{ width: "430px", height: "550px" }}
        />
        <p className="text-slate-800 text-xl w-5/12 mt-28 ">
          👋 Hello! I'm Koushik K V, a recent MCA graduate with hands-on
          experience in web development. <br /> 💻 I completed a 3-month
          internship at MagicBus, Chennai, where I worked on afascinating 
          project named 'Pathology Classification'. During this internship,
          I honed my skills in HTML, CSS, JavaScript.And also i
          learned Bootstrap, and React for contributing to the development of
          innovative solutions. In my academic journey, I successfully developed
          a project called 'Virtual Desktop Assistant', showcasing my ability to
          create practical and efficient solutions. <br /> 💡 Now, as a
          dedicated Full Stack Developer, I'm enthusiastic about applying my
          knowledge and skills to real-world challenges. Let's connect and
          explore the endless possibilities of coding together! 🌐
        </p>
      </div>
      <hr />
    </section>
  );
}