import React from 'react'
import { useParams } from "react-router-dom"
import { projects } from "../../data/projects"

const ProjectDetails = () => {

    const { slug } = useParams()

    const project = projects.find(p => p.slug === slug)

    if (!project) return <h1>Project not found</h1>
    return (
        <div className="p-20">

            <h1 className="text-6xl mb-10">
                {project.title}
            </h1>

            <img
                src={project.image}
                className="w-full mb-10"
            />

            <p className="text-xl">
                {project.description}
            </p>

        </div>
    )
}

export default ProjectDetails