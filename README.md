# Amnhh

Javascript Library for learning


## 时间 

start : 2016-01-13

end : undefined

## 预计完成的功能 : 

- 内核 `core` 的实现   `√` => 只实现了 `Amnhh` 的构造函数和 `Amnhh.fn` 的定义
- 自己尝试写一次选择器   `√` => 虽然很简单, 大部分通过 `querySelectorAll`, 小部分自己处理的 `id`, `class`, `tag` 的匹配, 但还是写出来了...
- 常规的 `dom` 操作的封装
- 对 `array`, `string`, `obj` 的扩展方法
- 对 `ajax` 的封装
- 对 `json` 的封装
- 加入一些类似二分查找、桶排序、冒泡排序之类的算法
- `promise` 的兼容版实现
- 对 `data` 操作的封装
- 对 `format` 的封装
- 对 `events` 的封装
- 对 `browser` 的嗅探的封装
- 对 `callback` 的封装
- 对 `util` 的封装 
- 常见 `filter` 的封装
- 添加中间件的封装

## 目录结构

```

├── README.md                               项目介绍
├── build                                   构建脚本目录
│   └── webpack.config.js
├── dist                                    dist
│   └── Amnhh.js                            
├── node_modules                            依赖
├── src                                     项目源码
│   ├── amnhh.js                            
│   ├── core.js
│   └── fn.js
├── test                                    测试目录
│   └── test.html
├── xmind                                   xmind图目录
│   └── Amnhh.xmind
└── diary                                   开发过程中的心得和技术总结
    └── diary-core.md

```

## 声明

Amnhh 为一个学习型库, 因为是学习相关, 所以做的大而全, 不支持线上使用, 谢谢

