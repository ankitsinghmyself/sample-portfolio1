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
    }`
      )
      .then((data) => setExperience(data))
      .catch(console.error);
  }, []);
  return (
    <div className="min-h-screen pt-10 pb-10 bg-gray-100 text-gray-900 flex justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-5xl flex justify-center cursive">EXPERIENCE</h2>
          <hr className="w-10 mt-1 h-1.5 bg-red-500 rounded-full" />
          <p className="text-lg text-gray-600 flex text-center mb-12 p-10 space-x-4 ">
            Welcome to my Experience page!!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="p-5 text-gray-500"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experience.map((exp) => (
            <div className="bg-gray-200 p-6 rounded-lg mb-6" key={exp._id}>
              <h1 className="text-2xl font-bold text-gray-900">{exp.title}</h1>
              {/* <img
                src={urlFor(exp.image).url()}
                alt={exp.title}
                className="w-full rounded-lg mb-4"
              /> */}
              <p className="text-gray-600">{exp.date.slice(0, 4)}</p>

              <p className="text-gray-700">{exp.description}</p>
            </div>
            // <article
            //   className="relative rounded-lg shadow-xl bg-white p-10"
            //   key={exp._id}
            // >
            //   <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
            //     <a
            //       href={exp.link}
            //       alt={exp.title}
            //       target="_blank"
            //       rel="noopener noreferrer"
            //     >
            //       {exp.title}
            //     </a>
            //   </h3>
            //   <div className="text-gray-500 text-xs space-x-4 space-y-2">
            //     <img
            //       src={urlFor(exp.image).url()}
            //       alt={exp.title}
            //       className="w-full h-64 rounded-t object-cover"
            //     />
            //     <p className="my-6 text-sm text-gray-700 leading-relaxed !ml-0">
            //       {exp.description}
            //     </p>
            //     <div className="flex items-center justify-center">
            //       {exp.link ? (
            //         <div className="rounded-md   w-1/2">
            //           <a
            //             href={exp.link}
            //             className="w-full flex items-center justify-center px-2 py-2 border border-transparent text-base  rounded-md text-white bg-red-500 hover:bg-red-400  md:text-sm md:-ml-4"
            //             target="_blank"
            //             rel="noreferrer"
            //           >
            //             Info{' '}
            //           </a>
            //         </div>
            //       ) : (
            //         ''
            //       )}
            //     </div>
            //   </div>
            // </article>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Experience;
