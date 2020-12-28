import React, { useState } from 'react';
import Style from './index.less';
import { useHistory } from 'react-router-dom';
import TItem from '../TItem';
import Menu from './Menu';
import { MenuOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import PoperTset from '@/components/Tset';
import { useSelector, useDispatch } from 'dva';
import { ws } from 'umi';
interface propsType {}
function ToolBar(props: propsType) {
  let history = useHistory();
  let mine: any = useSelector((state: any) => {
    return state.user;
  });
  return (
    <div className={Style.ToolBar}>
      {!mine.icon ? (
        <div className="icon">{mine.name?.slice(0, 1)}</div>
      ) : (
        <div className="icon" style={{ background: `url(${mine.icon})` }} />
      )}
      <div className="name">{mine.name}</div>
      <div className="menu">
        <Menu></Menu>
      </div>
      <div className="bottom">
        <MenuOutlined />
        <div className="right-button">
          <div
            onClick={() => {
              PoperTset({ title: '消息相关设置' });
            }}
          >
            设置
          </div>
          <div
            onClick={() => {
              localStorage.removeItem('userInfo');
              ws.close();
              history.push('/login');
            }}
          >
            退出
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolBar;
