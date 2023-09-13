import React, { useState, useEffect } from "react";
import sanityClient from "../sanity";
import Experience from "./Experience";
import Projects from "./Projects";
import Certificates from "./Certificates";

const PortfolioSection = () => {
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);

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

        const certificatesData = await sanityClient.fetch(
          `*[_type == "certifications"] {...} | order(date desc)`
        );
        setCertificates(certificatesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-8">
        <Experience data={experiences} />
      </div>
      <div className="flex flex-col items-center justify-center pt-8">
        <Projects data={projects} />
      </div>
      <div className="flex flex-col items-center justify-center pt-8">
        <Certificates data={certificates} />
      </div>
    </>
  );
};

export default PortfolioSection;
