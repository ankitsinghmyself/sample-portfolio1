import React from "react";

const HeroSection = () => {
  return (
    <>
      <div>
        <title>Ankit Singh</title>
        <meta name="description" content="Ankit Singh Profile" />
        <link rel="icon" href="/favicon.ico" />
      </div>
      <main
        id="home-section"
        className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
      >
        <div className="sm:text-center lg:text-center ">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">HEY, I&apos;M ANKIT SINGH</span>{" "}
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:text-lg md:mt-5">
            I&apos;m a Senior Software Engineer with expertise in JavaScript,
            Node.js, ReactJS, React Native, Angular, HTML/CSS, SCSS, MySQL, and
            SQLite/MongoDB. I have experience in building scalable mobile and
            web applications, optimizing performance, and ensuring scalability.
            My communication and collaboration skills enable me to work
            effectively in cross-functional teams. I have received awards for my
            commitment, determination, and innovative projects. I hold a
            Master&apos;s degree in Computer Application from Visvesvaraya
            Technological University, Bangalore. I have built several projects,
            including an educational chatbot assistant and an Android app called
            NearbyPlaces.
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
    </>
  );
};

export default HeroSection;
