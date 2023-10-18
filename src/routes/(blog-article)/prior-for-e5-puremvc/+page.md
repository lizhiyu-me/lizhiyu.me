---
title: PureMVC | Prior for Episode 5
slug: prior-for-e5-puremvc
coverImage: /images/posts/blog-posts.jpg
date: 2021-03-15T21:55:15.361Z
excerpt: PureMVC will be included in next episode.
tags:
  - Tutorial:Make a multiplayer card game
---

## PureMVC | Prior for Episode 5

> PureMVC will be included in next episode.

> PureMVC is a framework for creating applications based upon the
> well-established model–view–controller (MVC) design pattern. The free, open
> source framework was originally implemented in the ActionScript 3 language for
> use with Adobe Flex, Flash and AIR, and it has since been ported to nearly all
> the major web development platforms.

![puremvc.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1648287487663/TkUwfryAy.jpg)

Advantages and disadvantages of PureMVC:

- **Advantages **

1. Use intermediaries, agents and commands to realize decoupling, which reduces
   the coupling among model, view and controller and improves the reuse of some
   codes

2. The view interface can be reused

3. Model data can be reused

- **Disadvantages **

1. Code redundancy is large. For simple functions, you have to create view,
   mediator, command, facade, proxy and model scripts
2. The operation process is a cumbersome process, and the code in mediator will
   appear complex and difficult to understand, unless you are familiar with the
   implementation principle of PureMVC

- **PureMVC features**

1. The notice shall be delivered through the operation of packing and unpacking
2. The command / notification is implemented in the observer mode. The command /
   notification uses the reflection acquisition method in the observer and is
   executed
3. No service (this module for network communication can be added according to
   the structure of MVC)
4. Data is transmitted through notification. Sendnotification has only one
   object type parameter. It will feel that the data transmission is limited.
   You can combine the data into a type / structure for transmission, or expand
   another parameter for notification.
