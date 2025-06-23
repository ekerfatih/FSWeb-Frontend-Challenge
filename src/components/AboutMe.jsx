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
        <section className="aboutme flex gap-20">
            <div className="w-[60%]">
                <div className="flex items-center justify-left gap-4 my-4">
                    <hr className="bg-black h-.1 w-[20%] text-cornblue"/>
                    <span className="text-cornblue text-[16px] font-medium">{about.name}</span>
                </div>
                <div>
                    <h1 className="text-7xl font-bold my-10 text-gray-700">{about.title}</h1>
                    <p className="text-[20px] text-gray-500">
                        {about.desc}
                    </p>
                </div>
                <div className="gap-2 flex mt-12 text-lg">

                    {
                        about.buttons.map((btn, index) =>
                            index === 0 ?
                                (
                                    <button
                                        className="border cursor-pointer text-white bg-govbay  w-30 h-12 rounded-lg">{btn}
                                    </button>) :
                                (
                                    <button className="border cursor-pointer border-govbay w-30 h-12 rounded-lg">
                                        <FontAwesomeIcon icon={iconMap[btn.i]} style={{color: "#3730a3"}}/><span
                                        className="ml-2 text-govbay">{btn.btn}</span>
                                    </button>
                                )
                        )
                    }


                </div>
            </div>
            <div className="w-[50%] flex justify-end items-center ">
                <img className="rounded-3xl" src="public/picture.png" alt=""/>
            </div>
        </section>

    )
}

export default AboutMe;