import React, { useState } from "react";
import { urlFor } from "../sanity";

export default function Projects(props) {
  const [numProjects, setNumProjects] = useState(3);
  const { data } = props;
  return (
    <section id="projects-section">
      <div className="flex flex-col items-center justify-center pt-4">
        <h3 className="text-5xl flex justify-center cursive">PROJECTS</h3>
        <hr className="w-10 mt-1 h-1.5 bg-red-500 rounded-full" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.slice(0, numProjects).map((project) => (
            <div className="flex-1 p-4 flex justify-center" key={project._id}>
              <article className="relative rounded-lg shadow-xl bg-white p-10">
                <div className="text-gray-500 text-xs  flex">
                  <img
                    src={urlFor(project.image).url()}
                    alt={project.title}
                    className="w-[100px] h-[100px] rounded-t object-cover"
                  />
                  <div className="flex-col pl-2">
                    <h5 className="text-gray-800 text-xl  font-bold mb-2 hover:text-red-600">
                      <a
                        href={project.link}
                        alt={project.title}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </a>
                    </h5>

                    <div className="-mt-2 ">
                      Technologies Used:
                      <div className="flex  flex-wrap">
                        {project.technologies.map((technology) => (
                          <div
                            key={technology}
                            class=" text-xs  m-1 bg-green-200 text-green-700 rounded-[4px]"
                          >
                            {technology}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-gray-500 text-xs ">
                  <p
                    className="text-sm text-gray-600 overflow-hidden text-justify pt-2"
                    style={{
                      maxHeight: "4rem",
                      WebkitLineClamp: 2,
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {project.description}
                  </p>

                  <div className="flex items-center justify-center pt-5">
                    {project.link ? (
                      <div className="rounded-md   w-1/2">
                        <a
                          href={project.link}
                          className="w-full flex items-center justify-center px-2 py-2 border border-transparent text-base  rounded-md text-white bg-red-500 hover:bg-red-400  md:text-sm md:-ml-4"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Demo{" "}
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                    {project.github ? (
                      <div className="rounded-md shadow w-1/2 ">
                        <a
                          href={project.github}
                          className=" w-full flex items-center justify-center px-2 py-2 border border-transparent text-base  rounded-md text-white bg-gray-500 hover:bg-gray-400  md:text-sm "
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source Code{" "}
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
        {numProjects < data.length && (
          <div className="flex justify-center py-5">
            <button
              className="border border-red-500 hover:bg-red-500  hover:text-white font-bold py-2 px-4 rounded"
              onClick={() => setNumProjects(numProjects + 3)}
            >
              More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
