import React, { useState, useMemo } from 'react';
import Style from './index.less';
import { poperAddComment } from './addComment';
import Tadd from './Tadd';
import {
  Button,
  Input,
  Radio,
  Modal,
  Empty,
  Row,
  Select,
  Col,
  Alert,
} from 'antd';
const Option = Select.Option;
import request from '@/services/index';
import { ExclamationCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import Tab from './Tab';
import { useSelector } from 'dva';
import FontFilter from './FontFilter/font-filter';
import { resolve } from 'dns';
function RightCtx() {
  const tabs = ['知识库', '联系记录', '客户信息'];
  const [a, setA] = useState('0');
  const [visible, setVisible] = useState(false);

  const [c, setC] = useState([]);
  const [q, setQ]: [Array<any>, any] = useState([]);
  const [cd, setCd] = useState([]);
  const [selectV, setSelectV] = useState('');
  const [selectV2, setSelectV2] = useState('');
  const [kf, setKf] = useState([]);
  const [inputV, setInputV] = useState('');
  let toId: any = useSelector((state: any) => {
    return state.session.id;
  });
  useMemo(() => {
    request.get('/api/quetion').then(d => {
      setQ(d);
    });
  }, [inputV]);
  useMemo(() => {
    request.get('/api/company').then(d => {
      setC(d);
    });
  }, []);
  useMemo(() => {
    request
      .get('/api/companyDetail', {
        params: {
          pid: selectV,
          toId,
        },
      })
      .then(d => {
        setCd(d);
      });
  }, [selectV]);
  return (
    <div className={Style.wrapper}>
      <Tab onChange={(index: any) => {}} active={0} data={tabs}>
        <div key={0}>
          <Radio.Group
            onChange={e => {
              setA(e.target.value);
            }}
            value={a}
            style={{ marginBottom: 8 }}
          >
            <Radio.Button value="0">常用语</Radio.Button>
            <Radio.Button value="1">常用链接</Radio.Button>
            <Radio.Button value="2">问题库</Radio.Button>
          </Radio.Group>
          <div r-if={a == '0'} className="container">
            <Tadd title="常用语" type="TextArea" url="/api/coment"></Tadd>
          </div>
          <div r-if={a == '1'} className="container">
            <Tadd title="常用链接" type="Input" url="/api/lianjie"></Tadd>
          </div>
          <div r-if={a == '2'} className="container">
            <Input.Search
              onSearch={value => {
                setInputV(value);
              }}
              style={{ margin: '10px', width: 'calc(100% - 20px)' }}
            />
            {/* <Empty r-if={} /> */}
            {q.map((item: any) => (
              <div className="quetion-item" key={item.qid}>
                <Row>
                  <Col span={2}>
                    <div className="Q">Q</div>
                  </Col>
                  <Col span={22}>
                    <div className="title">{item.title}</div>
                    <div className="content">{item.content}</div>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </div>
        <div key={1}>
          <Row>
            <Col span={8}>客服：</Col>
            <Col span={16}>
              <Select
                placeholder="Select a option and change input text above"
                onChange={value => {
                  setSelectV2(value);
                }}
                value={selectV2}
                allowClear
              >
                {kf.map((item: any) => (
                  <Option value={item.kid}>{item.name}</Option>
                ))}
              </Select>
            </Col>
          </Row>
        </div>
        <div className="khxx" key={2}>
          <div r-if={!cd?.length}>
            <Alert message="请选择企业来关联客户信息" type="info" showIcon />
            <Row>
              <Col span={8}>企业名称：</Col>
              <Col span={16}>
                <Select
                  placeholder="Select a option and change input text above"
                  onChange={value => {
                    setSelectV(value);
                  }}
                  value={selectV}
                  allowClear
                >
                  {c.map((item: any, index: any) => (
                    <Option key={index} value={item.pid}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Col>
            </Row>
          </div>
          <div r-if={cd?.length}>
            {cd.map((item: any) => (
              <Row>
                <Col style={{ textAlign: 'right' }} span={8}>
                  {item.key}
                </Col>
                <Col style={{ paddingLeft: '10%' }} span={14}>
                  {item.value}
                </Col>
              </Row>
            ))}
            <Button
              onClick={() => {
                setCd([]);
              }}
              style={{ float: 'right', marginTop: '20px' }}
              type="primary"
            >
              重新关联
            </Button>
          </div>
        </div>
      </Tab>
    </div>
  );
}
export default RightCtx;
