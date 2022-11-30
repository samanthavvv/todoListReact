import store from "store"

/**
 * 类的作用是
 * @params() value
 */
export default class TodoService {
    constructor(){
        this.load()
    }

    //localstorage 存储中key 的前缀,用作业务区分
    static NAMESAPCE = "todo::";

    //待办事项容器: {title, key, completed}
    _todos = new Map();

    // get 方法
    get todos(){
        return this._todos
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

        return todo
    };

    setTodoState(key, checked){
        let todo = this._todos.get(key)
        todo.completed = checked
        //同步
        store.set(key, todo)
    };

}


