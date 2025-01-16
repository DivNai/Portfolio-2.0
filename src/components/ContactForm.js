// src/components/ContactForm.js
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ekf7dcd", // Replace with your EmailJS service ID
        "template_ww99h15", // Replace with your EmailJS template ID
        formRef.current,
        "9y2kJhxDfET0_cyab"  // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset(); // Clear form after submission
  };

  return (
    <section id="contactform" className="Contact-Form-1">
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="max-w-4xl w-full bg-gray-1000 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center text-gradient w-full py-3  ">
          Get  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">In Touch</span>
        </h2>
        <p className="mb-8 text-center">
          I am currently available to work on new projects. You can contact me
          anytime.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="space-y-4">
            <p className="text-xl font-semibold">Let's Talk</p>
            <p>naithani1604@gmail.com</p>
            <p>+91 7818842615</p>
            <p>Dehradun,Uttarakhand</p>
          </div>
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Write your message here"
              rows="4"
              required
              className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg shadow-lg hover:opacity-90 transition"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ContactForm;
