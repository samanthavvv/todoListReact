import React from "react"
import ReactDOM from "react-dom"

//无状态组件:函数式组件，名称需大写，参数需传入Props
// let Root = props =>(<div id="root">root {props.name}</div>)


//wrapper 是一个装饰器
let Wrapper = id => Component => props => 
//这里的匿名函数是一个无状态的react组件，它返回一个react组件，且在返回值里面调用了Root 组件
    (   
        <div id={id}>
            柯里化 
            <hr />
            <Component {...props}/>
        </div>  
    );



//被装饰的react 组件需要使用类定义
@Wrapper('wrapper')    // Root = wrapper(Root)
class Root extends React.Component{
    render(){
        return (
            <div id="rooot">root {this.props.name} <hr /></div> 
        )
    }
};

ReactDOM.render(<Root name="Ada"/>, document.getElementById('root'))