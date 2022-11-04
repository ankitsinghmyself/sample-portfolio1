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
const Experience = () => {
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "experience"]{
      ...,
    } | order(startAt desc)`
      )
      .then((data) => setExperience(data))
      .catch(console.error);
  }, []);
  return (
    <div className="min-h-screen pt-10 pb-10 bg-gray-100 text-gray-900 flex justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl flex justify-center cursive">
            My Experience
          </h1>
          <h2 className="text-lg text-gray-600 flex justify-center mb-12">
            Welcome to my Experience page!
          </h2>
          {/* <ol class="border-l-2 border-purple-600">
            {experience.map((project) => (
              <li key={project.name}>
                <div class="md:flex flex-start">
                  <div class="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      class="text-white w-3 h-3"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                      ></path>
                    </svg>
                  </div>
                  <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                    <div class="flex justify-between mb-4">
                      <a
                        href="#!"
                        class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                      >
                        {project.name}
                      </a>
                      <a
                        href="#!"
                        class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                      >
                        {project.startAt}
                      </a>
                    </div>
                    <p class="text-gray-700 mb-6">{project.description}</p>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        type="button"
                        class="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                        data-mdb-ripple="true"
                      >
                        Code
                      </button>
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        type="button"
                        class="inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        data-mdb-ripple="true"
                      >
                        See demo
                      </button>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ol> */}
          <div className="p-5 text-gray-500">
            {/* experience */}I am a full stack developer with 3 year experience
            in mobile applications development with a passion for learning new
            technologies and building applications. I have a background in
            React-native and php, and I am currently working on my MERN stack
            skills. I am looking for a position where I can continue to learn
            and grow as a developer. I worked on some
            <Link href="/projects">
              <a className="text-indigo-500"> projects </a>
            </Link>
            and and freelance projects. I am also a freelancer.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
