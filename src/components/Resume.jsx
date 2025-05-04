import React from "react";
import { FaDownload, FaEye } from "react-icons/fa";

export default function Resume() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center font-serif">
      <h2 className="text-4xl font-bold mb-8 text-gray-900">My Resume</h2>

      {/* Action Buttons */}
      <div className="flex justify-center gap-6 mb-10">
        <a
          href="/Sowmya_Teepireddy_Resume.pdf"
          download
          className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          <FaDownload /> Download Resume
        </a>

        <a
          href="/Sowmya Teepireddy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
        >
          <FaEye /> View in New Tab
        </a>
      </div>
    </section>
  );
}
