import React from "react";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contacts() {
  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-3xl mx-auto text-center"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >

      <h2 className="text-4xl font-bold mb-8 text-gray-800">Get in Touch</h2>

      {/* Contact Info */}
      <div className="space-y-5 text-lg text-gray-700">
        <p className="flex justify-center items-center gap-3">
          <FaEnvelope className="text-indigo-600" />
          <a href="mailto:sowmya@example.com" className="hover:underline">
            sowmya@gmail.com
          </a>
        </p>

        <p className="flex justify-center items-center gap-3">
          <FaPhoneAlt className="text-indigo-600" />
          +91 98765 43210
        </p>

        <p className="flex justify-center items-center gap-3">
          <FaGithub className="text-indigo-600" />
          <a
            href="https://github.com/Sowmya-78"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/Sowmya-78
          </a>
        </p>

        <p className="flex justify-center items-center gap-3">
          <FaLinkedin className="text-indigo-600" />
          <a
            href="https://www.linkedin.com/in/sowmya-reddy-95302b181/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/sowmya-reddy-95302b181
          </a>
        </p>
      </div>
    </section>
  );
}
