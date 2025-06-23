function Skill({skill}) {
    return (
        <div className="card w-[25%]">
            <h2 className="text-3xl text-govbay my-4 font-medium">{skill.title}</h2>
            <p className="text-xs">
                {skill.desc}
            </p>
        </div>
    )
}

export default Skill;