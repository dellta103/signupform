import React from "react";
import { Form, Input, Button } from "antd";
import "antd/dist/antd.css";
import { signUpService } from "../services/signUpService";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "./redux/slices/signUpSlice";
import validator from "validator";
export default function FormUser({ setType }) {
  let dispatch = useDispatch();
  const onFinish = (values) => {
    console.log(values);
    dispatch(signUp(values));
    setType(2);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="mt-3">
      <h2 className="text-lg font-semibold">User Form:</h2>
      <Form
        layout="vertical"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Role"
          name="role"
          rules={[
            {
              required: true,
              message: "Please input your role!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
              message: "Invalid email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              validator: async (rule, value, callback) => {
                if (!value) {
                  throw new Error("Please input your password!");
                }
                if (
                  value.length < 10 ||
                  !value.split().every((letter) => {
                    return letter !== letter.toUpperCase();
                  }) ||
                  !value.split().every((letter) => {
                    return letter !== letter.toLowerCase();
                  }) ||
                  !value.split().every((letter) => {
                    return validator.isNumeric(letter) === false;
                  })
                ) {
                  throw new Error(
                    "The minimum password length is 10 characters and must contain at least 1 lowercase letter, 1 uppercase letter and 1 number)"
                  );
                }
              },
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
