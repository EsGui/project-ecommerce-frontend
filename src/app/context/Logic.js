import MyContext from "./MyContext";

export default function Logic({ children }) {
    const obj = {

    }

    return (
        <MyContext.Provider value={ obj }>
            { children }
        </MyContext.Provider>
    )
}