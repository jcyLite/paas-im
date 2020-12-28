import React, { useState, useEffect } from 'react';
import { Checkbox } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import Style from './Tselect.less';
interface propsType {
  data: Array<any>;
  field: {
    //数据映射策略
    id: string;
    icon: string;
    name: string;
    type: string;
    line2: string;
    line3: string;
  };
  type?: string;
  setDataSelect?: Function;
}
function Tselect(props: propsType) {
  let { data, field, type } = props;
  let [oids, setOids]: any = useState([]);
  let [dataSelect, setDataSelect]: any = useState([]);
  let selectAct = (i: any) => {
    var a = false;
    var idx = -1;
    var odataSelect = Array.from(dataSelect);
    odataSelect.forEach((item: any, index: any) => {
      if (item[field.id] == i[field.id]) {
        a = true;
        idx = index;
      }
    });

    if (a) {
      if (idx != -1) {
        odataSelect.splice(idx, 1);
      }
    } else {
      odataSelect.push(i);
    }
    setDataSelect(odataSelect);
  };
  let deptClick = (item: any) => {
    let odataSelect = Array.from(dataSelect);
    var a = odataSelect.filter((i: any) => {
      return i[field.id] == item[field.id];
    }).length;
    if (!a) {
      //如果不存在则可以点击到下级
      var pids = Array.from(oids);
      pids.push(item);
      setOids(pids);
    }
  };
  const [indeterminate, setIndeterminate] = useState(false);
  return (
    <div className={Style['tk-flex-right']}>
      <div className="tk-flex-right-list">
        <div r-if={type != 'noAll'} className="tk-select">
          <Checkbox
            indeterminate={indeterminate}
            checked={
              data.filter((ii: any) => {
                return dataSelect.filter((i: any) => {
                  return i[field.id] == ii[field.id];
                }).length;
              }).length == data.length
            }
            onChange={() => {
              var odataSelect = Array.from(dataSelect);
              var aa = data.filter((ii: any) => {
                return odataSelect.filter((i: any) => {
                  return i[field.id] == ii[field.id];
                }).length;
              }).length;
              var a = aa != data.length;
              if (a) {
                //全选操作
                data.forEach((item: any) => {
                  var b = odataSelect.filter((item2: any) => {
                    return item2[field.id] == item[field.id];
                  }).length;
                  if (!b) {
                    odataSelect.push(item);
                  }
                });
              } else {
                //取消操作;
                data.forEach((item: any) => {
                  var idx = -1;
                  var b = odataSelect.filter((item2: any, index: any) => {
                    if (item2[field.id] == item[field.id]) {
                      idx = index;
                    }
                    return item2[field.id] == item[field.id];
                  }).length;
                  if (b) {
                    if (idx != -1) {
                      odataSelect.splice(idx, 1);
                    }
                  }
                });
              }
              setDataSelect(odataSelect);
            }}
          >
            好友({data.length})
          </Checkbox>
        </div>
        {data.map((item: any) => (
          <div key={item[field.id]} className="tk-select">
            <Checkbox
              className="tk-name"
              style={{ width: '90%' }}
              checked={
                !!dataSelect.filter((i: any) => {
                  return i[field.id] == item[field.id];
                }).length
              }
              onChange={e => {
                selectAct(item);
              }}
            >
              <div className="header-icon">
                {item[field.icon] || item[field.name].substring(0, 1)}
              </div>
              <div className="name-container">
                <div className="line1">{item[field.name]}</div>
                <div r-if={item[field.line2]} className="line2">
                  {item[field.line2]}
                </div>
                <div r-if={item[field.line3]} className="line3">
                  {item[field.line3]}
                </div>
              </div>
            </Checkbox>
          </div>
        ))}
      </div>
    </div>
  );
}
Tselect.defaultProps = {
  field: {
    //数据映射策略
    id: 'uid',
    icon: 'icon',
    name: 'username',
    type: 'type',
    line2: 'beizhu',
    line3: 'department',
  },
  dataSelect: [],
  setDataSelect: () => {},
  data: [],
};
export default Tselect;
