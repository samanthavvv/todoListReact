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

# 2022.12.06
**USER STORY**:
搭建nginx 服务器，将应用程序放在nginx 服务器上运行。只需在本地调试好代码后，进行 'npm run build' ,然后将打包好的文件，放到nginx服务器对应目录上即可。

**优化**:
已有的网页资源: /index.html, /api/todo/todoapp.html
网页之间的跳转是:  
/index.html 中的创建titile 操作  ----访问----> todoservice.js 中的 create 方法，其中的axios 模块会对 /api/todo 进行post 的网络请求：webpack.config.dev.js 中的devServer 段定义了对 /api 及其目录下的访问都定位到 http://120.26.48.153:80/api/todo ----> 此时会去nginx 配置文件中找出对 /api/todo 这个资源的设置