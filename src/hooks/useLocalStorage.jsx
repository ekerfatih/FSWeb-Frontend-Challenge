import {useState} from "react";

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() =>
        JSON.parse(localStorage.getItem(key)) ?? initialValue
    );

    const setValue = (value) => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
};
