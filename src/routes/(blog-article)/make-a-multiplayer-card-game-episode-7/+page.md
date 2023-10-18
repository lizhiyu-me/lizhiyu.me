---
title: Make a multiplayer card game - Episode 7 | Create 3D graphical interface with Three.js
slug: make-a-multiplayer-card-game-episode-7
coverImage: /images/posts/blog-posts.jpg
date: 2021-04-02T21:55:15.361Z
excerpt: Create 3D graphical interface with Three.js
tags:
  - Tutorial:Make a multiplayer card game
---

## Make a multiplayer card game - Episode 7 | Create 3D graphical interface with Three.js

This section mainly introduces the use
of[react-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)(referred
to as R3F bellow) to realize the construction of interactive scenes.

### Why Choose R3F

- R3F just expresses Three.js in JSX, no extra overhead
- Build scenes in a declarative way with react, including but not limited to
  components that can easily react to state, are easy to interact with, and can
  leverage React's ecosystem

### Scenario construction implementation

- **Card**

Note that the texture required for rendering is obtained by passing the image
address to <code>useTexture</code>

```typescript
//Card.tsx
import { useTexture } from "@react-three/drei";
import { Mesh } from "three";

function Card(
  props: {
    faceTextureUrl: string;
    idx: number;
    beginX: number;
    serial: number;
  },
) {
  let _selectedOffsetY = .2;
  let _beginX = props.beginX;
  const _texture = useTexture({
    map: props.faceTextureUrl,
  });
  return (
    <mesh
      position={[_beginX + props.idx * .5, 0, props.idx * 0.001]}
      onClick={(e: any) => {
        e.stopPropagation();
        let _targetMesh = e["eventObject"] as Mesh;
        let _pos = _targetMesh.position;
        let _upY;
        if (_pos.y == 0) _upY = _selectedOffsetY;
        else _upY = 0;
        _targetMesh.position.set(_pos.x, _upY, _pos.z);
      }}
      userData={{ "_d_cardSerial": props.serial }}
    >
      <boxGeometry args={[2, 2, .001]} />
      <meshStandardMaterial {..._texture} />
    </mesh>
  );
}

export default Card;
```

- **Game Scene**

First you must declare a Canvas node, because all three.js must be under the
Canvas node

```typescript
<Canvas
  orthographic
  camera={{ zoom: 50, position: [0, 0, 100], rotation: [0, 0, 0] }}
>
  <R3fScene
    mainHandCards={mainHandCards}
    outCards={outCards}
    gameModel={_gameModel}
  >
  </R3fScene>
</Canvas>;
```

In order to facilitate the use of hooks provided by
<code>@react-three/fiber</code> (three.js related hooks can only be used under
the Canvas node), the game scene node is proposed separately

```typescript
const R3fScene = (
  props: { mainHandCards: number[]; gameModel; outCards: number[][] },
) => {
  const {
    scene,
    camera,
  } = useThree();
  useEffect(() => {
    console.log(scene.getObjectByName("handList"));
  });
  let mainHandCards = props.mainHandCards;
  let _gameModel = props.gameModel;
  _gameModel.context = scene;
  function getFaceTextureUrl(serial): string {
    let _prefix = "/faces/";
    let _readableName = _gameModel.getCardReadableName(serial);
    if (_readableName === "rJkr") return _prefix + "Poker_Joker_B.png";
    else if (_readableName === "bJkr") return _prefix + "Poker_Joker_R.png";
    else {
      let _suitDic = { 0: "D", 1: "C", 2: "H", 3: "S" };
      let _suitNumber: number = serial >> 4;
      return _prefix + "Poker_" + _suitDic[_suitNumber] + _readableName +
        ".png";
    }
  }

  let _cardCount = mainHandCards.length;
  let _beginX = -((_cardCount - 1) * .5 + 1.5) / 2;
  return (
    <>
      <CameraControls />
      <ambientLight intensity={0.1} />
      <directionalLight color="white" position={[0, 0, 5]} />

      <group name="handList">
        {mainHandCards.map((serial: number, idx) => {
          return (
            <Card
              key={"k" + serial}
              faceTextureUrl={getFaceTextureUrl(serial)}
              idx={idx}
              beginX={_beginX}
              serial={serial}
            />
          );
        })}
      </group>
      <group position={[2, 4, 0]} scale={.6} name="out-list-1">
        {props.outCards[1].map((serial: number, idx) => {
          return (
            <Card
              key={"k" + serial}
              faceTextureUrl={getFaceTextureUrl(serial)}
              idx={idx}
              beginX={_beginX}
              serial={serial}
            />
          );
        })}
      </group>
      <group position={[-2, 4, 0]} scale={.6} name="out-list-2">
        {props.outCards[2].map((serial: number, idx) => {
          return (
            <Card
              key={"k" + serial}
              faceTextureUrl={getFaceTextureUrl(serial)}
              idx={idx}
              beginX={_beginX}
              serial={serial}
            />
          );
        })}
      </group>
      <group position={[0, 2, 0]} scale={.6} name="out-list-0">
        {props.outCards[0].map((serial: number, idx) => {
          return (
            <Card
              key={"k" + serial}
              faceTextureUrl={getFaceTextureUrl(serial)}
              idx={idx}
              beginX={_beginX}
              serial={serial}
            />
          );
        })}
      </group>
    </>
  );
};
```

In order to reflect the 3D interface, add an orbiting camera (swipe the scene to
adjust the camera corner)

```typescript
extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  camera.position.set(0, 0, 10);
  const controls = useRef();
  useFrame((state) => {
    (controls.current as unknown as OrbitControls).update();
  });
  return (
    // @ts-ignore
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 4}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
      rotationSpeed={0.01}
    />
  );
};
```

Scene complete code：

```typescript
//App.tsx
import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./App.css";
import Card from "./component/Card";
import GameModel from "./base/src/game/model/GameModel";
import GameSceneMediator from "./base/src/game/view/GameSceneMediator";
import GameSceneView from "./component/GameSceneView";

extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  camera.position.set(0, 0, 10);
  const controls = useRef();
  useFrame((state) => {
    (controls.current as unknown as OrbitControls).update();
  });
  return (
    // @ts-ignore
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 4}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
      rotationSpeed={0.01}
    />
  );
};

const R3fScene = (
  props: { mainHandCards: number[]; gameModel; outCards: number[][] },
) => {
  const {
    scene,
    camera,
  } = useThree();
  let mainHandCards = props.mainHandCards;
  let _gameModel = props.gameModel;
  _gameModel.context = scene;
  function getFaceTextureUrl(serial): string {
    let _prefix = "/faces/";
    let _readableName = _gameModel.getCardReadableName(serial);
    if (_readableName === "rJkr") return _prefix + "Poker_Joker_B.png";
    else if (_readableName === "bJkr") return _prefix + "Poker_Joker_R.png";
    else {
      let _suitDic = { 0: "D", 1: "C", 2: "H", 3: "S" };
      let _suitNumber: number = serial >> 4;
      return _prefix + "Poker_" + _suitDic[_suitNumber] + _readableName +
        ".png";
    }
  }

  let _cardCount = mainHandCards.length;
  let _beginX = -((_cardCount - 1) * .5 + 1.5) / 2;
  return (
    <>
      <CameraControls />
      <ambientLight intensity={0.1} />
      <directionalLight color="white" position={[0, 0, 5]} />

      <group name="handList">
        {mainHandCards.map((serial: number, idx) => {
          return (
            <Card
              key={"k" + serial}
              faceTextureUrl={getFaceTextureUrl(serial)}
              idx={idx}
              beginX={_beginX}
              serial={serial}
            />
          );
        })}
      </group>
      <group position={[2, 4, 0]} scale={.6} name="out-list-1">
        {props.outCards[1].map((serial: number, idx) => {
          return (
            <Card
              key={"k" + serial}
              faceTextureUrl={getFaceTextureUrl(serial)}
              idx={idx}
              beginX={_beginX}
              serial={serial}
            />
          );
        })}
      </group>
      <group position={[-2, 4, 0]} scale={.6} name="out-list-2">
        {props.outCards[2].map((serial: number, idx) => {
          return (
            <Card
              key={"k" + serial}
              faceTextureUrl={getFaceTextureUrl(serial)}
              idx={idx}
              beginX={_beginX}
              serial={serial}
            />
          );
        })}
      </group>
      <group position={[0, 2, 0]} scale={.6} name="out-list-0">
        {props.outCards[0].map((serial: number, idx) => {
          return (
            <Card
              key={"k" + serial}
              faceTextureUrl={getFaceTextureUrl(serial)}
              idx={idx}
              beginX={_beginX}
              serial={serial}
            />
          );
        })}
      </group>
    </>
  );
};

function App(props: any) {
  let _gameFacade = props.gameFacade;
  let _gameModel: GameModel = _gameFacade.retrieveProxy("GameModel");
  let [mainHandCards, setMainHandCards] = useState(_gameModel.cardsArr);
  let [outCards, setOutCards] = useState(_gameModel.outCards);
  _gameModel.setMainHandCardsHook(setMainHandCards);
  _gameModel.setOutCardsHook(setOutCards);

  useEffect(() => {
    if (_gameFacade.retrieveMediator("GameSceneMediator") == null) {
      _gameFacade.registerMediator(
        new GameSceneMediator(null, new GameSceneView()),
      );
    }
  });

  return (
    <>
      <div id="canvas-container">
        <Canvas
          orthographic
          camera={{ zoom: 50, position: [0, 0, 100], rotation: [0, 0, 0] }}
        >
          <R3fScene
            mainHandCards={mainHandCards}
            outCards={outCards}
            gameModel={_gameModel}
          >
          </R3fScene>
        </Canvas>
      </div>

      <div
        id="status"
        style={{
          display: "fix",
          textAlign: "center",
          fontSize: "2em",
          userSelect: "none",
        }}
      >
        hello
      </div>
      <div id="controlPanel-scores" className="controlPanel">
        <button id="controlPanel-scores-1" className="controlButton">1</button>
        <button id="controlPanel-scores-2" className="controlButton">2</button>
        <button id="controlPanel-scores-3" className="controlButton">3</button>
      </div>

      <div id="controlPanel-operation" className="controlPanel">
        <button id="controlPanel-operation-pass" className="controlButton">
          pass
        </button>
        <button id="controlPanel-operation-play" className="controlButton">
          play
        </button>
      </div>
    </>
  );
}

export default App;
```

### Framework adaptation changes

- **Getting scene node**

```typescript
getViewComponent(name: string,isDOM:boolean = true,canvasScene:any = null) {
        if(isDOM) return document.getElementById(name);
        else {
            if(canvasScene) return canvasScene.getObjectByName(name);
        }
    }
```

By passing in the scene object of three.js, call the getObjectByName interface
to obtain the node with the pre-set name attribute

- **Card value acquisition, card.userData (<code>userData</code> is the loading
  object of custom attributes in R3F, similar to <code>data-yourAttribute</code>
  in react, here you can encapsulate a method to decouple GameSceneMediator from
  card value, making the mediator more reusable )**

```typescript
private onOutCards_C2S() {
        this.hideControlPanel();
        let _outCardsSerial = [];
        let _cardsContainer = this.mViewClass.getViewComponent("handList",false,this.getGameModel().context);
        let _cards = _cardsContainer.children;
        for (let i = 0; i < _cards.length; i++) {
            let _card = _cards[i];
            if (this.mViewClass.isCardSelected(_card)) {
                _outCardsSerial.push(_card.userData["_d_cardSerial"]||_card["_d_cardSerial"] || _card.getAttribute("data-card-serial"));
            }
        }
        this.getNetFacade()?.sendNotification(card_game_pb.Cmd.PLAYCARDS_C2S, _outCardsSerial);
    }
```

- **Node coordinate adjustment**

By judging the adjustment of the corresponding css attribute of the node style
to the corresponding attribute of the node position object

```typescript
isCardSelected(card) {
        return card.position.y == .2 ? true : false;
    }
```

[Checkout the repo https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode7-r3f](https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode7-r3f)

---

本节主要介绍利用[react-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)(以下简称R3F)实现交互场景的搭建。

### 为什么选择R3F

- R3F仅仅是将Three.js用JSX进行表示，没有额外开销
- 可以用react的声明方式构建场景，包括但不限于组件可轻松对状态做出反应，易于交互，并且可以利用
  React 的生态

### 场景构建实现

- **扑克牌**

注意此处通过将图片地址传给<code>useTexture</code>，得到渲染需要的纹理

```typescript
//Card.tsx
import { useTexture } from "@react-three/drei";
import { Mesh } from "three";

function Card(
  props: {
    faceTextureUrl: string;
    idx: number;
    beginX: number;
    serial: number;
  },
) {
  let _selectedOffsetY = .2;
  let _beginX = props.beginX;
  const _texture = useTexture({
    map: props.faceTextureUrl,
  });
  return (
    <mesh
      position={[_beginX + props.idx * .5, 0, props.idx * 0.001]}
      onClick={(e: any) => {
        e.stopPropagation();
        let _targetMesh = e["eventObject"] as Mesh;
        let _pos = _targetMesh.position;
        let _upY;
        if (_pos.y == 0) _upY = _selectedOffsetY;
        else _upY = 0;
        _targetMesh.position.set(_pos.x, _upY, _pos.z);
      }}
      userData={{ "_d_cardSerial": props.serial }}
    >
      <boxGeometry args={[2, 2, .001]} />
      <meshStandardMaterial {..._texture} />
    </mesh>
  );
}

export default Card;
```

- **游戏场景**

首先必须声明一个Canvas节点，因为three.js的所有都必须在Canvas节点下

```typescript
<Canvas
  orthographic
  camera={{ zoom: 50, position: [0, 0, 100], rotation: [0, 0, 0] }}
>
  <R3fScene
    mainHandCards={mainHandCards}
    outCards={outCards}
    gameModel={_gameModel}
  >
  </R3fScene>
</Canvas>;
```

为了方便使用<code>@react-three/fiber</code>提供的hook（three.js相关的hook只能在Canvas节点下使用）,将游戏场景节点单独提出来

```typescript
const R3fScene = (
  props: { mainHandCards: number[]; gameModel; outCards: number[][] },
) => {
  const {
    scene,
    camera,
  } = useThree();
  useEffect(() => {
    console.log(scene.getObjectByName("handList"));
  });
  let mainHandCards = props.mainHandCards;
  let _gameModel = props.gameModel;
  _gameModel.context = scene;
  function getFaceTextureUrl(serial): string {
    let _prefix = "/faces/";
    let _readableName = _gameModel.getCardReadableName(serial);
    if (_readableName === "rJkr") return _prefix + "Poker_Joker_B.png";
    else if (_readableName === "bJkr") return _prefix + "Poker_Joker_R.png";
    else {
      let _suitDic = { 0: "D", 1: "C", 2: "H", 3: "S" };
      let _suitNumber: number = serial >> 4;
      return _prefix + "Poker_" + _suitDic[_suitNumber] + _readableName +
        ".png";
    }
  }

  let _cardCount = mainHandCards.length;
  let _beginX = -((_cardCount - 1) * .5 + 1.5) / 2;
  return (
    <>
      <CameraControls />
      <ambientLight intensity={0.1} />
      <directionalLight color="white" position={[0, 0, 5]} />

      <group name="handList">
        {mainHandCards.map((serial: number, idx) => {
          return (
            <Card
              key={"k" + serial}
              faceTextureUrl={getFaceTextureUrl(serial)}
              idx={idx}
              beginX={_beginX}
              serial={serial}
            />
          );
        })}
      </group>
      <group position={[2, 4, 0]} scale={.6} name="out-list-1">
        {props.outCards[1].map((serial: number, idx) => {
          return (
            <Card
              key={"k" + serial}
              faceTextureUrl={getFaceTextureUrl(serial)}
              idx={idx}
              beginX={_beginX}
              serial={serial}
            />
          );
        })}
      </group>
      <group position={[-2, 4, 0]} scale={.6} name="out-list-2">
        {props.outCards[2].map((serial: number, idx) => {
          return (
            <Card
              key={"k" + serial}
              faceTextureUrl={getFaceTextureUrl(serial)}
              idx={idx}
              beginX={_beginX}
              serial={serial}
            />
          );
        })}
      </group>
      <group position={[0, 2, 0]} scale={.6} name="out-list-0">
        {props.outCards[0].map((serial: number, idx) => {
          return (
            <Card
              key={"k" + serial}
              faceTextureUrl={getFaceTextureUrl(serial)}
              idx={idx}
              beginX={_beginX}
              serial={serial}
            />
          );
        })}
      </group>
    </>
  );
};
```

为了体现3D界面，添加一个轨道相机（滑动场景即可调整相机转角）

```typescript
extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  camera.position.set(0, 0, 10);
  const controls = useRef();
  useFrame((state) => {
    (controls.current as unknown as OrbitControls).update();
  });
  return (
    // @ts-ignore
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 4}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
      rotationSpeed={0.01}
    />
  );
};
```

场景完整代码：

```typescript
//App.tsx
import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./App.css";
import Card from "./component/Card";
import GameModel from "./base/src/game/model/GameModel";
import GameSceneMediator from "./base/src/game/view/GameSceneMediator";
import GameSceneView from "./component/GameSceneView";

extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  camera.position.set(0, 0, 10);
  const controls = useRef();
  useFrame((state) => {
    (controls.current as unknown as OrbitControls).update();
  });
  return (
    // @ts-ignore
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 4}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
      rotationSpeed={0.01}
    />
  );
};

const R3fScene = (
  props: { mainHandCards: number[]; gameModel; outCards: number[][] },
) => {
  const {
    scene,
    camera,
  } = useThree();
  let mainHandCards = props.mainHandCards;
  let _gameModel = props.gameModel;
  _gameModel.context = scene;
  function getFaceTextureUrl(serial): string {
    let _prefix = "/faces/";
    let _readableName = _gameModel.getCardReadableName(serial);
    if (_readableName === "rJkr") return _prefix + "Poker_Joker_B.png";
    else if (_readableName === "bJkr") return _prefix + "Poker_Joker_R.png";
    else {
      let _suitDic = { 0: "D", 1: "C", 2: "H", 3: "S" };
      let _suitNumber: number = serial >> 4;
      return _prefix + "Poker_" + _suitDic[_suitNumber] + _readableName +
        ".png";
    }
  }

  let _cardCount = mainHandCards.length;
  let _beginX = -((_cardCount - 1) * .5 + 1.5) / 2;
  return (
    <>
      <CameraControls />
      <ambientLight intensity={0.1} />
      <directionalLight color="white" position={[0, 0, 5]} />

      <group name="handList">
        {mainHandCards.map((serial: number, idx) => {
          return (
            <Card
              key={"k" + serial}
              faceTextureUrl={getFaceTextureUrl(serial)}
              idx={idx}
              beginX={_beginX}
              serial={serial}
            />
          );
        })}
      </group>
      <group position={[2, 4, 0]} scale={.6} name="out-list-1">
        {props.outCards[1].map((serial: number, idx) => {
          return (
            <Card
              key={"k" + serial}
              faceTextureUrl={getFaceTextureUrl(serial)}
              idx={idx}
              beginX={_beginX}
              serial={serial}
            />
          );
        })}
      </group>
      <group position={[-2, 4, 0]} scale={.6} name="out-list-2">
        {props.outCards[2].map((serial: number, idx) => {
          return (
            <Card
              key={"k" + serial}
              faceTextureUrl={getFaceTextureUrl(serial)}
              idx={idx}
              beginX={_beginX}
              serial={serial}
            />
          );
        })}
      </group>
      <group position={[0, 2, 0]} scale={.6} name="out-list-0">
        {props.outCards[0].map((serial: number, idx) => {
          return (
            <Card
              key={"k" + serial}
              faceTextureUrl={getFaceTextureUrl(serial)}
              idx={idx}
              beginX={_beginX}
              serial={serial}
            />
          );
        })}
      </group>
    </>
  );
};

function App(props: any) {
  let _gameFacade = props.gameFacade;
  let _gameModel: GameModel = _gameFacade.retrieveProxy("GameModel");
  let [mainHandCards, setMainHandCards] = useState(_gameModel.cardsArr);
  let [outCards, setOutCards] = useState(_gameModel.outCards);
  _gameModel.setMainHandCardsHook(setMainHandCards);
  _gameModel.setOutCardsHook(setOutCards);

  useEffect(() => {
    if (_gameFacade.retrieveMediator("GameSceneMediator") == null) {
      _gameFacade.registerMediator(
        new GameSceneMediator(null, new GameSceneView()),
      );
    }
  });

  return (
    <>
      <div id="canvas-container">
        <Canvas
          orthographic
          camera={{ zoom: 50, position: [0, 0, 100], rotation: [0, 0, 0] }}
        >
          <R3fScene
            mainHandCards={mainHandCards}
            outCards={outCards}
            gameModel={_gameModel}
          >
          </R3fScene>
        </Canvas>
      </div>

      <div
        id="status"
        style={{
          display: "fix",
          textAlign: "center",
          fontSize: "2em",
          userSelect: "none",
        }}
      >
        hello
      </div>
      <div id="controlPanel-scores" className="controlPanel">
        <button id="controlPanel-scores-1" className="controlButton">1</button>
        <button id="controlPanel-scores-2" className="controlButton">2</button>
        <button id="controlPanel-scores-3" className="controlButton">3</button>
      </div>

      <div id="controlPanel-operation" className="controlPanel">
        <button id="controlPanel-operation-pass" className="controlButton">
          pass
        </button>
        <button id="controlPanel-operation-play" className="controlButton">
          play
        </button>
      </div>
    </>
  );
}

export default App;
```

### 框架适配改动

- **获取场景节点**

```typescript
getViewComponent(name: string,isDOM:boolean = true,canvasScene:any = null) {
        if(isDOM) return document.getElementById(name);
        else {
            if(canvasScene) return canvasScene.getObjectByName(name);
        }
    }
```

通过传入three.js的场景对象，调用getObjectByName接口获取预先设置好name属性的节点

- **牌值获取card.userData（userData是R3F中自定义属性的装载对象，类似react中的data-yourAttribute,
  在这里可以封装一个方法，让GameSceneMediator与牌取值解耦，使mediator的复用性更强）**

```typescript
private onOutCards_C2S() {
        this.hideControlPanel();
        let _outCardsSerial = [];
        let _cardsContainer = this.mViewClass.getViewComponent("handList",false,this.getGameModel().context);
        let _cards = _cardsContainer.children;
        for (let i = 0; i < _cards.length; i++) {
            let _card = _cards[i];
            if (this.mViewClass.isCardSelected(_card)) {
                _outCardsSerial.push(_card.userData["_d_cardSerial"]||_card["_d_cardSerial"] || _card.getAttribute("data-card-serial"));
            }
        }
        this.getNetFacade()?.sendNotification(card_game_pb.Cmd.PLAYCARDS_C2S, _outCardsSerial);
    }
```

- **节点坐标调整**

由判断节点style 相应css属性的调整为节点position对象相应属性

```typescript
isCardSelected(card) {
        return card.position.y == .2 ? true : false;
    }
```

[查看本节相关代码 https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode7-r3f](https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode7-r3f)
