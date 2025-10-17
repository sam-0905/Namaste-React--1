import { createContext, useContext, useState } from "react";


const LoginContext = createContext();

const LoginProvider = ({children}) => {

    const [isLogin,setIsLogin] = useState("true")

    return <LoginContext.Provider value={{state,dipatch}}>{children}</LoginContext.Provider>
}

const useLogin = () => useContext(LoginContext);

export {LoginProvider,useLogin}