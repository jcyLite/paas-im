import React from 'react';
import Item from './index.d';
import Style from './index.less';
import { toAllTime } from '@/utils/date';
function TmsgItem(props: Item) {
  const { name, msg, isMe, date } = props;
  return (
    <div className={Style.wrapper}>
      <div className={isMe ? 'me-wrapper' : 'other-wrapper'}>
        <div className="icon">{name.slice(0, 1)}</div>
        <div className="context">
          <div className="name">
            <div className="name-txt">{name}</div>
            <div className="date">{toAllTime(date)}</div>
          </div>

          <div dangerouslySetInnerHTML={{ __html: msg }} className="msg"></div>
        </div>
      </div>
    </div>
  );
}
export default TmsgItem;
