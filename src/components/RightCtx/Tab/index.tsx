import React, { useState } from 'react';
import Style from './index.less';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
interface propsType {
  active: number;
  onChange?: (key: string) => void;
  data: Array<string>;
  children: any;
}
function Tab(props: propsType) {
  let { active, data, onChange, children } = props;
  const [act, setAct] = useState(active);
  return (
    <Tabs className={Style.wrapper} defaultActiveKey="0" onChange={onChange}>
      {data.map((item, index) => (
        <TabPane tab={item} key={index.toString()}>
          {children.filter((item: any) => item.key == index)}
        </TabPane>
      ))}
    </Tabs>
  );
}
export default Tab;
