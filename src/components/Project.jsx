function Project({project}) {
    const {image, title, desc, banners} = project;
    return (<div className="project-card w-[27%]">
            <img
                className=" w-full aspect-video object-cover object-left-top"
                src={image}
                alt=""
            />

            <h2 className="text-3xl text-govbay my-4 font-medium">{title}</h2>
            <p className="text-sm">{desc}</p>
            <div className="flex gap-3 mt-4">
                {banners.map((banner, i) => (
                    <span key={i} className="text-govbay px-5 py-1 border border-govbay rounded-md">{banner}</span>
                ))}

            </div>
            <div className="flex justify-between my-8">
                <a className="underline decoration-solid text-govbay underline-offset-4"
                   href="">GitHub</a>
                <a className="underline decoration-solid text-govbay underline-offset-4"
                   href="">View
                    Site</a>
            </div>
        </div>

    )
}

export default Project;