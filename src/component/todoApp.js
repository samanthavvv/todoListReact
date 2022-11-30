import React from "react";

import Create from "./create";
import Todo from "./todo.js"
import Filter from "./filter";


export default class TodoApp extends React.Component{
    constructor(props) {
        console.log("root constructor")
        super(props)
        this.state = { todo:this.props.service.todos.key, filter: "all" }
    }

    //新增todo 处理
    handleCreate(event) {
        console.log("root handleCreate")
        // console.log(this);
        // console.log(event.target);
        console.log(event.target.value);

        this.props.service.create(event.target.value)    //获取用户输入数据，并存储
        this.setState({ todo: this.props.service.todos.key }) //重新渲染
    }

    //“是否已完成” 的勾选框处理
    handleCheckedChange(event, key) {
        console.log('~~~~~~~~~~~~~~~~~', event.target.checked)
        this.setState({ todo: this.props.service.todos.key })
        this.props.service.setTodoState(key, event.target.checked)
    }

    // 过滤条件变化时的处理
    handleCondChange(value) {
        console.log(value)
        this.setState({ filter: value })
    }

    render() {
        return (
            <div>
                {/* 创建todo */}
                <Create onCreate={this.handleCreate.bind(this)} />

                {/* 过滤是否完成 */}
                {<Filter onChange={this.handleCondChange.bind(this)} />}

                <hr />

                {/* 根据过滤条件显示todo */}
                {[...this.props.service.todos.values()]
                    .filter(item => {
                        let fs = this.state.filter;

                        if (fs === "all") { return true };
                        if (fs === "completed") { return item.completed === true ? true : false };
                        if (fs === "uncompleted") { return item.completed === false ? true : false };
                    })
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