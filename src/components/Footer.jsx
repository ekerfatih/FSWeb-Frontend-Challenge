import {useGlobalContext} from "../contexts/GlobalContext.jsx";

function Footer() {
    const {content} = useGlobalContext()
    if (!content) return null;
    const {footer} = content;
    return (
        <footer className="mt-50 h-[40vh] bg-gray-100 flex justify-center">
            <div className="justify-center flex w-[75%]">
                <div className="w-[80%]">
                    <div className="w-[50%]">
                        <h1 className="mt-20 text-5xl h-auto font-medium">{footer.heading}</h1>
                    </div>
                    <div className="flex justify-between my-20">
                        <div>
                            <span>👉</span><a className="text-2xl underline-offset-2 underline text-red-700 "
                                             href="">almilasucode@gmail.com</a>
                        </div>
                        <div>
                            <ul className="flex gap-6 text-xl font-medium">
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