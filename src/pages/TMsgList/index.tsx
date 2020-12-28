import React, { useState, useMemo, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'dva';
import { useHistory } from 'react-router-dom';
import { Input } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import TItem from '@/components/TItem';
import Style from './index.less';
import ItemStyle from '../TItem/index.less';
import request from '@/services/index';
import { RenderToList } from '@/utils/content';
import { ws } from 'umi';
console.log(ws);
const { Search } = Input;
interface propsType {
  mine: {
    name: string;
    icon?: string;
  };
}
function TMsgList(props: propsType) {
  const dispatch = useDispatch();
  let mine: any = useSelector((state: any) => {
    return state.user;
  });
  let history = useHistory();
  const [data, setData] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const uid: any = useSelector((state: any) => {
    return state.user.uid;
  });

  const [active, setActive] = useState(0);
  function ajax() {
    request.get('/api/msgLeftList').then(d => {
      setData(d);
    });
  }
  useMemo(() => {
    ws.onMessage('msg', function(d: any) {
      //判断toUid是否为自己
      if (d.toUid.indexOf(mine.uid) != -1) {
        //更新列表中的数据
        ajax();
      }
    });
    ajax();
  }, []);
  function setC(active: number) {
    if (data[active]) {
      let obj: {
        name: string;
        uid: string;
      } = data[active];

      dispatch({
        type: 'session/setData',
        payload: {
          name: obj.name,
          uid: obj.uid,
        },
      });
    }
  }
  useLayoutEffect(() => {
    setC(0);
    setActive(0);
  }, [data]);
  useLayoutEffect(() => {
    setC(active);
  }, [active]);
  return (
    <div className={Style.wrapper}>
      <div className="search">
        <Search
          value={searchVal}
          onChange={e => {
            setSearchVal(e.target.value);
          }}
          style={{ height: '30px' }}
          placeholder="输入客户名称进行搜索"
          onSearch={value => {
            setSearchVal(value);
            // request.get('/api/msgLeftList',{
            //   parames:
            // })
          }}
        />
      </div>
      {data.map((item: any, index) => (
        <div
          key={item.mid + index}
          onClick={() => {
            //设置会话
            setActive(index);
          }}
        >
          <TItem
            active={active}
            index={index}
            {...{
              ...item,
              msg: RenderToList(
                `${item.fromUid == mine.uid ? '[我]' : `[他]`}${item.msg}`,
              ),
            }}
          />
        </div>
      ))}
    </div>
  );
}
TMsgList.defaultProps = {};
export default TMsgList;
