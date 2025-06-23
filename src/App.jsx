import './App.css'
import Header from './components/Header.jsx';
import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/Skills.jsx";
import Profile from "./components/Profile.jsx";
import Footer from "./components/Footer.jsx";
import Projects from "./components/Projects.jsx";

function App() {

    return (
        <>
            <div className="flex flex-col items-center font-[Inter]">
                <div className="justify-center flex w-[75%]">
                    <div className="w-[80%]">
                        <Header/>
                        <AboutMe/>
                        <Skills/>
                        <Profile/>
                        <Projects/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    )
}

export default App
