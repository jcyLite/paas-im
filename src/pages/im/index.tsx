import React, { useState, useMemo } from 'react';
import Style from './index.less';
import { Modal } from 'antd';
import ToolBar from '@/components/ToolBar';
import TimWrapper from '@/components/TimWrapper/index';
import RightCtx from '@/components/RightCtx';
import TMessagePanel from '@/components/TMessagePanel';
import request from '@/services';
import api from '@/api';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'dva';
import { ws } from 'umi';
export default function(props: any) {
  let dispatch = useDispatch();
  // api.userController.getSocialAccountInfo()
  let history = useHistory();
  const [data, setData] = useState([]);

  useMemo(() => {
    let userInfo = localStorage.getItem('userInfo') || '{}';
    let me = JSON.parse(userInfo);

    if (!me.uid) {
      history.push('/login');
      // }
      // if(!ws.isInit){
      console.log(`${me.uid} websocket init`);
    } //连接websocket
    dispatch({
      type: 'user/setInfo',
      payload: {
        name: me.username,
        uid: me.uid,
      },
    });
    console.log(`ws init uid is ${me.uid}`);
    function init() {
      ws.init(`ws://172.38.1.1:3333/ws`, me.uid);
    }
    init();
    //新的上线；旧的下线
    ws.onMessage('close', function() {
      ws.close();
      Modal.warning({
        content: '你已被迫下线',
        okText: '重新连接',
        cancelText: '取消',
        onOk: () => {
          init();
        },
      });
    });

    // ws.onMessage('connect',(data:any)=>{
    //   if(data.uid==me.uid){
    //     ws.close();
    //   }
    // })
    // window.ws=ws;
    request
      .post('/api/data', {
        params: {
          uid: me.uid,
        },
      })
      .then((d: any) => {
        setData(d);
      });
    // request.get('/api/msgList').then((d: any) => setMsgList(d));
  }, []);
  //链接socket
  const { children } = props;
  return (
    <div className={Style.wrapper}>
      <ToolBar />
      <div className="children">{children}</div>

      <TMessagePanel ws={ws} />
      <RightCtx />
    </div>
  );
}
