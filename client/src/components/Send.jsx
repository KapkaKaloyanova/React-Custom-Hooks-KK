import '@ant-design/v5-patch-for-react-19';

import { Input, Button, message } from "antd";
import { SendOutlined } from "@ant-design/icons";
import useForm from "../hooks/useForm";

export default function Send({
  user, 

}) {
    const [messageApi, contextHolder] = message.useMessage();
    
    const formSubmit = async (values) => {

    await fetch('http://localhost:3030/jsonstore/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        author: user,
        content: values.message,
      }),
    });

    messageApi.open({
        type: 'success',
        content: 'Successfully sent message',
    });
  };
    
    const { values, changeHandler, submitHandler } = useForm(formSubmit, {
        message: '',
        author: '',
    });

  
  return (
    <>
      {contextHolder}
      <form onSubmit={submitHandler}>
        <Input
          size="large"
          name="message"
          value={values.message}
          onChange={changeHandler}
          placeholder="large size"
          prefix={<SendOutlined />}
        />
        <Button type="primary" htmlType="submit">Send</Button>
      </form>
    </>
  );
}
