---
title: Make a multiplayer card game - Episode 5 | Create 2D graphical interface with Cocos Creator
slug: make-a-multiplayer-card-game-episode-5
coverImage: /images/posts/blog-posts.jpg
date: 2021-03-22T21:55:15.361Z
excerpt: Create 2D graphical interface with Cocos Creator
tags:
  - Tutorial:Make a multiplayer card game
---

## Make a multiplayer card game - Episode 5 | Create 2D graphical interface with Cocos Creator

This chapter is almost a month away from the previous chapter. During this
period, it is mainly about the transformation and reconstruction of the client.
The content of the overall client is almost completely different from the
command-line version of the previous chapter.

According to the previous plan, I converted all the code written in JS to TS and
transplanted the command-line interactive interface to the conventional game
interactive interface (using cocos creator game engine).

Previously, in order to quickly realize the function, the server and client used
only one file to encode. Up to now, the client code of the project has been
modularized, and the classic PureMVC library has been introduced to completely
decouple the UI interaction and data, network messages and game operation logic,
so as to create conditions for extracting the code of the framework independent
of the game engine (it is planned to use one framework to access different view
layer engines).

PureMVC has been introduced in previous articles. The core idea is to decouple
view and data. The data is processed by proxy and the facade is controlled by
proxy.

Compared with the previous version, some changes are involved: -The difference
between socket and web socket API. It mainly includes the names of several
monitored events and the interfaces for sending messages. -UI display layer
independent. Command line output and game engine rendering view interactive
operation interface.

[demo url](https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode5-UICocosCreator)

本章离前一章快一个月了，在这段时间，主要是对客户端的改造和重构，整体客户端的内容几乎完全不同于上一章命令行版本。

按照之前的计划，我将之前用js写的代码全部转为了ts，将命令行交互界面移植到常规的游戏交互界面（利用CocosCreator游戏引擎）。

之前为了快速实现功能，服务器和客户端分别只用一个文件进行编码。
截至目前，项目客户端代码进行了模块化改造，引入了经典的PureMVC库，将UI交互和数据，网络消息和游戏操作逻辑完全解藕，为后面提取与游戏引擎无关的框架（计划用一个框架接入不同视图层引擎）代码创造条件。

在之前的文章里面已经介绍过PureMVC，核心的思想就是视图与数据解藕。
通过一个门面类（Facade）来统管框架，用视图代理（Mediator）控制显示组件逻辑，用数据模型代理（Proxy）存储和处理数据。

相对于上一版，涉及到的一些改动：

- socket 和 web socket api 的区别。主要是几个监听的事件名字，和发送消息的接口。
- ui显示层独立。命令行输出和游戏引擎渲染视图交互操作界面。

[demo url](https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode5-UICocosCreator)
