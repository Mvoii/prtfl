"use client";
import React, { useState, useRef } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from '@emailjs/browser';

const EmailSection = () => {
 const form = useRef();

 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");
 const [isLoading, setIsLoading] = useState(false);
 const [subject, setSubject] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

 const sendEmail = (e) => {
  e.preventDefault();

  if (!email) {
    setError("Please enter your email");
    return;
  }
  if (!message) {
    setError("Please enter your message");
    return;
  }

  const templateParams = {
    from_name: email,
    to_name: "Frank Mvoi",
    subject,
    message
  };

  setError("")
  setIsLoading(true)
  //e.preventDefault(); // prevents the page from reloading when you hit “Send”

  emailjs
    .send(
      process.env.YOUR_SERVICE_ID, 
      process.env.YOUR_TEMPLATE_ID, 
      templateParams,
      process.env.YOUR_PUBLIC_KEY
    )
    .then(
      (response) => {
        setEmail("");
        setSubject("");
        setMessage("");
        setIsLoading(false);
        setSuccess("Your message has been sent successfully. I will get back soon.")
      },
      (error) => {
        setError("Some error occured. Please send me a direct email.")
        console.error(error);
        setIsLoading(false);
      },
    );
     /*((result) => {
         // show the user a success message
         console.log("Email Sent Successfully!", result.text);
     }, (error) => {
         // show the user an error
         console.log("Email not sent!", error.text);
     });*/
  };

/*return (
   <form ref={form} onSubmit={sendEmail}>
     <label>Name</label>
     <input type="text" name="user_name" />
     <label>Email</label>
     <input type="email" name="user_email" />
     <label>Message</label>
     <textarea name="message" />
     <input type="submit" value="Send" />
   </form>
 );
};

export default EmailContactForm;*/

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Mvoii">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/franklinmvoi/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {(
          <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="user_email"
                type="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="johndoe@example.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                onChange={(e) => setSubject(e.target.value)}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              value="Send"
              onClick={sendEmail}
              disabled={isLoading}
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
