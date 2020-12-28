import React, { useState, useMemo } from 'react';
import './index.less';
import { Col, Tabs, Button, Tag, Row, Menu, Switch, Input } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import Tselect from './Tselect/Tselect';
const { TabPane } = Tabs;
const { Search } = Input;
import ModalBox from '@/components/PoperModal';
import request from '@/services';
import TTag from './TTag';
interface propsType {
  height: number;
}
function Tset(props?: any) {
  const [d, setD] = useState([]);
  const [biaoqian, setBiaoqian]: any = useState([]);
  const [menu, setMenu] = useState('1');
  const [add, setAdd] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [active, setActive] = useState(0);
  const [fdata, setFdata]: [Array<any>, any] = useState([]);
  const [gdata, setGdata]: [Array<any>, any] = useState([]);
  useMemo(() => {
    request.get('/api/biaoqian').then(d => {
      setBiaoqian(d);
    });
  }, [add]);
  useMemo(() => {
    request.post('/api/friendList').then(d => {
      setD(d);
    });
  }, []);
  const { children } = props;
  return (
    <div className="Tset">
      <Row>
        <Col span={4}>
          <Menu
            defaultSelectedKeys={[menu]}
            onSelect={value => {
              setMenu(value.key);
            }}
          >
            <Menu.Item key="1">屏蔽对象</Menu.Item>
            <Menu.Item key="2">设置标签</Menu.Item>
          </Menu>
        </Col>
        <Col span={20}>
          <Tabs
            r-if={menu == '1'}
            style={{ paddingLeft: '20px' }}
            defaultActiveKey="1"
            onChange={() => {}}
          >
            <TabPane tab="好友信息" key="1">
              <div>
                <div className="topRight">
                  新好友自动屏蔽
                  <Switch onChange={() => {}} />
                </div>
                <Tselect data={d}></Tselect>
              </div>
            </TabPane>
            <TabPane tab="群聊信息" key="2">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
          <Row r-if={menu == '2'}>
            <Col
              style={{
                padding: '5px',
                height: '520px',
                overflowX: 'hidden',
                overflowY: 'auto',
              }}
              span={8}
            >
              <Search />
              <Button
                style={{ marginTop: '10px', width: '100%' }}
                type="primary"
                onClick={() => {
                  setAdd(true);
                }}
              >
                +添加标签
              </Button>
              <div r-if={add} style={{ marginTop: '10px', width: '100%' }}>
                <Input
                  value={inputVal}
                  onChange={e => {
                    setInputVal(e.target.value);
                  }}
                  style={{ width: '76%' }}
                />
                <CheckOutlined
                  onClick={() => {
                    request
                      .post('/api/biaoqian', {
                        data: {
                          biaoqian: inputVal,
                        },
                      })
                      .then(d => {
                        setAdd(false);
                      });
                  }}
                  style={{ color: '#4EC265', marginLeft: '5px' }}
                />
                <CloseOutlined
                  onClick={() => {
                    setAdd(false);
                  }}
                  style={{ color: '#FF5353', marginLeft: '5px' }}
                />
              </div>
              {biaoqian.reverse().map((item: any) => (
                <Tag
                  style={{
                    lineHeight: '32px',
                    marginTop: '10px',
                    width: '100%',
                  }}
                  key={item.bid}
                  onClose={() => {
                    request
                      .post('/api/biaoqian', {
                        data: {
                          delBid: item.bid,
                        },
                      })
                      .then(d => {
                        setAdd(false);
                      });
                  }}
                  closable={true}
                  className="edit-tag"
                >
                  {item.biaoqian}
                </Tag>
              ))}
            </Col>
            <Col span={16}>
              <div>{biaoqian[active]?.biaoqian}</div>
              <TTag title="好友" data={fdata} />
              <TTag title="群聊" data={gdata} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
function PoperTset(props?: any) {
  ModalBox(Tset, props);
}
export default PoperTset;
