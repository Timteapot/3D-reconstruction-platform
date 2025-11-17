import "./index.scss"
import logo from "../../assets/logo.png"
import bg from "../../assets/bg.jpg"
import lgbg from "../../assets/lgbg.jpg"
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from "../../api/user";
import { setToken } from "../../store/user/AuthSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [form] = Form.useForm();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish: FormProps['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleLogin = () => {
    form.validateFields()
      .then(async (values) => {    // values包含表单字段和值
        setLoading(true);
        console.log('Validated values:', values);
        try {
          const response = await login(values);
          const { data: { token } } = response;
          console.log('Login successful, token:', token);
          if (token) {
            dispatch(setToken(token));
            sessionStorage.setItem('username', values.username); 
            navigate('/', { replace: true }); // 登录成功后跳转到首页,replace: true表示替换当前历史记录，防止用户点击后退按钮返回登录页
          } else {
            console.error('Login failed: No token received');
          }
        } catch (error) {
          console.error('Login failed:', error);
        }
      })
      .catch((errorInfo) => {
        console.log('Validation Failed:', errorInfo);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  return (
    <div className="login" style={{ background: `url(${bg})` }}>
      
      <div className="lgbg" style={{ background: `url(${lgbg})` }}>
        <div className="login-box">
          <div className="top">
            <div className="login-logo">
              <img src={logo} width={100} alt="" />
            </div>
            <h1>三维重建平台</h1>
          </div>
          <Form
            form={form}
            name="basic"
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder="username" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' },
              { min: 6, max: 18, message: 'Password must be at least 6 characters long' },
              { pattern: /^[a-zA-Z0-9_]+$/, message: 'Password can only contain letters, numbers, and underscores' }
              ]}
            >
              <Input.Password placeholder="password" prefix={<LockOutlined />} />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" label={null}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit" style={{ width: "100%" }} onClick={handleLogin} loading={loading}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}
export default Login;