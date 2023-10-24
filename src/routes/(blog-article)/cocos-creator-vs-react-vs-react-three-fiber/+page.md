---
title: Cocos Creator Vs React Vs React-Three-Fiber
slug: cocos-creator-vs-react-vs-react-three-fiber
coverImage: /images/posts/blog-posts.jpg
date: 2021-04-09T21:55:15.361Z
excerpt: 
tags:
  - engine select
---

## Cocos Creator Vs React Vs React-Three-Fiber 使用体验对比，新项目该如何从中选择

首先明确一点，下面针对标题中提到的三个东西的对比主要基于实现类似的功能，在开发体验上的偏感性思考，他们本身从根本上说设计定位就差异很大，甚至是包含扩展关系。

### 对比

- Cocos Creator
  是一个比较完整的游戏引擎，有十分方便的可见即可得的可视化编辑器，和大量的开箱即用的可选的功能模块。

- React 是一个JS库，生态极其丰富。

- React-Three-Fiber (下面称R3F)是Three.js的React 渲染器。

用以上三个工具开发了老少皆宜，人尽皆知的斗地主之后，我逐渐喜欢上了React和R3F，主要有一下几个原因：

1. 代码简洁，近乎极致的函数式编程，很多东西都是我之前自己想要去重构实现的，不谋而合的感觉很炸
2. 开发流程纯粹，VsCode一把梭，借助于HMR，代码改动后立马刷新界面，整个开发过程几乎没有界面的切换
3. 控制粒度更细，不管是界面视图界面的布局，还是样式，资源都可以很方便地用代码直接操控，而不用依赖任何其他工具
4. 坑基本被踩的差不多了，遇到的问题只要Google一下，解决方案如排山倒海之势，迎面而来
5. 生态繁荣，相关的各种类型的项目很多，最近就看到了好多基于Three.js实现的游戏，而且活跃度很高
6. R3F也是在React上盖了薄如蝉翼的一层，主要就是把Three.js的一些类封装为react的组件，用jsx表现出来，这也使Three.js的代码变得非常简洁易读，整体上二者的结合带来了易用性又不失灵活度

可以说上面说的几条主要都是与自己更加熟悉的Cocos
Creator以及之前使用的一些游戏引擎开发体验的对比。

### 结论

- 需要快速开发，适配多平台的项目，现阶段毫不犹豫，Cocos
  Creator，毕竟自家编辑器加持，开发、调试、发布一条龙服务，谁不爱呢
- 做感兴趣的项目，实践学到的一些新东西，我会选react和R3F，之后我也会继续基于R3F开发一些小游戏，边学边练
