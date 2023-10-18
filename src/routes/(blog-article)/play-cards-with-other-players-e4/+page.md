---
title: Make a multiplayer card game - Episode 4
slug: play-cards-with-other-players-e4
coverImage: /images/posts/blog-posts.jpg
date: 2021-03-01T21:55:15.361Z
excerpt: Play cards with other players
tags:
  - Tutorial:Make a multiplayer card game
---

## Make a multiplayer card game - Episode 4 | Play cards with other players

> This section is a milestone in this series of tutorials, and after this
> article, there will present a complete multiplayer local online card game.

The key point of this section is how to link multiplayer to play.

#### Almost all changes is on the server side:

We make a server and listen on "connection" event.

```
const net = require('net');
const server = net.createServer();
server.on("connection",()=>{});
```

Then we generate a player ID and seat number for the player connecting.

```
var playerIDArr = [];
function generatePlayerIDAndSeatNumber() {
    let _seat = playerIDArr.length;
    let _id = Math.floor(Math.random() * 10000);
    let _isExist = playerIDArr.indexOf(_id) != -1;
    if (_isExist) {
        generatePlayerIDAndSeatNumber();
    } else {
        playerIDArr.push(_id);
    }
    return { id: _id, seat: _seat };
}
```

Back to the "connection" event, we assign some attributes on socket to make a
identification.

```javascript
server.on("connection", (socket) => {
  let _id_seat = generatePlayerIDAndSeatNumber();
  let _playerID = _id_seat.id;
  let _seatNumber = _id_seat.seat;
  socket.id = _playerID;
  socket.seat = _seatNumber;
  socketDic[_playerID] = socket;

  addSocketListener(socket);
});
```

Add event listener to each socket, listen players' interaction information
through data which cotain the command ID to route different game logic:

```
function addSocketListener(socket) {
    socket.on('data', (data) => {
        let _playerID = socket.id;
        decodeData(data, _playerID);
    });
    socket.on('error', (error) => {
        //player disconnect
        console.log(error);
    });
}
```

the server forwards each player's messages, which are divided into separate
sending and broadcasting.

```
//send to a specific player
function send(playerID, cmd, data) {
    if (!mIsGaming) return;
    const _dataBuffer = encodeData(cmd, data);
    if (_dataBuffer) socketDic[playerID].write(_dataBuffer);
}
//send to all players
function broadcast(cmd, data) {
    if (!mIsGaming) return;
    const _dataBuffer = encodeData(cmd, data);
    if (_dataBuffer) {
        let _keyArr = Object.keys(socketDic);
        for (let i = 0; i < _keyArr.length; i++) {
            let _socket = socketDic[_keyArr[i]];
            _socket.write(_dataBuffer);
        }
    }
}
```

That's all the key points in this section, as above present, players can be
connect to a server and play with each other. You can check
[episode4 tag](https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode4)
to see the complete code.

---

The progress of the project up to this point have make a milestone, will not add
new content to the relevant repo main branch, excluding the subsequent
refactoring to prepare for the involvement of the game engine and framework.

The addition of new content will open another branch for development. Like each
episode, a tag will still be added after the chapter ends. You can find the
content of the corresponding chapter through the corresponding tag at any time.

In order to reflect the simplicity of native nodejs, I chose javascript. But I
have been developing with typescript in the past few years, is not very familiar
with javascript, which I must spend a little bit more time on debugging.

The content of the following chapters will expand rapidly. For either the
robustness of development or my proficiency. I will use typescript for new
content development and refactoring in later articles.

**The next episode, as the content list in the first episode, I will add game
engine Cocos Creator, before which I will make a refactory, besides move
javascript to typescript, but something about modularity.**

Thanks for your reading, and discussion is always welcome, I am very glad to
talk with you in below comment section😊.
