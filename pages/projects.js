/* eslint-disable react/jsx-key */
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
          <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
          <h2 className="text-lg text-gray-600 flex justify-center mb-12">
            Welcome to my projects page!
          </h2>
          <ol className="border-l-2 border-blue-600">
            {projects.map((project) => (
              <li key={project.name}>
                <div className="flex flex-start items-center">
                  <div className="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                  <h4 className="text-gray-800 font-semibold text-xl -mt-2">
                    {project.name}
                  </h4>
                </div>
                <div className="ml-6 mb-6 pb-6">
                  <p className="text-gray-600 text-sm">{project.date}</p>

                  <p className="text-gray-700 mt-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap items-center justify-center">
                    {project.technologies.map((tag) => (
                      <span className="bg-blue-600 text-white text-xs font-semibold rounded-full px-3 py-1 mr-2 mb-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center justify-center">
                    {project.images.map((image) => (
                      <img
                        src={urlFor(image).url()}
                        alt={project.name}
                        className="w-1/2 h-1/2"
                      />
                    ))}
                  </div>
                  <a
                    href="#!"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
                  >
                    <button
                      type="button"
                      className="inline-flex px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      <GlobeAltIcon className="w-5 h-5 mr-2" />
                      Github
                    </button>
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default Projects;
