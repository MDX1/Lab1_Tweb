import { Form, Input, Button, Checkbox } from 'antd';
import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

export const Inputs = () =>{

    const openNotification = () => {
        notification.open({
          message: 'Notificare',
          description:
            'Informatia a fost salvata ;)',
          icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
      };

    const onFinish = (values: any) => {
    console.log('Success:', values);
        };
    
      const onFinishFailed = (errorInfo: any) => { 
      console.log('Failed:', errorInfo);
         };

    return(

        
        
        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input />
        </Form.Item>

        <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        >
        <Input.Password />
        </Form.Item>

        <Form.Item
        label="Email"
        name="@mail"
        rules={[{ required: true, message: 'Please input your email!' }]}
        >
        <Input />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={openNotification}>
            Submit
        </Button>
        </Form.Item>
        </Form>
    )
}


