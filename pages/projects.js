/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect } from 'react';
import {
  Bars2Icon,
  CalendarIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import sanityClient from '../sanity';
import { urlFor } from '../sanity';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "projects"]{
      ...,
    } | order(date desc)`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen pt-10 pb-10 bg-gray-100 text-gray-900 flex justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-5xl flex justify-center cursive">PROJECTS</h2>
          <hr className="w-10 mt-1 h-1.5 bg-red-500 rounded-full" />
          <p className="text-lg text-gray-600 flex text-center mb-12 p-10 space-x-4 ">
            Welcome to my projects page!
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article className="relative rounded-lg shadow-xl bg-white p-10">
              <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                <a
                  href={project.link}
                  alt={project.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h3>
              <div className="text-gray-500 text-xs space-x-4 space-y-2">
                <img
                  src={urlFor(project.image).url()}
                  alt={project.title}
                  className="w-full h-64 rounded-t object-cover"
                />
                <p className="my-6 text-sm text-gray-700 leading-relaxed !ml-0">
                  {project.description}
                </p>
                Technologies Used:
                <div className="flex justify-left text-sm ">
                  <div className="flex items-center space-x-2">
                    <span>
                      {project.technologies.map((technology) => (
                        <button
                          type="button"
                          class="mr-2 bg-gray-400  text-white p-2 rounded uppercase  leading-none mb-2 "
                        >
                          {technology}
                        </button>
                      ))}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  {project.link ? (
                    <div className="rounded-md   w-1/2">
                      <a
                        href={project.link}
                        className="w-full flex items-center justify-center px-2 py-2 border border-transparent text-base  rounded-md text-white bg-red-500 hover:bg-red-400  md:text-sm md:-ml-4"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo{' '}
                      </a>
                    </div>
                  ) : (
                    ''
                  )}
                  {project.github ? (
                    <div className="rounded-md shadow w-1/2 ">
                      <a
                        href={project.github}
                        className=" w-full flex items-center justify-center px-2 py-2 border border-transparent text-base  rounded-md text-white bg-gray-500 hover:bg-gray-400  md:text-sm "
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source Code{' '}
                      </a>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
