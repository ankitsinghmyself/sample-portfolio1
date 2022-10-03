/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Bars2Icon } from '@heroicons/react/24/solid';
export default function projects() {
  const projects = [
    {
      name: 'Ecommerce Nextjs Website with admin panel',
      description:
        'Ecommerce Nextjs Website with admin panel and paypal payment gateway integration',
      image: '/images/feature1.png',
      link: '#',
    },
    {
      name: 'Food Delivery App',
      description: 'Food Delivery App react native',
      image: '/images/feature2.png',
      link: '#',
    },
    {
      name: 'Feature 3',
      description: 'Feature 3 description',
      image: '/images/feature3.png',
      link: '#',
    },
  ];
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-indigo-600">Projects</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            My Projects list goes here
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Web Development, Mobile Development
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {projects.map((project) => (
              <div key={project.name} className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                  <img
                    class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                    alt=""
                  />
                  <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">
                      {project.name}
                    </h5>
                    <p class="text-gray-700 text-base mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
