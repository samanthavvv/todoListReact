import React from "react";
import ReactDOM from "react-dom";

import TodoApp from "./component/todoApp";
import TodoService from "./service/todoService";

const todoService=new TodoService()

ReactDOM.render(<TodoApp service={todoService}/>, document.getElementById('root'))