import { useAuth } from "../context/AuthContext";

import { Spin, message } from "antd";

import { Box } from "./style";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (Component) => (props)=> {
    const {token} = useAuth();
    const router = useNavigate();

    useEffect(()=> {
        if(!token){
            router('/login');
            message.error('Пожалуйста войдите в аккаунт!')
        }
    }, [token])

    if(token){
        return(
            <Component {...props}/>
        )
    }
    return (
        <Box>
            <Spin size="large" />
        </Box>
    )
} 

export default withAuth;