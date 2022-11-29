import { Card, Row, Col, Select } from 'antd';
import React from 'react';


import "antd/lib/card/style"
import "antd/lib/row/style"
import "antd/lib/col/style"
import "antd/lib/Select/style"

const Option = Select.Option;

// function handleChange(value) {
//   console.log(`selected ${value}`);
// }

// function handleBlur() {
//   console.log('blur');
// }

// function handleFocus() {
//   console.log('focus');
// }

const Filter = (props) => (
  <Row gutter={16}>
    <Col span={4}>
      <Card bordered={false}>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={props.onChange}
          // onFocus={handleFocus}
          // onBlur={handleBlur}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
          <Option value="all">全部显示</Option>
          <Option value="completed">已完成</Option>
          <Option value="uncompleted">未完成</Option>
        </Select>
      </Card>
    </Col>

    <Col span={8}>
    </Col>
  </Row>
);

export default Filter;
