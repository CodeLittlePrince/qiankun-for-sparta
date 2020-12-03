# 遗留问题
- 版本：qiankun 2.3.0
- 问题：
1、子应用index.html中script标签引用了require.js，然后，在接下去的script标签里使用require.js提供的window下的requirejs方法去初始化。把子应用嵌入到乾坤的主应用后发现，requirejs方法不见了。
2、另一个子应用有一个动态div，实在页面初始化之后挂载到body的，作为子应用嵌入到乾坤的主应用后发现，在切到其它应用后，这个div依然存在于body上，只是没有样式。
3、子应用不能好好用position: fixed了。


# 本地预览
```shell
yarn examples:install
yarn examples:start
```
