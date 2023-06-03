import {
    Button,
    Form,
    Input,
  } from 'antd';

  import {Controller, useForm} from 'react-hook-form'
  import {FetchRegistration} from '../../api'
  import {FormWrapper, Title, TitleLink} from './style'
import { Link } from 'react-router-dom';

const Registration = () => {
    const {control, handleSubmit} = useForm();

    const onSubmitData = (data) =>{
        FetchRegistration(data)
    }
    return (
        <FormWrapper onSubmit={handleSubmit(onSubmitData)}> 
        <Title>Регистрация</Title>
        <Form.Item>
            <Controller
            name='username'
            control={control}
            render={({field})=>(
                <Input {...field} placeholder='Логин'/>
            )}
            />
        </Form.Item>
        <Form.Item>
            <Controller
            name='email'
            control={control}
            render={({field})=>(
                <Input {...field} placeholder='E-mail'/>
            )}
            />
        </Form.Item>
        <Form.Item>
            <Controller
            name='password'
            control={control}
            render={({field})=>(
                <Input {...field} placeholder='Пароль'/>
            )}
            />
        </Form.Item>
        <Form.Item>
            <Controller
            name='password2'
            control={control}
            render={({field})=>(
                <Input {...field} placeholder='Подтвердите пароль'/>
            )}
            />
        </Form.Item>
        <Form.Item>
            <Controller
            name='first_name'
            control={control}
            render={({field})=>(
                <Input {...field} placeholder='Имя'/>
            )}
            />
        </Form.Item>
        <Form.Item>
            <Controller
            name='last_name'
            control={control}
            render={({field})=>(
                <Input {...field} placeholder='Фамилия'/>
            )}
            />
        </Form.Item>
        <Form.Item>
            <Controller
            name='phone_number'
            control={control}
            render={({field})=>(
                <Input {...field} placeholder='Номер телефона'/>
            )}
            />
        </Form.Item>
                <TitleLink>
                    <span>Есть аккаунта?</span>
                    <Link to={'/login'}>войти</Link>
                </TitleLink>
                <Button block htmlType='submit' type='primary'>Зарегистрироваться</Button>
  
        </FormWrapper>
    )
}
export default Registration