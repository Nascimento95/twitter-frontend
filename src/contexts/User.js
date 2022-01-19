import { createContext, useEffect, useState } from "react";

const UserContext = createContext({})

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async() => {
        const response = await fetch (`http://localhost:5000/auth/me`, {
            credentials: "include",
        })
        if (response.status >= 400) {
            throw response.stautusText
        }
        const user = await response.json()
        console.log("DonRico", user);
    
        setUser(user)
    }


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