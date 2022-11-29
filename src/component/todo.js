import { Card, Row, Col, Checkbox } from 'antd';
import React from 'react';


import "antd/lib/card/style"
import "antd/lib/input/style"
import "antd/lib/row/style"
import "antd/lib/col/style"
import "antd/lib/checkbox/style"
import "antd/dist/antd"

const Todo = (props) => (
    <div className="site-card-wrapper">
    <Row gutter={16}>
        <Col span={4}>
            <Card >
                <Checkbox 
                bordered={true} 
                onChange={e => {props.onChange(e, props.checkboxkey)}}
                checked={props.checked}></Checkbox>
            </Card>
        </Col>
        <Col span={8}>
            <Card bordered={true}>
                {props.todo.title}
            </Card>
        </Col>
    </Row>
</div>
);

export default Todo;
