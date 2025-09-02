import React, {useState} from 'react';
import { Button, Form, Input, message } from 'antd';

import {login} from '../../api/index.ts'
import {setLocal} from '../../utils/storage.ts'
import styles from './index.module.less'

const App = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        if(userName.trim() === '' || password.trim() === ''){
            message.error("用户名和密码不能为空！");
            setLoading(false);
            return;
        }else{
            const resData = await login({'userName': userName, 'userPwd': password});
            setLoading(false);
            if(resData.code === 200){
                setLocal('token', resData.data);
                // 后续会跳转
            }
        }
    }

    return (
        <div className={styles.login_box}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                autoComplete="off">
                <Form.Item label="Username" name="username">
                    <Input onChange={(e) => {setUserName(e.target.value)}}/>
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input.Password onChange={(e) => {setPassword(e.target.value)}}/>
                </Form.Item>
                <Form.Item label={null}>
                    <Button type="primary" loading={loading} onClick={handleSubmit}>Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default App;