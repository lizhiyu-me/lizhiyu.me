---
title: Make a multiplayer card game - Episode 3
slug: change-json-to-protocol-buffers-e3
coverImage: /images/posts/blog-posts.jpg
date: 2021-02-22T21:55:15.361Z
excerpt: Change JSON to Protocol Buffers
tags:
  - Tutorial:Make a multiplayer card game
---

## Make a multiplayer card game - Episode 3 | Change JSON to Protocol Buffers

> Protocol buffers are a language-neutral, platform-neutral extensible mechanism
> for serializing structured data. It has many advantages such as "Lesser in
> Size and Better in Performance", like this article
> [Why Google moved from JSON to Protocol Buffers?](https://anuragthakur.hashnode.dev/protobuf-why-google-moved-from-json-to-protocol-buffers-ckdxb8sgi03kdjas17ril3fbi)
> introduce.

I used it on all the projects I've worked on over the years. Besides the better
performance, what make me impressed is that the clean communication between
client and server with protocol buffers.

> You can clone
> [demo for episode3](https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode3)
> which including all the bellow content.

According to the
[official tutorial](https://github.com/protocolbuffers/protobuf), two steps
should be done:

1. Install the runtime library <code>google-protobuf</code>:<code>npm install
   google-protobuf</code>.
2. Get the Protocol Compiler <code>protoc</code>: download from
   [https://github.com/protocolbuffers/protobuf/releases](https://github.com/protocolbuffers/protobuf/releases)

Then run a command like <code>protoc --js_out=import_style=commonjs,binary:.
messages.proto base.proto</code>, you can get the <code>.js</code> file from
<code>.proto</code>.

When the <code>.js</code> file generated, the protocol buffers environment is
ready.

Back to our game, we should create a <code>.proto</code> file, named
<code>card-game.proto</code>.

The first line in <code>.proto</code> file should be:

```
syntax = "proto3";
```

which means which version of Protobuf we are using.

Define the enum of Cmd:

```
enum Cmd{
    NONE = 0;
    READY_C2S = 1;
    DEALCARDS_S2C = 2;
    COMPETEFORLANDLORDROLE_C2S = 3;
    PLAYTURN_S2C = 4;
    PLAYCARDS_C2S = 5;
    PLAYCARDS_S2C = 6;
    ILLEGALCARDS_S2C = 7;
    GAMEEND_S2C = 8;
}
```

enum Cmd is for routing, will be introduced later.

Define MainMessage message:

```
message MainMessage{
    uint32 cmd_id = 1;
    bytes data =2;
}
```

In order to encapsulate the header and data body, we should assign serialized
message to the data attribute.

Define data message like:

```
message DealCards_S2C{
    repeated uint32 cards = 1;
    uint32 seat_number = 2;
}
```

Then, generate our own <code>.js</code> file.

As the episode3 demo show, run command bellow in directory proto.

- Windows
  <code>.\protoc.exe --js_out=import_style=commonjs,binary:out
  card-game.proto</code>

- MacOS
  <code>./protoc --js_out=import_style=commonjs,binary:out
  card-game.proto</code>

Now, we have our own <code>.js</code> file from the <code>.proto</code> in which
we define message.

Let's encoding and decoding message with protocol buffers.

Encoding: >enum Cmd is used to map message type here

```
function encodeData(cmd, data) {
    let _proto_struct_obj;
    switch (cmd) {
        case card_game_pb.Cmd.DEALCARDS_S2C:
            _proto_struct_obj = new card_game_pb.DealCards_S2C();
            _proto_struct_obj.setCardsList(data.cards);
            _proto_struct_obj.setSeatNumber(data.seatNumber);
            break;
        case card_game_pb.Cmd.PLAYCARDS_S2C:
            _proto_struct_obj = new card_game_pb.PlayCards_S2C();
            _proto_struct_obj.setCardsList(data.cards);
            _proto_struct_obj.setSeatNumber(data.seatNumber);
            break;
        case card_game_pb.Cmd.ILLEGALCARDS_S2C:
            _proto_struct_obj = new card_game_pb.IllegalCards_S2C();
            _proto_struct_obj.setSeatNumber(data.seatNumber);
            break;
        case card_game_pb.Cmd.GAMEEND_S2C:
            _proto_struct_obj = new card_game_pb.GameEnd_S2C();
            _proto_struct_obj.setSeatNumber(data.seatNumber);
            break;
        case card_game_pb.Cmd.PLAYTURN_S2C:
            _proto_struct_obj = new card_game_pb.PlayTurn_S2C();
            _proto_struct_obj.setHandCardsList(data.handCards);
            _proto_struct_obj.setSeatNumber(data.seatNumber);
            break;
        default:
            console.log("no message matched.")
    }
    if (_proto_struct_obj) {
        let _mainMsg = new card_game_pb.MainMessage();
        _mainMsg.setCmdId(cmd);
        let _data = _proto_struct_obj.serializeBinary();
        _mainMsg.setData(_data);
        let _completeData = _mainMsg.serializeBinary();
        return _completeData;
    }
    return null;
}
```

Decoding: >enum Cmd is used to map message type here

```
function decodeData(buffer) {
    let _mainMsg = card_game_pb.MainMessage.deserializeBinary(buffer);
    let _cmd = _mainMsg.getCmdId();
    let _bytesData = _mainMsg.getData();
    let _data;
    switch (_cmd) {
        case card_game_pb.Cmd.READY_C2S:
            _data = card_game_pb.Ready_C2S.deserializeBinary(_bytesData);
            _data = {
                seatNumber: _data.getSeatNumber()
            }
            if (_this.ready_C2S) _this.ready_C2S(_data);
            break;
        case card_game_pb.Cmd.PLAYCARDS_C2S:
            _data = card_game_pb.PlayCards_C2S.deserializeBinary(_bytesData);
            _data = {
                cards: _data.getCardsList(),
                seatNumber: _data.getSeatNumber()
            }
            if (_this.playCards_C2S) _this.playCards_C2S(_data);
            break;
        case card_game_pb.Cmd.COMPETEFORLANDLORDROLE_C2S:
            _data = card_game_pb.CompeteForLandLordRole_C2S.deserializeBinary(_bytesData);
            _data = {
                score: _data.getScore(),
                seatNumber: _data.getSeatNumber()
            }
            if (_this.competeForLandLordRole_C2S) _this.competeForLandLordRole_C2S(_data);
            break;
        default:
            console.log("no message matched.")
    }
}
```

> Caution:
>
> 1. Attributes defined as **seat_number** in <code>.proto</code> file should be
   > call like getSeatNumber and setSeatNumebr.
> 2. Attributes defined as **repeated** type in <code>.proto</code> should call
   > getAttributeNameList and setAttributeList instead of the attribute self
   > name.
