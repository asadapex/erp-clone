import { useContext, useState, type FC } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import toast, { Toaster } from "react-hot-toast";
import { instance } from "../hooks/instance";
import { Context } from "../context/Context";
import { useCookies } from "react-cookie";

const SignInForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setToken } = useContext(Context);
  const [_cookie, setCookie] = useCookies(["token"]);

  const onFinish = (values: { username: string; password: string }) => {
    setIsLoading(true);
    instance
      .post(`/user/login`, {
        username: values.username,
        password: values.password,
      })
      .then((data) => {
        setIsLoading(false);
        toast.success("Xush kelibsiz");
        setCookie("token", data.data.accessToken);
        setTimeout(() => {
          setToken(data.data.accessToken);
          location.pathname = "/";
        }, 800);
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
            style={{ width: "350px" }}
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
