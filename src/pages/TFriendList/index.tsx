import React, { useState, useLayoutEffect, useMemo } from 'react';
import Style from './index.less';
import TItem from '@/components/TItem';
import request from '@/services';
import { useSelector, useDispatch } from 'dva';
interface propsType {}
function TFriendList(props: propsType) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [active, setActive] = useState(-1);

  const uid: any = useSelector((state: any) => {
    return state.user.uid;
  });
  useMemo(() => {
    if (uid) {
      request.post('/api/friendList').then(d => {
        setData(d);
      });
      setActive(0);
    }
  }, []);
  function setC(active: number) {
    if (data[active]) {
      let obj: {
        username: string;
        uid: string;
      } = data[active];

      dispatch({
        type: 'session/setData',
        payload: {
          name: obj.username,
          uid: obj.uid,
        },
      });
    }
  }
  useLayoutEffect(() => {
    //设置当前与哪个人会话
    setC(active);
  }, [active, data]);

  return (
    <div className={Style.TFriendList}>
      {data.map((item: any, index) => (
        <div
          onClick={() => {
            setActive(index);
          }}
          key={item.mid + index.toString()}
        >
          <TItem
            active={active}
            index={index}
            {...{ ...item, name: item.username }}
          />
        </div>
      ))}
    </div>
  );
}

export default TFriendList;
