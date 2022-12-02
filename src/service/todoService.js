import store from "store"
import { observable,computed } from "mobx";  //设置被观察者
import { symbol } from "prop-types";

/**
 * 类的作用是
 * @params() value
 */

const ALL = Symbol("all")
const COMPLETED = Symbol("completed")
const UNCOMPLETED = Symbol("uncompleted")

export default class TodoService {
    constructor(){
        this.load()
    }

    //localstorage 存储中key 的前缀,用作业务区分
    static NAMESAPCE = "todo::";
    static STATES = {
        all: ALL,
        completed:COMPLETED,
        uncompleted:UNCOMPLETED
    };

    //待办事项容器: {title, key, completed}
    @observable _todos = new Map(); //Mobx中的被观察者
    // @observable _change = ?
    @observable filter = TodoService.STATES.uncompleted  

    // get 方法
    @computed get todos(){    //getter
        return [...this._todos.values()].filter(item => {
            let fs = this.filter;
            
            if (fs === TodoService.STATES.all) { return true };
            if (fs === TodoService.STATES.completed) { return item.completed === true ? true : false };
            if (fs === TodoService.STATES.uncompleted) { return item.completed === false ? true : false };
        })
    }

    //从localstorage  中加载数据到 todos中：初始化
    load(){
        store.each((value, key) => {
            if (key.startsWith('todo')){
                this._todos.set(key,value)
            }
        })
    };

    //创建新的待办事项：key 的唯一+可变性
    create(title) {
        console.log("create title")

        const todo = {
            key: TodoService.NAMESAPCE + (new Date()).valueOf(),    //毫秒时间戳
            title: title,
            completed: false
        };

        //存储todo
        this._todos.set(todo.key, todo);

        //持久化todo
        store.set(todo.key, todo)

        let temp = this._todos
        this._todos = {}
        this._todos = temp

        return todo
    };

    setTodoState(key, checked){
        let todo = this._todos.get(key)
        todo.completed = checked
        //同步
        store.set(key, todo)

        let temp = this._todos
        this._todos = {}
        this._todos = temp
    };

    setFilterState(value){
        console.log("todo service setFilterState", value)
        this.filter = TodoService.STATES[value]
    }

}


