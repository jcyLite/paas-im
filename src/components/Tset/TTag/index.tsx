import React, { useState, useMemo } from 'react';
import Style from './index.less';
import { Input } from 'antd';
const { Search } = Input;
import Tselect from '../Tselect/Tselect';
import { CloseCircleOutlined } from '@ant-design/icons';
import request from '@/services';
interface propsType {
  title: string;
  data: Array<any>;
}
function TTag(props: propsType) {
  const [active, setActive]: [boolean, any] = useState(false);
  const [d, setD]: any = useState([]);
  useMemo(() => {
    request.post('/api/friendList').then(d => {
      setD(d);
    });
  }, []);
  return (
    <div className={Style.TTag}>
      <div>
        {props.title}
        <span
          onClick={() => {
            setActive(!active);
          }}
          style={{ float: 'right' }}
        >
          {!active ? '添加' : '取消'}
        </span>
      </div>
      <div className="pmodal" r-if={active}>
        <Search onSearch={value => console.log(value)} />
        <div>X清除已选项</div>
        <div className="select-container">
          <Tselect type="noAll" data={d}></Tselect>
        </div>
      </div>
      <div className="tag-container">
        {props.data.map((item: any) => (
          <div className={Style.TTag}>
            {item.icon || item.name.substring(0, 1)}
            {item.name}
            <CloseCircleOutlined />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TTag;
