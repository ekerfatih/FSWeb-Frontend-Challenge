function Skill({skill}) {
    return (
        <div className="card lg:w-[25%]">
            <h2 className="dark:text-melrose text-3xl text-govbay my-4 font-medium">{skill.title}</h2>
            <p className="dark:text-white text-xs">
                {skill.desc}
            </p>
        </div>
    )
}

export default Skill;