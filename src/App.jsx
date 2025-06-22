import './App.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

function App() {

    return (
        <div className="flex justify-center font-[Inter]">
            <div className="justify-center flex w-[75%]">
                <div className="w-[80%]">
                    <section className="mt-4 text-lg">
                        <div className="flex justify-end gap-3 ">
                            <label>
                                <input className="mr-2" type="checkBox"/>DARK MODE
                            </label>
                            <span>|</span>
                            <span><a>TÜRKÇE</a>'YE GEÇ</span>
                        </div>
                        <div className="flex justify-between mt-8 mb-16">
                            <p className="bg-lilac w-16 h-16 text-center content-center rounded-full rotate-z-35 text-cornblue text-2xl font-bold">A</p>
                            <ul className="flex flex-row gap-20">
                                <li>
                                    <button>Skills</button>
                                </li>
                                <li>
                                    <button>Projects</button>
                                </li>
                                <li>
                                    <button>Hire me</button>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="flex">
                        <div className="w-[50%]">
                            <div className="flex items-center justify-left gap-4 my-4">
                                <hr className="bg-black h-.1 w-[20%] text-cornblue"/>
                                <span className="text-cornblue text-[20px] font-medium">Almila Su</span>
                            </div>
                            <div>
                                <h1 className="text-7xl font-bold my-10 text-gray-700">Creative thinker Minimalism
                                    lover</h1>
                                <p className="text-[25px] text-gray-500">Hi, I'm Almila. I'm a full-stack developer. If
                                    you are looking for a
                                    Developer who to craft solid and scalable frontend products with
                                    great user experiences. Let's shake hands with me.
                                </p>
                            </div>
                            <div className="gap-2 flex mt-12 text-lg">
                                <button
                                    className="border text-white bg-govbay  w-30 h-12 rounded-lg">Hire
                                    me
                                </button>
                                <button className="border border-govbay w-30 h-12 rounded-lg">
                                    <FontAwesomeIcon icon={faGithub} style={{color: "#3730a3"}}/><span
                                    className="ml-2 text-govbay">GitHub</span>
                                </button>
                                <button className="border border-govbay w-30 h-12 rounded-lg">
                                    <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#3730a3"}}/><span
                                    className="ml-2 text-govbay">LinkedIn</span>
                                </button>

                            </div>
                        </div>
                        <div className="w-[50%] flex justify-center items-center ">
                            <img className="h-[80%] rounded-3xl" src="public/picture.png" alt=""/>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default App
