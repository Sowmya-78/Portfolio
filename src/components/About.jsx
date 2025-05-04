import React from "react";
import myPhoto from "../assets/Sowmi.jpg"; // Update with your actual photo path

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto font-serif text-gray-800">
      {/* Header */}
      <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>

      {/* Bio & Details */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src={myPhoto}
          alt="Sowmya Teepireddy"
          className="w-56 h-56 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
        />
        <div className="text-lg text-justify space-y-6">
          <p>
            Hello! I'm <strong>Sowmya Teepireddy</strong>, a driven and detail-oriented Software Developer with a strong foundation in computer science
            principles and a passion for crafting intuitive, responsive web applications. I thrive in environments that challenge me to learn
            quickly and collaborate effectively.
          </p>
          <p>
            I specialize in front-end development, UI/UX design, and building seamless digital experiences using <strong>React</strong>,
            <strong> JavaScript</strong>, <strong>HTML</strong>, and <strong>CSS</strong>. My work balances creativity with functionality,
            always centered on user-first design.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-indigo-700">Programming Skills</h3>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>C – Foundational programming & logic</li>
            <li>Java – OOP & backend basics</li>
            <li>Python – Scripting & data analysis</li>
            <li>HTML &amp; CSS – Responsive markup & styling</li>
            <li>SQL – Database design & querying</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-indigo-700">Technical Skills</h3>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>React – Component-based UI development</li>
            <li>Git &amp; GitHub – Version control & collaboration</li>
            <li>Responsive Design – Mobile-first, cross-browser</li>
            <li>MS Office – Documentation & presentations</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-indigo-700">Personality Traits</h3>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li><strong>Self-motivated:</strong> Eager to take initiative</li>
            <li><strong>Team Player:</strong> Collaborative communicator</li>
            <li><strong>Quick Learner:</strong> Adapts to new tools rapidly</li>
            <li><strong>Detail-Oriented:</strong> Precision & quality focused</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-indigo-700">Education</h3>
          <p className="mb-4">
            <strong>M.S. in Computer Science</strong><br />
            Auburn University at Montgomery, AL, USA — Expected 2025
          </p>
          <p>
            <strong>B.Tech in Computer Science</strong><br />
            Gudlavalleru Engineering College, Gudivada, India — 2022
          </p>
        </div>
      </div>

      {/* Experience & Externship */}
      <div className="mt-16 space-y-10">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience</h3>
          <h4 className="text-xl font-semibold text-indigo-700">
            HCL Technologies Ltd — Chennai, India <span className="text-sm text-gray-600">(2022–2023)</span>
          </h4>
          <p className="text-gray-800 font-medium mt-1">Graduate Engineer Trainee</p>
          <ul className="list-disc list-inside pl-6 mt-2 space-y-1 text-gray-700">
            <li>Implemented Teamcenter PLM solutions</li>
            <li>Developed Pre-OTP authentication logic in Java</li>
            <li>Completed mandatory training on core software practices</li>
            <li>Interacted with clients for requirements gathering</li>
            <li>Provided technical client support and service</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-indigo-700">
            SmartInternz (AI powered by IBM) <span className="text-sm text-gray-600">(3-Month Externship)</span>
          </h4>
          <ul className="list-disc list-inside pl-6 mt-2 space-y-1 text-gray-700">
            <li>Hands-on AI model development & deployment</li>
            <li>Collaborated on real-world industry projects under IBM mentorship</li>
            <li>Enhanced problem-solving and teamwork skills in an AI context</li>
          </ul>
        </div>
      </div>

      {/* Certificates */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Certificates</h3>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-center">
            <span className="flex-1 font-medium">HCL Certified Graduate Engineer</span>
            <a
              href="ExperienceLetter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline ml-4"
            >
              View PDF
            </a>
          </li>
          <li className="flex items-center">
            <span className="flex-1 font-medium">AI &amp; Deep Learning Externship</span>
            <a
              href="externship certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline ml-4"
            >
              View PDF
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
