import {useGlobalContext} from "../contexts/GlobalContext.jsx";

function Header() {
    const {content, switchLanguage, darkMode, switchDarkMode} = useGlobalContext()
    if (!content) return null;
    return (<section className="header mt-4 text-lg">
        <div className="flex lg:justify-end justify-center gap-3">
            {/*<label className="text-sm font-medium text-gray-600 flex">*/}
            {/*    <input*/}
            {/*        onChange={() => switchDarkMode}*/}
            {/*        className="tglchk mr-2"*/}
            {/*        type="checkBox"*/}
            {/*        checked={darkMode}/>*/}
            {/*    {content.header.theme}*/}
            {/*</label>*/}
            <label className="text-sm font-medium text-gray-600 flex items-center dark:text-alto">
                <div className="relative w-[48px] h-[24px]">
                    <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={() => switchDarkMode()}
                        className="tglchk sr-only"
                    />
                    <div
                        className={`absolute inset-0 rounded-full transition-colors duration-300 ease-in-out ${darkMode ? 'bg-gray-500' : 'bg-purplehearth'}`}/>
                    <div
                        className={`absolute top-1/2 right-[4px] w-[18px] h-[18px] bg-transparent rounded-full transform -translate-y-1/2 transition-all duration-300 ease-in-out ${darkMode ? 'translate-x-[-24px]' : 'translate-x-0'}`}>
                        <div
                            className={`absolute inset-0 transition-opacity duration-300 ${darkMode ? 'opacity-0' : 'opacity-100'}`}>
                            <img
                                src="data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23FCD34D' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='7'/%3E%3C/svg%3E"
                                className="scale-150 w-full h-full"
                            />
                        </div>
                        <div
                            className={`absolute inset-0 transition-opacity duration-300 ${darkMode ? 'opacity-100' : 'opacity-0'}`}>
                            <img
                                src="data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='%23FCD34D' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 12a9 9 0 0 0 13.5 7.8 7 7 0 0 1 0-15.6A9 9 0 0 0 3 12z'/%3E%3C/svg%3E"
                                className=" scale-110 w-full h-full"
                            />
                        </div>
                    </div>
                </div>
                <span className="ml-3">{content.header.theme[darkMode ? "light" : "dark"]}</span>
            </label>
            <span className="text-sm font-medium text-gray-600 dark:text-white">|</span>
            <span className="text-sm font-medium text-gray-600 dark:text-boulder">
                    {content.selection === "en" ? content.header.language[0] : null}
                <button
                    onClick={() => switchLanguage()}
                    className="cursor-pointer dark:text-bab text-blue-700 mx-1"
                >{content.header.language[1]}
  </button>
                {content.selection === "tr" ? content.header.language[0] : null}
</span>
        </div>
        <div className="flex lg:justify-between justify-center mt-8 mb-16 max-lg:mb-2">
            <p className="max-lg:hidden bg-lilac min-w-16 min-h-16 text-center content-center rounded-full rotate-z-35 text-cornblue text-2xl font-bold dark:bg-cornblue dark:text-gray-300">A</p>
            <ul className="flex flex-row gap-20 max-xl:gap-15 max-lg:gap-10 max-md:gap-5">
                {content.header.navbar.map((item, index, array) => index === array.length - 1 ? (<li key={index}>
                    <button
                        className="min-w-[120px] dark:bg-white px-6 py-3 border border-purple-800 cursor-pointer text-purple-800 rounded-lg">
                        {item}
                    </button>
                </li>) : (<li key={index}>
                    <button className="dark:text-gray-400 px-6 py-3">{item}</button>
                </li>))}
            </ul>
        </div>
    </section>)
}

export default Header;