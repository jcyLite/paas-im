import React from 'react';
import Style from './index.less';

interface propsType {
  ToolBar?: any;
  LeftCtx?: any;
  MidCtx?: any;
  RightCtx?: any;
}
function TimWrapper(props: propsType) {
  const { LeftCtx, MidCtx, RightCtx, ToolBar } = props;

  return (
    <div className={Style.wrapper}>
      <div className="tk-toolbar">
        <ToolBar />
      </div>
      <div className="tk-left">
        <LeftCtx />
      </div>
      <div className="tk-mid">
        <MidCtx />
      </div>
      <div className="tk-right">
        <RightCtx />
      </div>
    </div>
  );
}
TimWrapper.defaultProps = {
  ToolBar: () => <></>,
  LeftCtx: () => <></>,
  MidCtx: () => <></>,
  RightCtx: () => <></>,
};
export default TimWrapper;
