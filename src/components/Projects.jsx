import {useGlobalContext} from "../contexts/GlobalContext.jsx";
import Project from "./Project.jsx";

function Projects() {
    const {content} = useGlobalContext()
    if (!content) return null;
    const {projects} = content;
    return (
        <section className="Projects">
            <h1 className="mb-8 text-5xl font-bold">{projects.heading}</h1>
            <div className="flex justify-between">

                {projects.projectList.map((project, index) => (
                    <Project project={project} key={index}/>
                ))}


            </div>
        </section>
    )
}

export default Projects;