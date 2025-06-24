function Project({project}) {
    const {image, title, desc, banners} = project;
    return (<div className="project-card w-[27%] max-lg:w-[100%]">
            <img
                className=" w-full aspect-video object-cover object-left-top"
                src={image}
                alt=""
            />

            <h2 className="text-3xl text-govbay my-4 font-medium dark:text-melrose max-lg:text-center">{title}</h2>
            <p className="max-lg:text-center text-sm dark:text-white">{desc}</p>
            <div className="flex gap-3 mt-4 max-lg:justify-center">
                {banners.map((banner, i) => (
                    <span key={i}
                          className="dark:border-melrose max-lg:justify-center max-lg:flex dark:text-melrose dark:bg-mineshaft  text-govbay px-5 py-1 border border-govbay rounded-md">{banner}</span>
                ))}

            </div>
            <div className="flex justify-between my-8 max-lg:justify-around">
                <a className="dark:text-titanwhite underline decoration-solid text-govbay underline-offset-4"
                   href="">GitHub</a>
                <a className="dark:text-titanwhite underline decoration-solid text-govbay underline-offset-4"
                   href="">View
                    Site</a>
            </div>
        </div>

    )
}

export default Project;