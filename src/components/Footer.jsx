import {useGlobalContext} from "../contexts/GlobalContext.jsx";

function Footer() {
    const {content} = useGlobalContext()
    if (!content) return null;
    const {footer} = content;
    return (
        <footer className="mt-50 h-[40%] bg-gray-100 flex justify-center dark:bg-black">
            <div className="justify-center flex w-[75%]">
                <div className="w-[80%] max-lg:w-[100%]">
                    <div className="w-[50%] max-lg:w-[100%]">
                        <h1 className="dark:text-cadblue mt-20 text-5xl max-lg:text-3xl max-lg:text-center h-auto font-medium">{footer.heading}</h1>
                    </div>
                    <div className="max-lg:flex-col  flex justify-between my-20 max-lg:my-10 ">
                        <div className="max-lg:text-center">
                            <span>👉</span><a
                            className=" dark:text-melrose text-2xl underline-offset-2 underline text-red-700 "
                            href="">almilasucode@gmail.com</a>
                        </div>
                        <div>
                            <ul className="flex gap-6 text-xl font-medium max-lg:mt-5 dark:text-lilac max-lg:justify-center">
                                <li>{footer.blog}</li>
                                <li className="text-green-700">Github</li>
                                <li className="text-blue-700">Linkedin</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;