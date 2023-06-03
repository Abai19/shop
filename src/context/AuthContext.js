import { createContext, useContext, useState } from "react";


const default_values = {
    token: null,
    login: ()=>{},
    logout: () => {},
}
const AuthContext = createContext(default_values);

export function useAuth () {
    return useContext(AuthContext)
}

export function AuthProvider ({children}) {
    const DEFAULT_TOKEN = localStorage.getItem('token');
    const [token, setToken] = useState(DEFAULT_TOKEN);
    
    const login =(token)=>{
        setToken(token)
        localStorage.setItem('token', token)
    }
    const logout =()=>{
        setToken(null)
        localStorage.removeItem('token')
    }
    const value= {
        token,
        login,
        logout
    }
    return (
        <AuthContext.Provider value = {value}>
            {children}
        </AuthContext.Provider>
    )
}
