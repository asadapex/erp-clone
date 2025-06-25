import { useContext, useState, type FC } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Context } from "../context/Context";
import toast, { Toaster } from "react-hot-toast";

const SignInForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setToken } = useContext(Context);
  const onFinish = (values: { username: string; password: string }) => {
    setIsLoading(true);
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        const isUser = data.find(
          (user: { username: string; password: string }) =>
            user.username === values.username &&
            user.password === values.password
        );
        setTimeout(() => {
          if (isUser) {
            setTimeout(() => {
              setToken(true);
              toast.success("Login successful");
            }, 1000);
          } else {
            toast.error("Invalid username or password");
          }
          setIsLoading(false);
        }, 1000);
      });
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Form
        autoComplete="off"
        name="login"
        initialValues={{ remember: true }}
        style={{ maxWidth: 360 }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            allowClear
            size="large"
            prefix={<UserOutlined />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            allowClear
            size="large"
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            loading={isLoading}
            size="large"
            block
            type="primary"
            htmlType="submit"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignInForm;
