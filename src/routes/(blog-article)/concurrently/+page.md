---
title: Concurrently
slug: concurrently
coverImage: /images/posts/blog-posts.jpg
date: 2021-04-16T21:55:15.361Z
excerpt: 
tags:
---

## Concurrently 一键启动客户端和服务器

> 在日常的全栈开发过程中,往往会同时启动服务器和客户端工程,分别启动服务器和客户端往往会不可避免的造成一定时间浪费和开发流程繁杂.本着能躺着就别坐着的原则,在万能的npm库中找到了**concurrently**

### 使用[concurrently](https://www.npmjs.com/package/concurrently)同时运行多个命令

如下面`package.json`内的脚本代码所示,concurrently将服务端及客户端项目的启动合并在一起了.妈妈再也不用担心我浪费时间在启动项目上了😊.

```json
"scripts": {
    "start": "concurrently --kill-others-on-fail \"npm run start-server\" \"npm run start-client\"",
    "start-server": "ts-node server/src/index.ts",
    "start-client": "cd client && npm run start"
    }
```
