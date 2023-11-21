import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input} from 'antd';
const Login = () => {
    const [form] = Form.useForm();
    const [clientReady, setClientReady] = useState(false);
    const [data,setData] = useState({})
    // To disable submit button at the beginning.
    useEffect(() => {
        setClientReady(true);
    }, []);
    const onSubmit = (values) => {
        const { username, password } = data;

        if (username === 'test1' && password === 'test2') {
            alert('Success'); // Log success message
        } else {
            alert('Error'); // Log error message
        }
    };
    function handleInputChange(e){
        let authData = {
            ...data,
            [e.target.name]:e.target.value
        }
        setData(authData);
        console.log(authData)
    }
    const onFinish = (values) => {
        console.log('Finish:', values);
    };
    return (
        <>
            <Form form={form}  onFinish={onFinish}>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите имя пользователя!',
                        },
                    ]}
                >
                    <Input
                        name="username"
                        size='large'
                        onChange={handleInputChange}
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите пароль!',
                        },
                    ]}
                >
                    <Input
                        name="password"
                        size='large'
                        onChange={handleInputChange}
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item shouldUpdate>
                    {() => (
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={
                                !clientReady ||
                                !form.isFieldsTouched(true) ||
                                !!form.getFieldsError().filter(({ errors }) => errors.length).length
                            }
                            onClick={onSubmit}
                        >
                            Log in
                        </Button>
                    )}
                </Form.Item>
              </Form>
        </>
    );
};
export default Login
