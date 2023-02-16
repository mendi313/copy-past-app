import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { setLogedInUser } from '../data/reducer';
import { setLogin, register } from '../hooks/customHooks';
import Alert from './Alert';
import '../styles/CreateAccount.css';

const CreateAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');

  const onFinish = (values) => {
    register(values)
      .then((response) => {
        if (response.status === 200) {
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
    navigate('/logIn');
  };

  return (
    <div>
      <div className="createAccount-container">
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

          <Form.Item
            label="Confirm Password"
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('The two passwords that you entered do not match!');
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="form-button">
              Create Account
            </Button>
          </Form.Item>
        </Form>

        <div className="form-footer">
          <p>
            Already have an account? <a onClick={switchForm}>Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
