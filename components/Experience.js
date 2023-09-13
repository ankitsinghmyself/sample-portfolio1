import React from "react";
import exp from "../public/Exp.module.css";

export default function Experience(props) {
  const { data } = props;
  return (
    <section id="exp-section">
      <div className="flex flex-col items-center justify-center pt-8">
        <h3 className="text-5xl flex justify-center cursive">EXPERIENCE</h3>
        <hr className="w-10 mt-1 h-1.5 bg-red-500 rounded-full" />
        <div className={exp.container}>
          {data.map((experience, index) => (
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
    </section>
  );
}
