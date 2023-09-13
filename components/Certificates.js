import React, { useState } from "react";
import { urlFor } from "../sanity";

export default function Certificates(props) {
  const { data } = props;
  const [numCerti, setNumCerti] = useState(3);

  return (
    <section id="certificates-section">
      <div className="flex flex-col items-center justify-center pt-8">
        <h3 className="text-5xl flex justify-center cursive">
          {"Certificates".toUpperCase()}
        </h3>
        <hr className="w-10 mt-1 h-1.5 bg-red-500 rounded-full" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center  ">
          {data.slice(0, numCerti).map((certificate) => (
            <div className="flex justify-center" key={certificate._id}>
              <div className="bg-white rounded-lg shadow-lg p-4 m-4">
                <div className="flex">
                  <div className="w-1/3">
                    <img
                      src={urlFor(certificate.image).url()}
                      alt={certificate.title}
                      className="h-full w-full object-cover rounded"
                    />
                  </div>
                  <div className="w-2/3 pl-4">
                    <h2 className="text-xl font-bold mb-2">
                      <a
                        href={certificate.link}
                        alt={certificate.title}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {certificate.title}
                      </a>
                    </h2>
                    <p>
                      <span className="text-right">
                        {new Date(certificate.date).toLocaleString("en-US", {
                          month: "long",
                        })}{" "}
                        {new Date(certificate.date).getFullYear()}
                      </span>
                    </p>
                    <p>
                      <span>
                        <div className="flex  flex-wrap">
                          {certificate.technologies.map((technology) => (
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
        <div className=" items-center justify-center py-5  ">
          {numCerti < data.length && (
            <div className="flex  justify-center">
              <button
                className="border border-red-500 hover:bg-red-500  hover:text-white font-bold py-2 px-4 rounded"
                onClick={() => setNumCerti(numCerti + 3)}
              >
                More Certificates
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
