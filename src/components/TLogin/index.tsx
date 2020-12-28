import React, { useState } from 'react';
import Style from './index.less';
import { Input, Button } from 'antd';
interface propsType {
  loginBtnClick: any;
}
function TLogin(props: propsType) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className={Style.wrapper}>
      <Input
        className="userName"
        value={username}
        onChange={e => {
          setUsername(e.target.value);
        }}
        placeholder="输入用户名"
      />
      <Input.Password
        value={password}
        onChange={e => {
          setPassword(e.target.value);
        }}
        className="password"
        placeholder="输入密码"
      ></Input.Password>
      <Button
        onClick={() => {
          props.loginBtnClick({
            username,
            password,
          });
        }}
        type="primary"
      >
        登陆
      </Button>
    </div>
  );
}
export default TLogin;
