import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
    HeaderWrapper,
    UserBlock,
} from './style'

import { FetchUser } from '../../api';
import {
    Dropdown,
    Button
} from "antd";

import {Link, useNavigate} from 'react-router-dom';
import {MenuOutlined} from '@ant-design/icons';

const Header = () => {
    const {token, logout} = useAuth();
    
    useEffect(()=>{
        FetchUser(token)
    },[])

    const router = useNavigate();
    
    const handleSignOut = () => {
        localStorage.removeItem('login');
        logout();
        router('/login')
    }   

    const items = [
        {
          key: '1',
          label: (
            <Link to={'/profile'}>
                Мой профиль
            </Link>
          ),
        },
        {
          key: '2',
          label: (
            <span onClick={handleSignOut}>
                Выйти 
            </span>
          ),
        }
    ]

    return (
        <HeaderWrapper>
            <div>
                Dream House
            </div>
            <UserBlock>
               <p> Добро пожаловать, {localStorage.getItem('login')}!</p> 
               <Dropdown
                    menu={{items}}
                    placement="bottom"
                >
                    <Button>
                        <MenuOutlined />
                    </Button>
                </Dropdown>
            </UserBlock>
        </HeaderWrapper>
    )
}
export default Header;