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
          <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
          <h2 className="text-lg text-gray-600 flex justify-center mb-12">
            Welcome to my projects page!
          </h2>
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
                <span>
                  <CalendarIcon className="inline-block w-6 h-6" />
                  {project.date}
                </span>

                <p className="my-6 text-lg text-gray-700 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex justify-left text-sm">
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
                <a
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                >
                  View The Project{' '}
                  <span role="img" aria-label="right pointer">
                    👉
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
