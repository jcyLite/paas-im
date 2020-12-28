import React, { useEffect, useState } from 'react';
import Style from './index.less';
import { Input, Select, Table, Space, Tag, Pagination } from 'antd';
const { Search } = Input;
const { Option } = Select;

import request from '@/services';
function customManager() {
  const [selectOption, setSelectOption] = useState([]);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(10);
  const [searchVal, setSearchVal] = useState('');
  function ajax({ customerCompanyName, currentPage }: any) {
    // api.companyController
    //   .listCompany({
    //     currentPage,
    //     size: 10,
    //     customerCompanyName,
    //     userId: '',
    //   })
    //   .then((d: any) => {
    //     setData(d.data);
    //     setTotal(d.totalCount);
    //   });
  }
  useEffect(() => {
    request.get('/api/sszt').then(d => {
      setSelectOption(d.data);
    });

    ajax({ currentPage: 1 });

    // request.get('/api/list').then(d => {
    //   setData(d);
    // });
  }, []);
  useEffect(() => {
    ajax({
      customerCompanyName: searchVal,
    });
  }, [searchVal]);
  return (
    <div className={Style.wrapper}>
      <div className="toolbar">
        <Search
          placeholder="输入客户名称进行搜索"
          onSearch={value => setSearchVal(value)}
          style={{ width: 200 }}
        ></Search>
        <span style={{ marginLeft: '10px' }}>实施状态：</span>
        <Select style={{ width: 120 }}>
          {selectOption.map((item: { name: string; code: string }) => (
            <Option key={item.code} value={item.code}>
              {item.name}
            </Option>
          ))}
        </Select>
      </div>
      <div className="table-container">
        <Table
          pagination={{
            pageSize: 20,
            total,
          }}
          scroll={{
            y: 600,
          }}
          onChange={pagination => {
            ajax({
              currentPage: pagination.current,
            });
          }}
          columns={[
            {
              title: '负责人',
              dataIndex: 'responsibleNames',
              key: 'responsibleNames',
              render: text => <a>{text}</a>,
            },
            {
              title: '客户名称',
              dataIndex: 'customerCompanyName',
              key: 'customerCompanyName',
            },
            {
              title: '实施状态',
              dataIndex: 'status',
              key: 'status',
            },
            {
              title: '更新时间',
              key: 'updateTime',
              dataIndex: 'updateTime',
            },
            {
              title: '下次联系时间',
              key: 'nextCommunicateTime',
              dataIndex: 'nextCommunicateTime',
            },
            {
              title: '操作',
              key: 'action',
              render: (text, record) => (
                <Space size="middle">
                  <a>下载模板</a>
                  <a>查看日志</a>
                </Space>
              ),
            },
          ]}
          dataSource={data}
        />
      </div>
    </div>
  );
}
export default customManager;
