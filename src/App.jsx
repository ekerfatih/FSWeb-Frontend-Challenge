import './App.css'
import Header from './components/Header.jsx';
import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/Skills.jsx";
import Profile from "./components/Profile.jsx";
import Footer from "./components/Footer.jsx";
import Projects from "./components/Projects.jsx";

function App() {

    return (
        <div className="dark:bg-bgclr">
            <div className="flex flex-col items-center font-[Inter] ">
                <div className="justify-center flex lg:w-[75%]">
                    <div className="xl:w-[80%] w-[90%]">
                        <Header/>
                        <AboutMe/>
                        <Skills/>
                        <Profile/>
                        <Projects/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default App
