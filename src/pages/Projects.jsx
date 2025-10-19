import React from "react";
import projects from "../utils/projectsData";

const Projects = () => (
  <div className="p-8">
    <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">My Projects</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((proj) => (
        <div key={proj.id} className="bg-white shadow rounded-lg p-4">
          <img src={proj.image} alt={proj.title} className="rounded-lg mb-3" />
          <h3 className="text-xl font-semibold">{proj.title}</h3>
          <p className="text-sm mt-2">{proj.description}</p>
          <a href={proj.link} target="_blank" className="text-indigo-500 hover:underline mt-2 block">View Project</a>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
