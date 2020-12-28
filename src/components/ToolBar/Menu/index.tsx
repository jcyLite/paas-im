import React, { useState } from 'react';
import {
  MessageOutlined,
  TeamOutlined,
  CommentOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import Style from './index.less';
import { useHistory } from 'react-router-dom';
interface propsType {}
function Menu(props: propsType) {
  let history = useHistory();
  return (
    <div className={Style.Menu}>
      <div
        onClick={() => {
          history.push('/iframe-im/msgList');
        }}
        className="Menu-item"
      >
        <MessageOutlined />
        <span className="font">消息</span>
      </div>
      <div
        onClick={() => {
          history.push('/iframe-im/groupSend');
        }}
        className="Menu-item"
      >
        <TeamOutlined />
        <span className="font">群发</span>
      </div>
      <div className="Menu-item">
        <CommentOutlined />
        <span className="font">汇总</span>
      </div>
      <div
        onClick={() => {
          history.push('/iframe-im/FriendList');
        }}
        className="Menu-item"
      >
        <UserSwitchOutlined />
        <span className="font">通讯录</span>
      </div>
    </div>
  );
}

export default Menu;
