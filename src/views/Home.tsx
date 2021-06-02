import React, { ReactElement } from 'react';
import './Home.css';

export default function Home(): ReactElement {
  return (
    <div className="container mx-auto grid grid-cols-12 p-4 flex-grow">
      <div
        className="
        col-span-12
        sm:col-span-9
        md:col-span-8
        mb-3
        sm:mb-0
        flex flex-col
        justify-center
        text-gray-800
      "
      >
        <h1
          className="text-yellow-500 
          text-4xl 
          sm:text-5xl 
          md:text-6xl 
          sm:px-4
          "
        >
          Matheus Sartoretto
        </h1>
        <h2 className="text-green-300 text-xl sm:text-3xl md:text-4xl sm:px-4">
          Front-end developer
        </h2>
        <div className="mt-3 sm:mt-8">
          <a
            className="pr-3 sm:px-4"
            href="https://github.com/strokesws"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github-alt text-xl sm:text-5xl" />
          </a>
          <a
            className="pl-3 sm:px-4"
            href="https://linkedin.com/in/matheussartoretto/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in text-xl sm:text-5xl" />
          </a>
        </div>
      </div>
      <div
        className="
        col-span-12
        sm:col-span-3
        md:col-span-4
        flex flex-col
        justify-center
      "
      />
    </div>
  );
}
