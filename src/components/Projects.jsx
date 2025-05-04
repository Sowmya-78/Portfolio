import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white font-serif">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-14">
        Projects
      </h2>

      <div className="max-w-4xl mx-auto space-y-12 text-gray-800 text-[1.1rem] leading-7">
        
        {/* Project 1 */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">Dynamic Project</h3>
          <p className="mt-2">
            A responsive and interactive task management interface built using React. Tasks are dynamically
            loaded from a JSON array, offering a seamless user experience and modern UI.
          </p>
          <a
            href="https://github.com/Sowmya-78/Dynamic-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 font-medium hover:underline mt-1 inline-block"
          >
            → View Project on GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">Employee Management System</h3>
          <p className="mt-2">
            A comprehensive system to manage employee details, salaries, departments, and appraisals.
            Streamlines HR operations and enhances record-keeping efficiency.
          </p>
        </div>

        {/* Project 3 */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">Intelligent Part Numbering LOV ITK Utility</h3>
          <p className="mt-2">
            Developed a utility tool that automates intelligent part number generation using
            Teamcenter ITK APIs and logic-based workflows, improving design consistency in engineering systems.
          </p>
        </div>

        {/* Project 4 */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Transmitting Data Securely by Steganography and Cryptography
          </h3>
          <p className="mt-2">
            A secure data transmission project using a hybrid of steganography and cryptography.
            Sensitive data is encrypted and then hidden within image files to prevent detection.
          </p>
        </div>

        {/* Project 5 */}
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700">
            Identifying Fake Profiles using Artificial Neural Networks
          </h3>
          <p className="mt-2">
            This AI-powered project applies ANN models to detect and flag suspicious user profiles
            by analyzing behavioral patterns, activity logs, and inconsistencies.
          </p>
        </div>

      </div>
    </section>
  );
}
