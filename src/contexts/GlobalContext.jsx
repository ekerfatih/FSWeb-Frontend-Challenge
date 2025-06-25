import {createContext, useContext, useEffect, useState} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage.jsx";
import {data} from '../mock/data.js'
import axios from "axios";
import {toast} from "react-toastify";

export const GlobalContext = createContext();

export function GlobalContextProvider({children}) {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
    const [language, setLanguage] = useLocalStorage("language", "tr");
    const [content, setContent] = useState(null);

    const switchLanguage = () => {
        setLanguage(language === "tr" ? "en" : "tr")
        toast.success(language === 'en' ? 'Dil türkçe olarak ayarlandı' : 'Language set as english', {autoClose: 1000,});
    }

    const switchDarkMode = () => {
        setDarkMode(!darkMode)
        toast.success(
            darkMode
                ? language === 'tr'
                    ? "Aydınlık mod aktif"
                    : "Light mode active"
                : language === 'tr'
                    ? "Karanlık mod aktif"
                    : "Dark mode active"
            , {theme: darkMode ? "light" : "dark", autoClose: 1000});
    }

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

    const value = {darkMode, switchDarkMode, language, switchLanguage, content};

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => useContext(GlobalContext);
