/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect } from 'react';
import {
  Bars2Icon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import sanityClient from '../sanity';
import { urlFor } from '../sanity';
import Link from 'next/link';
const About = () => {
  return (
    <>
      <div className="min-h-screen p-10 bg-gray-100 text-gray-900 flex justify-center">
        <div className="container mx-auto">
          <div className="row">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-5xl flex justify-center cursive">ABOUT ME</h1>
              <hr className="w-10 mt-1 h-1.5 bg-red-500 rounded-full" />
              <p className="text-lg text-gray-600 flex text-center mb-12 p-10 space-x-4 w-4/6 ">
                Here you will find more information about me, what I do, and my
                current skills mostly in terms of programming and technology
              </p>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 pt-10">
                <div className=" text-gray-500 justify-center text-lg text-left ">
                  <h2 className="text-3xl text-gray-900 flex justify-left mb-12">
                    Get to know me!
                  </h2>
                  <p className="text-lg text-gray-500 leading-relaxed">
                    I&apos;m a <strong>Web & Mobile Developer</strong> building
                    the Front-end of Websites and Mobile Applications that leads
                    to the success of the overall product. Check out some of my
                    work in the Projects section.
                  </p>
                  <p className="text-lg text-gray-500 leading-relaxed">
                    I also like sharing content related to the stuff that I have
                    learned over the years in Web Development so it can help
                    other people of the Dev Community. Feel free to Connect or
                    Follow me on my{' '}
                    <a href="https://www.linkedin.com/in/ankitsinghmyself/">
                      <b>Linkedin</b>
                    </a>{' '}
                    where I post useful content related to{' '}
                    <strong>Mobile Development</strong> and Programming I&apos;m
                    open to Job opportunities where I can contribute, learn and
                    grow. If you have a good opportunity that matches my skills
                    and experience then don&apos;t hesitate to contact me.
                  </p>
                </div>
                <div className="">
                  <h2 className="text-3xl text-gray-900 flex justify-left mb-12">
                    My Skills
                  </h2>
                  <div>
                    React Native | Angular | NextJS
                    <div className="w-full bg-gray-200 h-1 mb-6">
                      <div className="w-4/6 h-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    JavaScript
                    <div className="w-full bg-gray-200 h-1 mb-6">
                      <div className="w-3/4 h-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div>
                    Tailwind CSS | Bootstrap | Material UI | SCSS
                    <div className="w-full bg-gray-200 h-1 mb-6">
                      <div className="w-3/4 h-full bg-yellow-500"></div>
                    </div>
                  </div>
                  <div>
                    NodeJS| NestJS | PHP
                    <div className="w-full bg-gray-200 h-1 mb-6">
                      <div className="w-3/5 h-full bg-green-500"></div>
                    </div>
                  </div>
                  <div>
                    MongoDB | MySQL | Firebase | Sanity
                    <div className="w-full bg-gray-200 h-1 mb-6">
                      <div className="w-3/4 h-full bg-red-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
