import React, { useState, useRef, useImperativeHandle } from 'react';
import Style from './index.less';
import PoperModal from '@/components/PoperModal';
import events from '@/utils/events';
import { Input, Row, Col } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
let addComment: any;
addComment = (props: any) => {
  const [mod, setMod] = useState(['', '', '']);
  events.on('onOk', () => {
    if (!!mod.join('')) {
      var parkingList = mod; //后台返回数据
      for (var i = 0; i < parkingList.length; i++) {
        if (
          parkingList[i] == '' ||
          parkingList[i] == null ||
          typeof parkingList[i] == undefined
        ) {
          parkingList.splice(i, 1);
          i = i - 1;
        }
      }
      props.onOk(parkingList);
    } else {
      alert('数据不能都是空的');
    }
  });
  return (
    <div className={Style.addComment}>
      <Row>
        <Col span={4}>{props.okey}</Col>
        <Col span={19}>
          {mod.map((item, index) => (
            <Row key={index} style={{ marginTop: '10px' }}>
              <Col span={19}>
                <Input.TextArea
                  r-if={props.type == 'TextArea'}
                  onChange={e => {
                    let m = Array.from(mod);
                    m[index] = e.target.value;
                    setMod(m);
                  }}
                  value={item}
                />
                <Input
                  r-if={props.type == 'Input'}
                  onChange={e => {
                    let m = Array.from(mod);
                    m[index] = e.target.value;
                    setMod(m);
                  }}
                  value={item}
                />
              </Col>
              <Col
                span={4}
                style={{
                  fontSize: '20px',
                  verticalAlign: 'middle',
                }}
              >
                <PlusCircleOutlined
                  onClick={() => {
                    let m = Array.from(mod);
                    m.splice(index + 1, 0, '');
                    setMod(m);
                  }}
                  style={{ marginLeft: '10px' }}
                />
                {index != 0 ? (
                  <MinusCircleOutlined
                    onClick={() => {
                      let m = Array.from(mod);
                      m.splice(index, 1);
                      setMod(m);
                    }}
                    style={{ marginLeft: '10px' }}
                  />
                ) : (
                  ''
                )}
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </div>
  );
};
export function poperAddComment(props: any) {
  PoperModal(
    addComment,
    { ...props },
    {
      onOk: addComment.onConfirm,
    },
  );
}
export default addComment;
