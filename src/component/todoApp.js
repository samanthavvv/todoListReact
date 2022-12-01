import React from "react";
import {observer} from "mobx-react"

import Create from "./create";
import Todo from "./todo.js"
import Filter from "./filter";

@observer
export default class TodoApp extends React.Component{
    constructor(props) {
        console.log("root constructor")
        super(props)
        // this.state = { todo:this.props.service.todos, filter: "all" }
        this.state = { filter: "all" }
    }

    //新增todo 处理
    handleCreate(event) {
        console.log("todoapp handleCreate")
        // console.log(this);
        // console.log(event.target);
        console.log(event.target.value);

        this.props.service.create(event.target.value)    //获取用户输入数据，并存储
        // this.setState({ todo: this.props.service.todos }) //重新渲染
    }

    //“是否已完成” 的勾选框处理
    handleCheckedChange(event, key) {
        console.log("todoapp handleCheckedChange", event.target.checked)
        // this.setState({ todo: this.props.service.todos })
        this.props.service.setTodoState(key, event.target.checked)
    }

    // 过滤条件变化时的处理
    handleCondChange(value) {
        console.log("todoapp handleCondChange", value)
        // this.setState({ filter: value })
        this.props.service.setFilterState(value)
    }

    render() {
        return (
            <div>
                {/* 创建todo */}
                <Create onCreate={this.handleCreate.bind(this)} />

                {/* 过滤 */}
                {<Filter onChange={this.handleCondChange.bind(this)} />}

                <hr />

                {/* 根据过滤条件显示todo */}
                {[...this.props.service.todos.values()]
                    .map(item =>
                        <Todo onChange={this.handleCheckedChange.bind(this)}
                            checkboxkey={item.key}
                            key={item.key}
                            todo={item}
                            checked={item.completed} />)
                }
            </div>
        )
    }
};