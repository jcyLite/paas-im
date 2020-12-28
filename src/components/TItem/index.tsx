import React from 'react';
import Style from './index.less';
import { toAllTime } from '@/utils/date';
interface propsType {
  icon?: string;
  name: string;
  msg: string;
  date: number;
  active: number;
  index: number;
}
function TItem(props: propsType) {
  const { active, name, msg, icon, date, index } = props;
  return (
    <div
      className={
        active == index ? `${Style.wrapper} ${Style.active}` : Style.wrapper
      }
    >
      {!icon ? (
        <div className="icon">{name.slice(0, 1)}</div>
      ) : (
        <div
          style={{ background: `url(${icon})` }}
          r-if={icon}
          className="icon"
        />
      )}
      <div className={'context'}>
        <div className="name">{name}</div>
        <div
          r-if={msg}
          dangerouslySetInnerHTML={{ __html: msg }}
          className="msg"
        ></div>
        {date ? <div className="date">{toAllTime(date)}</div> : ''}
      </div>
    </div>
  );
}
TItem.defaultProps = {
  name: '',
};
export default TItem;
