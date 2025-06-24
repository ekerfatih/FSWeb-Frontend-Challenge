import {useGlobalContext} from "../contexts/GlobalContext.jsx";
import Skill from "./Skill.jsx";

function Skills() {
    const {content} = useGlobalContext();
    if (!content) return null;
    const {skills} = content;
    return (
        <>
            <section className="Skills">
                <h1 className="max-lg:text-center mt-30 mb-8 text-5xl font-bold dark:text-cadblue">{skills.heading}</h1>
                <div className="max-lg:text-center max-lg:items-center flex justify-between max-lg:flex-col">
                    {skills.skillList.map((skill, index) => (
                        <Skill key={index} skill={skill}/>
                    ))}
                </div>
            </section>
            <hr className="my-10 dark:text-melrose text-cornblue"/>
        </>
    )
}

export default Skills;