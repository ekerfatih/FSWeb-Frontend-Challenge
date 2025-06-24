import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {useGlobalContext} from "../contexts/GlobalContext.jsx";

function AboutMe() {
    const {content} = useGlobalContext();
    if (!content) return null;
    const {about} = content;

    const iconMap = {
        faGithub: faGithub,
        faLinkedinIn: faLinkedinIn,
    };
    return (
        <section className="aboutme grid lg:grid-cols-2 gap-4 items-center">
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center">
                <img
                    className="rounded-3xl max-w-full w-[77%] md:w-[60%] lg:w-[90%]"
                    src="picture.png"
                    alt=""
                />
            </div>

            <div className="order-2 lg:order-1 flex flex-col justify-center">
                <div className="flex items-center gap-4 my-4 lg:justify-start justify-center">
                    <hr className="hidden lg:block bg-black h-[1px] w-[20%] text-cornblue dark:text-melrose" />
                    <span className="text-cornblue text-[16px] max-lg:text-2xl font-medium dark:text-melrose">
        {about.name}
      </span>
                </div>

                <h1 className="text-6xl lg:text-4xl xl:text-6xl font-bold my-10 text-gray-700 text-center lg:text-left dark:text-cadblue">
                    {about.title}
                </h1>

                <p className="text-[20px] text-gray-500 dark:text-white text-center lg:text-left">
                    {about.desc}
                </p>

                <div className="flex gap-2 mt-12 text-lg justify-center lg:justify-start flex-wrap">
                    {about.buttons.map((btn, index) =>
                        index === 0 ? (
                            <button
                                key={index}
                                className="min-w-[120px] h-12 w-30 rounded-lg bg-govbay text-white dark:bg-titanwhite dark:text-black"
                            >
                                {btn}
                            </button>
                        ) : (
                            <button
                                key={index}
                                className="min-w-[120px] h-12 w-30 rounded-lg border border-govbay dark:bg-mineshaft dark:border-melrose cursor-pointer"
                            >
                                <FontAwesomeIcon
                                    icon={iconMap[btn.i]}
                                    className="text-[#3730a3] dark:text-melrose"
                                />
                                <span className="ml-2 text-govbay dark:text-melrose">{btn.btn}</span>
                            </button>
                        )
                    )}
                </div>
            </div>
        </section>



    )
}

export default AboutMe;