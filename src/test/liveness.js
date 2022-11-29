import React from 'react';
import ReactDom from 'react-dom';

class Sub extends React.Component {
  constructor(props){
    super(props)  //调用父类构造器
    console.log('sub constructor')
    this.state = { count : 0 } //组件初始 化的状态
  }

  handleClick(event){
    this.setState( {count: this.state.count+1} )
  }

  render(){
    console.log('sub render')
    return (
      <div style={{height:200+'px',color:'red',backgroundColor:
      '#f0f0f0'}} >
        <a id='sub' onClick={this.handleClick.bind(this)}>
          Sub's count = {this.state.count}
        </a>
      </div>
    )
  }

  componentWillMount(){
    //constructor 之后，第一次redner 之前
    console.log('sub componentWillMount')
  }

  componentDidMount(){
    //第一次render之后
    console.log('sub componentDidMount')
  }

  componentWillReceiveProps(nextProps){
    //props 组件内只读，只能从外部改变
    //props 变更时，接受到新的props,交给shouldComponentUpdates
    console.log('sub componentWillReceiveProps', this.state.count)
    console.log(this.props)
    console.log(this.nextProps)
  }

  shouldComponentUpdate(nextProps,nextState){
    //是否组件更新，props或者states 方式改变时，返回布尔值：为True时才会更新
    console.log('sub shouldComponentUpdate', this.state.count, nextProps)
    return true;  //return false 将拦截更新

  }

  componentWillUpdate(nextProps,nextState){
    //shouldComponentUpdate返回True后，真正更新前触发，触发此方法后调用render
    console.log('sub componentWillUpdate',this.state.count, nextState)
  }

  componentDidUpdate(prevProps, prevState){
    //同意更新后，render之后调用
    console.log('sub componentDidUpdate',prevProps, prevState)
  }
}

class Root extends React.Component{
  constructor(props){
    super(props)
    console.log('root constructor')
    this.state = {flag:true, name:'root'}   //定义一个对象
  }

  handleClick(event){
    this.setState({
      flag: !this.state.flag,
      name:this.state.flag? this.state.name.toLowerCase():this.state.name.toUpperCase()
    })
  }

  render(){
    return (
      <div id='root' onClick={this.handleClick.bind(this)}>
        My name is {this.state.name}
        <hr />
        <Sub /> {/*父组件的render，会引起下一级组件的更新流程，导致props重新发送，即时子组件的props没有改变过*/}
      </div>
    )
  }
}

ReactDom.render(<Root rootname='root'/>, document.getElementById('root'))