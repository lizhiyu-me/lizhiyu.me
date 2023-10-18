---
title: Make a multiplayer card game - Episode 6 | Create 2D graphical interface with React
slug: create-2d-graphical-interface-with-react-e6
coverImage: /images/posts/blog-posts.jpg
date: 2021-03-29T21:55:15.361Z
excerpt: This section mainly uses react to implement UI views. Before this section, a UI view version has been implemented with cocos creator. In order to reuse the basic framework, we abstract the game logic and decouple the logic related to the view engine api.
tags:
  - Tutorial:Make a multiplayer card game
---
## Make a multiplayer card game - Episode 6 | Create 2D graphical interface with React

This section mainly uses react to implement UI views. Before this section, a UI view version has been implemented with cocos creator. In order to reuse the basic framework, we abstract the game logic and decouple the logic related to the view engine api. The following is an abstracted interface:


```
export interface IGameSceneView {
    getViewComponent(name: string),
    getNewViewComponent(comp),
    getChild(childPath, parent),
    addClickListener(comp, handler, target),
    setCard(card, name),
    setLabel(labelComp, text),
    removeAllChildren(parent),
    addChild(child, parent),
    isCardSelected(card),
    toggleCardSelectedStatus(card),
    showComponent(comp),
    hideComponent(comp)
}
```
Compared with cocos creator, the implementation of react is more operable at the code level. The styles of interface elements are all implemented by handwritten code. The hot-reload that comes with create-react-app also responds to changes very quickly. There is a time to switch editors and wait for the editor to refresh, which is very lightweight.

Code reference https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode6-react

The next article mainly introduces the comparison between cocos creator and react implementation in development.



本节主要是用react实现UI视图。
在本节之前，已经用cocos creator实现了一个UI视图版本，为了重用基础框架，我们将游戏逻辑进行抽象，并将与视图引擎api相关的逻辑解耦出来。
下面是抽象出来的一个接口：
``` typescript
export interface IGameSceneView {
    getViewComponent(name: string),
    getNewViewComponent(comp),
    getChild(childPath, parent),
    addClickListener(comp, handler, target),
    setCard(card, name),
    setLabel(labelComp, text),
    removeAllChildren(parent),
    addChild(child, parent),
    isCardSelected(card),
    toggleCardSelectedStatus(card),
    showComponent(comp),
    hideComponent(comp)
}
```

相对于cocos creator，react的实现在代码层面可操作性较强，体现在界面元素的样式都通过手写代码来实现，create-react-app自带的hot-reload也非常快地反馈变更，不会有切换编辑器和等待编辑器刷新的时间，非常轻量的感觉。

代码参考 [https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode6-react](https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode6-react)

下一篇主要介绍cocos creator 与 react 实现在开发上的对比。
