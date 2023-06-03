import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import {HeaderWrapper} from './style'

import { FetchUser } from '../../api';

const Header = () => {
    const {token} = useAuth();
    
    useEffect(()=>{
        FetchUser(token)
    },[])

    return (
        <HeaderWrapper>
            <div>
                Dream House
            </div>
            <div>
                ваш логин 
            </div>
        </HeaderWrapper>
    )
}
export default Header;