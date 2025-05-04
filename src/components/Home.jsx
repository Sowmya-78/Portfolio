import React from "react";
import image from "../assets/p3.jpeg";

export default function Home() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="text-center text-black max-w-2xl px-4">
        <h1 className="text-4xl md:text-3xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
          Hi, I'm Sowmya Teepireddy
        </h1>
        <h2 className="text-black text-2xl md:text-3xl mb-6  font-medium drop-shadow-lg">
          Welcome to my Portfolio Page
        </h2>
        <p className="text-lg md:text-xl text-black drop-shadow-md">
          Software Developer | Front-End Enthusiast
        </p>
      </div>
    </section>
  );
}
