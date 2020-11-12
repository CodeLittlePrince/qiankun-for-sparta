# 遗留问题
- 版本：qiankun 2.3.0
- 问题：game应用有一个元素`mock-switch`是挂载在body上的，然后切换应用的时候，不会清楚`mock-swich`。在qiankun提供的unmount里请出了`mock-switch`后，从其它页面回来game应用，`mock-switch`部分的append入body的代码不会执行。


# 本地预览
```shell
yarn examples:install
yarn examples:start
```