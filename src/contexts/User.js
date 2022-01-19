import { createContext } from "react";
import { useState } from "react";

const UserContext = createContext({})

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const value = {
        user,
        setUser
    }
    console.log("log de mon user",user);
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export {
    UserContext,
    UserContextProvider
}