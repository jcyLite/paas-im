import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useMemo,
} from 'react';
import events from '@/utils/events';
import Style from './index.less';
import { Button, Input, message } from 'antd';
import TmsgItem from './TmsgItem';
import Ttoolbar from './Ttoolbar';
import Item from './TmsgItem/index.d';
import content from '@/utils/content';
const { TextArea } = Input;
import request from '@/services';
import TTextArea from './TextArea';
import { useSelector, useDispatch } from 'dva';

interface propsType {
  ws: any;
}
function TMessagePanel(props: propsType) {
  let dispatch = useDispatch();
  const { ws } = props;
  // let toInfo:any = useState({})

  let mine: any = useSelector((state: any) => {
    return state.user;
  });
  let msg = useSelector((state: any) => {
    return state.msg;
  });
  let toInfo: any = useSelector((state: any) => {
    return state.session;
  });
  const [txtVal, setTxtVal] = useState('');
  events.on('msg', (value: string) => {
    setTxtVal(value);
  });
  let msgBox: any = useRef();
  let btn: any = useRef();
  useEffect(() => {
    request
      .post('/api/msgList', {
        data: {
          fromUid: mine.uid,
          toUid: toInfo.uid,
        },
      })
      .then(d => {
        dispatch({
          type: 'msg/setMsg',
          payload: d,
        });
      });
  }, [toInfo.uid]);
  useMemo(() => {
    var window: any = Window;
    window.ws = ws;
    ws.onMessage('msg', function(data: any) {
      data.isMe = mine.uid == data.fromUid;
      data.name = data.fromName;
      if (toInfo.uid == data.toUid[1] || toInfo.uid == data.fromUid) {
        dispatch({
          type: 'msg/addMsg',
          payload: [data],
        });
      }
    });
  }, [toInfo]);

  useLayoutEffect(() => {
    function setTop() {
      msgBox.current.scrollTop =
        msgBox.current.scrollHeight - msgBox.current.clientHeight + 1000;
    }
    setTop();
    setTimeout(() => {
      setTop();
    }, 100);
  }, [msg]);
  return (
    <div className={Style.wrapper}>
      <div className="title">{toInfo?.name}</div>
      <div ref={msgBox} className="msg-box">
        {msg.map((item: Item, index: any) => (
          <React.Fragment key={index}>
            <TmsgItem {...{ ...item, msg: content(item.msg) }}></TmsgItem>
          </React.Fragment>
        ))}
      </div>
      <div className="send-panel">
        <Ttoolbar
          ws={ws}
          mine={mine}
          toInfo={toInfo}
          emitFace={(alt: string) => {
            setTxtVal(txtVal + alt);
          }}
        />
        <TTextArea
          onPressEnter={(e: any) => {
            btn.current.click();
          }}
          className="textarea"
          value={txtVal}
          onChange={(e: any) => {
            setTxtVal(e.target.value);
          }}
        />

        <Button
          ref={btn}
          onClick={() => {
            !!txtVal.trim()
              ? ws.send({
                  type: 'msg',
                  toUid: [mine.uid, toInfo.uid],
                  fromName: mine.name,
                  fromUid: mine.uid,
                  toName: toInfo.name,
                  msg: txtVal,
                })
              : message.info('消息不能为空');
            setTxtVal('');
          }}
          type="primary"
        >
          发送
        </Button>
      </div>
    </div>
  );
}
TMessagePanel.defaultProps = {
  toName: '',
};
export default TMessagePanel;
