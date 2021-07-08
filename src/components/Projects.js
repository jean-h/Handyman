import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import { Parallax } from "react-parallax"

import weeding from '../images/TriLakesWeeding.jpg';


const inlineStyle = {
    background: '#fff',
    left: '50%',
    top: '10%',
    position: 'absolute',
    padding: '10px',
    transform: 'translate(-50%, -50%)',
}

export default function Projects(){
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <Parallax bgImage={weeding} strength={500}>
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full mb-20">          
                        <div className="parallax">
                            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                            Handy Work I've Done
                            </h1>
                            </div>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-white">
                            Yard Work, Organization, Bridge Building, Cat Tree
                            </p>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {projects.map((project) => (
                            <a
                                href={project.link}
                                key={project.image}
                                className="sm:w-1/2 w-100 p-4">
                                <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={project.image}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                    {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                    {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                                </div>
                            </a>
                            ))}
                    </div>
                </div>
             </Parallax>
        </section>
      );
}