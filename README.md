#react-mobx-starter

# 2022.11.30
**USER STORY**:
component/todoApp.js 原来通过import 导入的方式，访问service/todoService.js。这样做的缺点是:
1. 视图层组件应该只用作界面显示，而不应该导入和直接使用业务逻辑层的代码。

**优化**:
1. 通过组件的props，将业务逻辑组件作为视图层组件的属性传递使用。

# 2022.12.01
**USER STORY**:
加入状态管理库：Mobx
观察者：Observer
被观察者：Obserable

**优化**:
1. component/todoApp.js：组件为观察者，当被观察者（todos）发生变化时，组件会重新渲染
2. service/todoservice.js：todos 为被观察者