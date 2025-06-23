import {useGlobalContext} from "../contexts/GlobalContext.jsx";
import Skill from "./Skill.jsx";

function Skills() {
    const { content } = useGlobalContext();
    if (!content) return null;
    const { skills } = content;
    return (
        <>
            <section className="Skills">
                <h1 className="mt-30 mb-8 text-5xl font-bold">{skills.heading}</h1>
                <div className="flex justify-between">
                    {skills.skillList.map((skill,index) => (
                        <Skill key={index} skill={skill} />
                    ))}
                </div>
            </section>
            <hr className="my-10 text-cornblue"/>
        </>
    )
}

export default Skills;