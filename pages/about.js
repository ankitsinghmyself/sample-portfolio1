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
      <div className="min-h-screen pt-10 pb-10 bg-gray-100 text-gray-900 flex justify-center">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl flex justify-center cursive">About Me</h1>
            <div className="p-5 text-gray-500 justify-center ">
              {/* experience */}I am a full stack developer with 3 year
              experience in mobile applications development with a passion for
              learning new technologies and building applications. I have a
              background in React-native and php, and I am currently working on
              my MERN stack skills. I am looking for a position where I can
              continue to learn and grow as a developer. I worked on some
              <Link href="/projects">
                <a className="text-indigo-500"> projects </a>
              </Link>
              and and freelance projects. I am also a freelancer.
            </div>
          </div>
          <section className="container mx-auto pl-5">
            <div>
              React Native | React | Next.js
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
              NodeJS | PHP
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
          </section>
        </div>
      </div>
    </>
  );
};
export default About;
