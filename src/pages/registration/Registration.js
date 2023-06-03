import {
    Button,
    Form,
    Input,
  } from 'antd';

import {useForm, Controller} from 'react-hook-form'

import {FormWrapper, Title} from './style'

import {FetchRegistration} from '../../api'

const Registration = () => {
    const {control, handleSubmit} = useForm();

    const onSubmitData = (data) =>{
        FetchRegistration(data)
    }
    return (
        <FormWrapper onSubmit={handleSubmit(onSubmitData)}>
                <Title>
                    Регистрация
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
                        name='email'
                        control={control}
                        render={({field})=>(
                            <Input {...field} placeholder='E-mail' />
                        )}
                    />
                </Form.Item>

                <Form.Item>
                    <Controller
                        name='password'
                        control={control}
                        render={({field})=>(
                            <Input {...field} placeholder='Пароль' />
                        )}
                    />
                </Form.Item>

                <Form.Item>
                    <Controller
                        name='password2'
                        control={control}
                        render={({field})=>(
                            <Input {...field} placeholder='Подтвердите пароль' />
                        )}
                    />
                </Form.Item>

                <Form.Item>
                    <Controller
                        name='first_name'
                        control={control}
                        render={({field})=>(
                            <Input {...field} placeholder='Имя' />
                        )}
                    />
                </Form.Item>

                
                <Form.Item>
                    <Controller
                        name='last_name'
                        control={control}
                        render={({field})=>(
                            <Input {...field} placeholder='Фамилия' />
                        )}
                    />
                </Form.Item>

                <Form.Item>
                    <Controller
                        name='phone_number'
                        control={control}
                        render={({field})=>(
                            <Input {...field} placeholder='Номер телефона' />
                        )}
                    />
                </Form.Item>

                <Button block htmlType='submit' type='primary'> Зарегистрироваться</Button>
        </FormWrapper>
    )
}

export default Registration;