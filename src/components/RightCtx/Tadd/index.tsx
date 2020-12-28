import React, { useState, useMemo } from 'react';
import Style from './index.less';
import request from '@/services';
import { Input, Modal } from 'antd';

import { ExclamationCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { poperAddComment } from '../addComment';
import FontFilter from '../FontFilter/font-filter';
import events from '@/utils/events';
interface propsType {}
function add(props: any) {
  const [d, setD]: [Array<any>, any] = useState([]);
  const [inputV, setInputV]: [string, any] = useState('');
  const { url, title, type } = props;
  function ajax(value: string) {
    request.get(url, { params: { searchVal: value } }).then(d => {
      setD(
        d.map((item: any) => ({
          isHover: false,
          ...item,
        })),
      );
    });
  }
  useMemo(() => {
    ajax(inputV);
  }, [inputV]);
  return (
    <div className={Style.add}>
      <Input.Search
        onSearch={value => {
          setInputV(value);
        }}
        value={inputV}
        style={{ width: 'calc(100% - 20px)', marginLeft: '10px' }}
        placeholder="输入关键字搜索"
      />
      <div
        onClick={() => {
          poperAddComment({
            okey: title,
            type,
            d,
            title: '添加' + title,
            onOk(mod: any) {
              request
                .post(url, {
                  data: {
                    type: 'add',
                    data: mod,
                  },
                })
                .then(d => {
                  ajax(inputV);
                });
            },
          });
        }}
        className="btn"
      >
        +添加{title}
      </div>
      <div className="coment">
        {d.map(
          (
            item: { cid: string; coment: string; isHover: boolean },
            index: any,
          ) => (
            <div
              onClick={() => {
                console.log(2);
                events.emit('msg', item.coment);
              }}
              className="coment-item"
              key={item.cid}
            >
              <FontFilter value={item.coment} filter={inputV} />
              <DeleteOutlined
                onClick={() => {
                  Modal.confirm({
                    content: (
                      <div>
                        <ExclamationCircleOutlined
                          style={{ color: '#FFBD2E', marginRight: '8px' }}
                        />
                        确认删除该{title}吗？
                      </div>
                    ),
                    cancelButtonProps: {},
                    okText: '确定',
                    cancelText: '取消',
                    onOk() {
                      request
                        .post(url, {
                          data: {
                            type: 'del',
                            cid: item.cid,
                          },
                        })
                        .then(() => {
                          ajax(inputV);
                        });
                    },
                  });
                }}
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
}
add.defaultProps = {
  url: '',
};
export default add;
