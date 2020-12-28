import React from 'react';
import Style from './index.less';
import TLogin from '@/components/TLogin/index';
import { useHistory } from 'react-router-dom';
import request from '@/services';
import { message } from 'antd';
import { useDispatch } from 'dva';
export default function(props: any) {
  let dispatch = useDispatch();
  let history = useHistory();
  return (
    <div className={Style.wrapper}>
      <TLogin
        loginBtnClick={({
          username,
          password,
        }: {
          username: String;
          password: String;
        }) => {
          request
            .post('/api/login', {
              data: {
                username,
                password,
              },
            })
            .then((d: any) => {
              if (typeof d === 'object') {
                //将数据存入localStorage
                dispatch({
                  type: 'user/setInfo',
                  payload: {
                    name: d.username,
                    uid: d.uid,
                  },
                });
                localStorage.setItem('userInfo', JSON.stringify(d));
                history.push('/iframe-im/msgList');
              } else {
                message.info(d);
              }
            });
        }}
      ></TLogin>
    </div>
  );
}
