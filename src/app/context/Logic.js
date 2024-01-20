import MyContext from "./MyContext";

export default function Logic({ children }) {
    // Requisição do cadastro

    const obj = {

    }

    return (
        <MyContext.Provider value={ obj }>
            { children }
        </MyContext.Provider>
    )
}