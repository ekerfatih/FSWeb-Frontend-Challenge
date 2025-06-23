import {useGlobalContext} from "../contexts/GlobalContext.jsx";

function Header() {
    const {content, language, setLanguage} = useGlobalContext()
    if (!content) return null;
    return (
        <section className="header mt-4 text-lg">
            <div className="flex justify-end gap-3 ">
                <label>
                    <input className="mr-2" type="checkBox"/>{content.header.theme}
                </label>
                <span>|</span>
                {content.selection === "en" &&
                    <span>{content.header.language[0]}
                        <button onClick={() => language === "tr" ? setLanguage("en") : setLanguage("tr")}
                                className="cursor-pointer text-blue-700">{content.header.language[1]}</button></span>}
                {content.selection === "tr" &&
                    <span><button onClick={() => language === "tr" ? setLanguage("en") : setLanguage("tr")}
                                  className="cursor-pointer text-blue-700">{content.header.language[1]}</button>
                        {content.header.language[0]}</span>}
            </div>
            <div className="flex justify-between mt-8 mb-16">
                <p className="bg-lilac w-16 h-16 text-center content-center rounded-full rotate-z-35 text-cornblue text-2xl font-bold">A</p>
                <ul className="flex flex-row gap-20">
                    {content.header.navbar.map((item, index, array) =>
                        index === array.length - 1 ? (
                            <li key={index}>
                                <button
                                    className="px-6 py-3 border border-purple-800 cursor-pointer text-purple-800 rounded-lg">
                                    {item}
                                </button>
                            </li>
                        ) : (
                            <li key={index}>
                                <button className="px-6 py-3">{item}</button>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </section>
    )
}

export default Header;