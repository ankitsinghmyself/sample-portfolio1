import React, { useState, useEffect } from "react";
import Head from "next/head";
import exp from "../public/Exp.module.css";

import Image from "next/image";
import sanityClient, { urlFor } from "../sanity";

const PortfolioSection = () => {
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [numProjects, setNumProjects] = useState();
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const experiencesData = await sanityClient.fetch(
          `*[_type == "experiences"] {...} | order(year desc)`
        );
        setExperiences(experiencesData);

        const projectsData = await sanityClient.fetch(
          `*[_type == "projects"] {...} | order(date desc)`
        );
        setProjects(projectsData);

        const certificationsData = await sanityClient.fetch(
          `*[_type == "certifications"] {...} | order(date desc)`
        );
        setCertifications(certificationsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="bg-gray-100 py-16">
      <>
        <div className="">
          <div id="exp-section">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-5xl flex justify-center cursive">
                EXPERIENCE
              </h3>
              <hr className="w-10 mt-1 h-1.5 bg-red-500 rounded-full" />
            </div>
            <div className={exp.container}>
              {experiences.map((experience, index) => (
                <div
                  className={[
                    exp.timelineblock,
                    index % 2 === 0
                      ? exp.timelineblockleft
                      : exp.timelineblockright,
                  ].join(" ")}
                  key={experience._id}
                >
                  <div className={exp.marker}></div>
                  <div className={exp.timelinecontent}>
                    <h3>{experience.title}</h3>
                    <span>{experience.company}</span>
                    <p></p>
                    <span className="text-sm">{experience.date}</span>
                    <hr className="w-10 mt-1 h-0.5 bg-red-500 rounded-full" />

                    <p>{experience.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-5xl flex justify-center cursive">PROJECTS</h3>
            <hr className="w-10 mt-1 h-1.5 bg-red-500 rounded-full" />
          </div>
          <div
            id="projects-section"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.slice(0, numProjects).map((project) => (
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
          {/* {numProjects < projects.length && (
            <div className="flex justify-center">
              <button
                className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
                onClick={() => setNumProjects(numProjects + 3)}
              >
                Load More Projects {'>>>'}
              </button>
            </div>
          )} */}
          <div className="flex flex-col items-center justify-center pt-4 bg-gray-100">
            <h3 className="text-5xl flex justify-center cursive">
              CERTIFICATIONS
            </h3>
            <hr className="w-10 mt-1 h-1.5 bg-red-500 rounded-full" />
          </div>

          <div
            id="certifications-section"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-100"
          >
            {certifications.map((certification) => (
              <div className="flex justify-center" key={certification._id}>
                <div className="bg-white rounded-lg shadow-lg p-4 m-4">
                  <div className="flex">
                    <div className="w-1/3">
                      <img
                        src={urlFor(certification.image).url()}
                        alt={certification.title}
                        className="h-full w-full object-cover rounded"
                      />
                    </div>
                    <div className="w-2/3 pl-4">
                      <h2 className="text-xl font-bold mb-2">
                        <a
                          href={certification.link}
                          alt={certification.title}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {certification.title}
                        </a>
                      </h2>
                      <p>
                        <span className="text-right">
                          {new Date(certification.date).toLocaleString(
                            "en-US",
                            {
                              month: "long",
                            }
                          )}{" "}
                          {new Date(certification.date).getFullYear()}
                        </span>
                      </p>
                      <p>
                        <span>
                          <div className="flex  flex-wrap">
                            {certification.technologies.map((technology) => (
                              <div
                                key={technology}
                                class=" text-xs  m-1 bg-green-200 text-green-700 rounded-[4px]"
                              >
                                {technology}
                              </div>
                            ))}
                          </div>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </section>
  );
};

export default PortfolioSection;
