import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'antd';
import events from '@/utils/events';

function ModalBox(Component: any, props?: Object, props2?: any) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const onClose = () => {
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    }, 300);
  };
  function Tmodal(this: any, props2: any) {
    let children = props2.children;
    const [isVisible, setIsVisible] = useState(true);
    return (
      <Modal
        {...props2}
        onOk={() => {
          events.emit('onOk');
          setIsVisible(false);
          props2?.onClose();
        }}
        okText="确定"
        cancelText="取消"
        onCancel={() => {
          setIsVisible(false);
          props2?.onClose();
        }}
        visible={isVisible}
      >
        {children}
      </Modal>
    );
  }
  Tmodal.defaultProps = {
    title: '',
    width: 760,
  };
  ReactDOM.render(
    <Tmodal onClose={onClose} {...props} className="modal-box">
      <Component {...props}></Component>
    </Tmodal>,
    div,
  );
}
export default ModalBox;
