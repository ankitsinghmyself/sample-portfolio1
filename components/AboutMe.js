import React from "react";

export default function AboutMe() {
  return (
    <div id="about-section" className="p-10 text-gray-900 flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl flex justify-center cursive">ABOUT ME</h1>
        <hr className="w-10 mt-1 h-1.5 bg-red-500 rounded-full" />
        <p className="text-lg text-gray-600  text-center mb-12 space-x-4 w-4/6 ">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology. I&apos;m
          a <b>Web & Mobile Developer</b> &nbsp; building the Front-end of
          Websites and Mobile Applications that leads to the success of the
          overall product. Check out some of my work in the Projects section. I
          also like sharing content related to the stuff that I have learned
          over the years in Web Development so it can help other people of the
          Dev Community. Feel free to Connect or Follow me on my
          <a href="https://www.linkedin.com/in/ankitsinghmyself/">
            <b>Linkedin</b>
          </a>
          &nbsp; where I post useful content related to
          <strong>Mobile Development</strong> and Programming I&apos;m open to
          Job opportunities where I can contribute, learn and grow. If you have
          a good opportunity that matches my skills and experience then
          don&apos;t hesitate to contact me.
        </p>
      </div>
    </div>
  );
}
