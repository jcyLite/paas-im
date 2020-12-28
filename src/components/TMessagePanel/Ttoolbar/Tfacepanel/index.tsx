import React from 'react';
import Style from './index.less';
import { imgs, alt } from './faces';
interface propsType {
  className?: string;
  emitFace?: Function;
  setFacePanelShow: Function;
}
function Tfacepanel(props: propsType) {
  return (
    <div className={Style.wrapper + ' ' + props.className}>
      <div className="face-item">
        {imgs.map((item: any, index: any) => (
          <img
            key={index}
            className="faces"
            onClick={e => {
              //反馈给父组件，选择的表情
              props.emitFace?.call(e.target, 'face' + alt[index]);
              props.setFacePanelShow(false);
            }}
            src={item}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}
Tfacepanel.defaultProps = {
  className: '',
  setFacePanelShow: () => {},
};
export default Tfacepanel;
