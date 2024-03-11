"use client";
import React, { useState, useRef } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
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
        <section className="flex flex-col lg:mt-40 md:mt-40">
          <div className="mb-2">
            <label className="text-primary-400 block mb-2 text-sm font-medium font-color-primary">
              My Email:
              <label className="text-gray-100 text-sm p-2.5">
                mvoifranklin@gmail.com
              </label>
            </label>
          </div>
          <div className="mb-6">
            <label className="text-primary-400 block text-sm mb-2 font-medium">
              Phone Number:
              <label className="text-gray-100 text-sm p-2.5">
                +2541234567
              </label>
            </label>
          </div>
        </section>
      </div>
    </section>
  );
};

export default EmailSection;
