import { Form, Input, Button } from 'antd';
import { useState } from 'react';

export const CustomLogin = () => {

    const [user, setUser] = useState("");
    const [passwd, setPasswd] = useState("");

    const submitInfo = () =>{
        
        const localInfo = localStorage.getItem("lab6");
        let flag = false;

        if(localInfo){
            const itemsData = JSON.parse(localInfo);
            
            for(let i=0; i<itemsData.length; i++){
                if(itemsData[i].user == user && itemsData[i].password == passwd){
                    alert("Logarea a fost efectuata cu succes");
                    flag = true;
                    break;
                }
            }

            if(!flag){
                alert("User sau parola e gresita!")
            }
        }
    }

    return(
        <>
            <main>
                <Form
                    name="basic"
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 5 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input 
                            value={ user }
                            onChange = { (e) => {setUser(e.target.value);}}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password 
                            value={ passwd }
                            onChange={ (e) => {setPasswd(e.target.value)}}
                        />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 10, span: 10 }}>
                        <Button type="primary" htmlType="submit" onClick={ submitInfo }>
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            
            </main>
        </>
    );
}