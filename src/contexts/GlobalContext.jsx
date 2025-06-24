import {createContext, useContext, useEffect, useState} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage.jsx";
import {data} from '../mock/data.js'
import axios from "axios";

export const GlobalContext = createContext();

export function GlobalContextProvider({children}) {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
    const [language, setLanguage] = useLocalStorage("language", "tr");
    const [content, setContent] = useState(null);

    useEffect(() => {
        const postData = async () => {
            try {
                const response = await axios.post(
                    "https://reqres.in/api/workintech",
                    data,
                    {
                        headers: {
                            "x-api-key": "reqres-free-v1"
                        }
                    }
                );
                setContent(response.data[language]);
                console.log(response.data[language]);
            } catch (err) {
                console.error("API error:", err);
            }
        };
        postData();
    }, [language]);
    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    const value = {darkMode, setDarkMode, language, setLanguage, content};

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => useContext(GlobalContext);
