import React, { useState, useEffect } from 'react';
import Style from './index.less';
import { Input } from 'antd';
import content from '@/utils/content';
interface propsType {}
function TextArea(props: any) {
  const { onPressEnter, onChange } = props;
  const [value, setValue] = useState(props.value);
  useEffect(() => {
    setValue(props.value);
  }, [props.value]);
  return (
    <div className={Style.TextArea + ' ' + props.className}>
      <Input.TextArea
        className="oText"
        // style={{opacity:0}}
        value={value}
        rows={20}
        cols={1}
        allowClear
        onPressEnter={(e, ...arg) => {
          if (e.ctrlKey) {
            onPressEnter(e, ...arg);
          }
        }}
        onChange={(e, ...arg) => {
          setValue(e.target.value);
          onChange(e, ...arg);
        }}
        name=""
        id=""
      ></Input.TextArea>
    </div>
  );
}
TextArea.defaultProps = {
  className: '',
};
export default TextArea;
