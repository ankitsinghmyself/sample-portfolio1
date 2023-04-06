/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import sanityClient, { urlFor } from '../sanity';

export default function Home() {
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [numProjects, setNumProjects] = useState(3);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "experiences"]{
      ...,
    }| order(year desc)`
      )
      .then((data) => setExperiences(data))
      .catch(console.error);
    sanityClient
      .fetch(
        `*[_type == "projects"]{
      ...,
    } | order(date desc)`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);
  const styles = {
    jobContainer: {
      overflowX: 'auto',
    },
    jobGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gridGap: '20px',
      padding: '20px',
    },
    jobDescription: {
      position: 'relative',
      border: '1px solid #ccc',
      padding: '20px',
    },
    jobPoint: {
      position: 'absolute',
      top: 0,
      left: '-15px',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: '#fe4444',
    },
    jobTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    jobDescriptionText: {
      fontSize: '16px',
      marginBottom: '5px',
    },
    hr: {
      border: 0,
      height: '1px',
      backgroundColor: '#ccc',
      margin: '20px 0',
    },
  };

  return (
    <>
      <div>
        <Head>
          <title>Ankit Singh</title>
          <meta name="description" content="Ankit Singh Profile" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main
          id="home-section"
          className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div className="sm:text-center lg:text-center ">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">HEY, I&apos;M ANKIT SINGH</span>{' '}
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:text-lg md:mt-5">
              I'm a Senior Software Engineer with expertise in JavaScript,
              Node.js, ReactJS, React Native, HTML/CSS, SCSS, MySQL,
              SQLite/MongoDB, PHP, and Laravel. I have experience in building
              scalable mobile and web applications, optimizing performance, and
              ensuring scalability. My communication and collaboration skills
              enable me to work effectively in cross-functional teams. I have
              received awards for my commitment, determination, and innovative
              projects. I hold a Master's degree in Computer Application from
              Visvesvaraya Technological University, Bangalore. I have built
              several projects, including an educational chatbot assistant and
              an Android app called NearbyPlaces.
            </p>
          </div>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center pb-40">
            <div className="rounded-md shadow">
              <a
                href="https://www.linkedin.com/in/ankitsinghmyself/"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 md:py-4 md:text-lg md:px-10"
                target="_blank"
                rel="noreferrer"
              >
                Connect with me!
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="https://drive.google.com/file/d/1cXjUkPhHm7zFPj0dfIUEFkJ1zwCbPW3-/view?usp=sharing"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-500 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                target="_blank"
                rel="noreferrer"
              >
                My Resume
              </a>
            </div>
          </div>
        </main>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-5xl flex justify-center cursive">EXPERIENCE</h3>
        <hr className="w-10 mt-1 h-1.5 bg-red-500 rounded-full" />
      </div>
      <div style={styles.jobContainer}>
        <div style={styles.jobGrid}>
          {experiences.map((experience) => (
            <div style={styles.jobDescription} key={experience.id}>
              <div style={styles.jobPoint}></div>
              <div>
                <h2 style={styles.jobTitle}>{experience.title}</h2>
                <p style={styles.jobDescriptionText}>{experience.company}</p>
                <p style={styles.jobDescriptionText}>{experience.date}</p>
                {/* <p style={styles.jobDescriptionText}>{experience.location}</p> */}
                <p style={styles.jobDescriptionText}>{experience.details}</p>
              </div>
              <hr style={styles.hr} />
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
                <p className="text-justify text-clip h-20 my-6 text-sm text-gray-700 leading-relaxed !ml-0 !mb-3">
                  {project.description}
                </p>
                Technologies Used:
                <div className="flex justify-left text-sm ">
                  <div className="flex items-center space-x-2">
                    <span>
                      {project.technologies.map((technology) => (
                        <button
                          key={technology}
                          type="button"
                          className="mr-2 bg-gray-300 bg-opacity-50 text-gray-700 p-2 rounded uppercase  leading-none mb-2 "
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
          </div>
        ))}
      </div>
      {numProjects < projects.length && (
        <div className="flex justify-center">
          <button
            className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
            onClick={() => setNumProjects(numProjects + 3)}
          >
            Load More Projects {'>>>'}
          </button>
        </div>
      )}
      <div
        id="about-section"
        className="min-h-screen p-10 bg-gray-100 text-gray-900 flex justify-center"
      >
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
                    React.js | React Native
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
                    MongoDB | MySQL | Firebase | Sanity(Basic)
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
      {/* <div className="flex flex-col items-center justify-center">
        <h3 className="text-5xl flex justify-center cursive">CONTACT ME</h3>
        <hr className="w-10 mt-1 h-1.5 bg-red-500 rounded-full" />
      </div> */}
    </>
  );
}
