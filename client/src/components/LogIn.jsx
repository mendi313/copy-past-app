import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { setLogedInUser } from '../data/reducer';
import { setLogin, login } from '../hooks/customHooks';
import Alert from './Alert';
import '../styles/RegisterForm.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');

  const onFinish = (values) => {
    login(values)
      .then((response) => {
        if (response.data) {
          dispatch(setLogedInUser(response.data));
          setLogin(response.data);
          navigate('/');
        }
      })
      .catch((error) => {
        setAlert(true);
        setAlertMsg(error.response.data);
      });
  };

  const switchForm = () => {
    navigate('/createAccount');
  };

  return (
    <div>
      <div className="container">
        {alert && <Alert alertMsg={alertMsg} />}
        <Form form={form} name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input onChange={() => setAlert(false)} type="text" placeholder="Enter your username" />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input onChange={() => setAlert(false)} type="email" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password onChange={() => setAlert(false)} placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="form-button">
              Login
            </Button>
          </Form.Item>
        </Form>

        <div className="form-footer">
          <p>
            Don't have an account? <a onClick={switchForm}>Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
