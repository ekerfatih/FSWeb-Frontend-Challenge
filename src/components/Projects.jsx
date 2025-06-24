import {useGlobalContext} from "../contexts/GlobalContext.jsx";
import Project from "./Project.jsx";

function Projects() {
    const {content} = useGlobalContext()
    if (!content) return null;
    const {projects} = content;
    return (
        <section className="Projects">
            <h1 className=" max-lg:text-center mb-8 dark:text-cadblue text-5xl font-bold">{projects.heading}</h1>
            <div className="flex justify-between max-lg:flex-col ">

                {projects.projectList.map((project, index) => (
                    <Project project={project} key={index}/>
                ))}


            </div>
        </section>
    )
}

export default Projects;