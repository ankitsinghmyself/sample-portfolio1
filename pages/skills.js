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

const Skills = () => {
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
          <h1 className="text-5xl flex justify-center cursive">My IT Skills</h1>
          <h2 className="text-lg text-gray-600 flex justify-center mb-12">
            Welcome to my IT Skills page!
          </h2>
          <section className="container mx-auto">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={project.name} className="justify-center">
                  <div className="flex flex-col md:flex-row md:max-w-2xl rounded-lg bg-white shadow-lg">
                    <img
                      className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                      src={urlFor(project.image).url()}
                      alt={project.name}
                    />
                    <div className="p-6 flex flex-col justify-center">
                      <div className="text-gray-600 text-md mt-2">
                        <span className="font-semibold">Project Name: </span>
                        {project.name}
                      </div>
                      <div className="text-gray-600">
                        <span className="font-semibold">Technologies: </span>
                        {project.technologies.map((tech) => (
                          <div
                            key={tech}
                            className="text-xs inline-flex items-center  mr-2 px-3 py-1 bg-gray-500 text-white rounded-full"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                      <div className="text-gray-600 text-md mt-2">
                        <span className="font-semibold">Description: </span>
                        {project.description}
                      </div>

                      <div className="text-gray-600 text-md mt-2 ">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:underline"
                        >
                          <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded mt-4">
                            Source Code
                          </button>
                        </a>

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:underline"
                        >
                          <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded mt-4 ml-4">
                            Demo
                          </button>
                        </a>
                      </div>
                      <div className="text-gray-600 text-md mt-2">
                        <span className="font-semibold">Date:</span>
                        {new Date(project.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Skills;
