#react-mobx-starter

# 2022.11.30
**USER STORY**:
component/todoApp.js 原来通过import 导入的方式，访问service/todoService.js。这样做的缺点是:
1. 视图层组件应该只用作界面显示，而不应该导入和直接使用业务逻辑层的代码。

**优化**:
1. 通过组件的props，将业务逻辑组件作为视图层组件的属性传递使用。
