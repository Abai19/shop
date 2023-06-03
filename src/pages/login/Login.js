import {
    FormWrapper,
    Title,
    TitleLink
} from './style'

import {
    Button,
    Form,
    Input,
    message,
} from 'antd';

import {useForm, Controller} from 'react-hook-form'

import { FetchAuth } from '../../api';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const {control, handleSubmit} = useForm();
    const {login} = useAuth();
    
    const router = useNavigate()

    const onSubmitData = async (data) =>{
        const res = await FetchAuth(data);
        if(res.access){
            login(res.access);
            router('/');
            message.success('Добро пожаловать!')
        }
        else if(res.detail) {
            message.error(res.detail)
        }   
        else {
            message.error("Что то пошло не так!")
        }
    }
    
    return (
        <FormWrapper onSubmit={handleSubmit(onSubmitData)}>
            <Title>
                Войти
            </Title>
            <Form.Item>
                <Controller
                    name='username'
                    control={control}
                    render={({field})=>(
                        <Input {...field} placeholder='Логин' />
                    )}
                />
            </Form.Item>
            <Form.Item>
                <Controller
                    name='password'
                    control={control}
                    render={({field})=>(
                        <Input {...field} placeholder='Пароль' type="password" />
                    )}
                />
            </Form.Item>
            <TitleLink>
                <span>Нет аккаунта?</span>       
                <Link to={'/registration'}>
                     зарегистрируйся
                </Link>
            </TitleLink>
            <Button 
                block 
                htmlType='submit' 
                type='primary'
            > 
                Войти
            </Button>

        </FormWrapper>
    )
}
export default Login