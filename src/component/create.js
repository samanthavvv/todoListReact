import React from 'react';
import { Input, Card } from 'antd';

import "antd/lib/card/style"
import "antd/lib/input/style"
import "antd/lib/row/style"
import "antd/lib/col/style"

export default class Create extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div className="site-card-border-less-wrapper">
                <Card title="请输入待办事宜" >
                    <p>
                        <Input
                            placeholder="请输入"
                            style={{ width: 300 }}
                            onPressEnter={this.props.onCreate} />
                    </p>
                </Card>
            </div>
        )
    };
}

// export default class Create extends React.Component{
//     render(){
//         return (
//         <div className="site-card-border-less-wrapper">
//             <Card title="请输入待办事宜" bordered={false} style={{ width: 300 }}>
//             <p><Input placeholder="请输入"/></p>
//             </Card>
//         </div>
//         )
//     };
// };

// export class Name {Create}; 
