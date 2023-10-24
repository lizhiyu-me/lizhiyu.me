---
title: 从零开始，与BabylonJS一起，开启你的Web3D之旅吧
slug: babylon-trans-1
coverImage: /images/posts/blog-posts.jpg
date: 2021-08-31T21:55:15.361Z
excerpt:
tags:
---
## 从零开始，与BabylonJS一起，开启你的Web3D之旅吧

![Screen Shot 2022-07-22 at 00.33.32.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658421252897/Jwqbfh4sf.png align="left")
> 欢迎来到 BabylonJS 零基础教程，本教程为萌新导向。无论你是Web开发的专家，富有想象力的设计师，还是充满好奇心的学生，只要你对3D相关的内容感兴趣。本教程都是你学习BabylonJS的绝佳开始，我们强烈建议每一个BabylonJS的初学者都从本教程开始学习。

本教程将与你一起，在浏览器上打造一个BabylonJS的小项目。你将了解到BabylonJS的演习场（playground），从最基础的引擎核心开始，完成一个可供发布的.html网页文件。

### 演习场（playground）

演习场是你开发BabylonJS程序最重要的工具，注意，没有之一。

![playground.jpeg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658421347293/kOkoHCp2b.jpeg align="left")

在演习场中，你可以随时随地实践你的想法，打造你的实验项目。将代码写入左侧的类似VS Code的编辑界面中，在右侧就能立马运行显示结果。

演习场将是你学习旅途中的贴心小伙伴，因为它提供了全宇宙最科学的循环学习体系，输入代码->察看结果，让你在反复实践中找到感觉。除此之外，还有一点十分重要，你可以随时保存或分享演习场的内容。这在你学习的过程中遇到问题时变得十分有用，你可以通过[Babylon.js 论坛](https://forum.babylonjs.com/)寻求帮助，官方的开发者和社区工作人员随时为你效劳。

当我们在帮助你解决问题的时候，最好的方法就是你能将问题通过演练场分享出来，这样一来，我们就能快速地定位到问题的关键所在。所以，只要你遇到任何问题，保存你的演练场，分享到论坛。你一定会被我们迅雷不及掩耳的回复速度所震撼。

说了这么多，既然演练场这重要，我们就来实操一下吧。

新建一个页面打开下方链接：

[Babylon.js Playground](https://playground.babylonjs.com/)

### 创建你的第一个场景

欢迎来到演习场，你只需要在左边修改/创建代码，就能在右边窗口看见实时运行结果。下面是我们为你提供的一个默认模版场景。快速地瞄一眼代码编辑窗口的绿色注释文字，这些文字会告诉你每一行代码的作用，贴心吧？

最好的学习方法就是在敲代码，边敲边学，边学边敲。

来让我们来尝试给这个默认场景做些调整。

20-24行代码：

```typescript
// Our built-in 'sphere' shape. //引擎内建的球体。
var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);

// Move the sphere upward 1/2 its height //将球体移动到它一半高度的位置,上面创建直径设置的是2，所以这里设置位置的y属性指为1
sphere.position.y = 1;
```

选中这几行代码，删掉它！

你已经做出了第一个改动！

感觉还不错吧？

但...等一下，场景当中怎么没有发生任何事情？

因为我们需要在修改了代码之后，需要重新启动演练场才能看到变更结果。

你可以点击启动按钮

![run.jpeg](https://cdn.hashnode.com/res/hashnode/image/upload/v1658421373423/9YF1Zc_hY.jpeg align="left")

，也可以按组合键`ALT+ENTER`

场景中的这个球不见了，神奇吧！

[点击查看Playground结果](https://playground.babylonjs.com/#2KRNG9)

> 如果你遇到任何问题，可以通过打开链接，对比自己的代码来查找错误

让我们来做一点别的改动。

找到创建地面的代码所在的行，在下面加上如下代码：

```typescript
let groundMaterial = new BABYLON.StandardMaterial("Ground Material", scene);
ground.material = groundMaterial;
ground.material.diffuseColor = BABYLON.Color3.Red();
```

再此运行（按组合键ALT+ENTER 或 点击播放按钮）

[点击查看Playground结果](https://playground.babylonjs.com/#2KRNG9#1)

恭喜！你成功创建了一个新的材质，并将材质赋值给了地面，还将材质的漫反射通道设置为红色！

很简单吧？如果你还有点懵也没关系，在这里我们需要知道的就是在左边输入代码，在右边察看结果😀

接下来，让我们来再做第一小改动。

找到这一行代码：

```typescript
ground.material.diffuseColor = BABYLON.Color3.Red();
```

用下面两行代码替换掉它：

```typescript
let groundTexture = new BABYLON.Texture(Assets.textures.checkerboard_basecolor_png.rootUrl, scene);
ground.material.diffuseTexture = groundTexture;
```

[点击查看Playground结果](https://playground.babylonjs.com/#2KRNG9#2)

恭喜+1！你创建了你的第一个Texture并赋值给了地面材质。

让我们继续，在你所有创建和设置地面相关的代码后面，敲几个回车，留出点空隙来展示演习场提供给我们的大杀器--提示模板。

输入`import` 你将看到界面上生成了一个列表，列表里边是代码片段，每一个片段都是一个小的功能实现。

让我们选择 `Import a Mesh w/Callback` ，再按下回车。

如下代码将立即出现在你的输入框里：

```typescript
BABYLON.SceneLoader.ImportMesh("meshName", "url to the mesh parent directory", "Mesh filename.fileextension", scene, function(newMeshes){

});
```

我们需要在模版代码的基础上做一些小小的润色：

- 1.删掉`meshName`,注意需要保留引号。
- 2.将`"url to the mesh parent directory"`（包括双引号） 替换为`Assets.meshes.Yeti.rootUrl`
- 3.将"Mesh filename.fileextension" （包括双引号）替换为`Assets.meshes.Yeti.filename`

- 4.在`BABYLON.SceneLoader.ImportMesh` 这一行下面，在`"});"`之前，输入：

  ```typescript
  newMeshes[0].scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
  ```

- 5.运行

  [点击查看Playground结果](https://playground.babylonjs.com/#2KRNG9#3)

  

  恭喜+1！你成功创建了一个.gltf格式的动画模型，并调整了它的缩放比例来适配地面。

  

  最后，让我们把创建好的场景动起来，让他跟随我们的鼠标滑动而调整镜头显示内容。

  删除5-9行的代码，输入createarc，在提示代码模版列表中选择 `Create An Arc Rotate Camera w/Degree`。

  再次运行，按住鼠标拖动或者触摸拖动场景，相机的视角就会跟随你的拖动和滑动变化啦。

>本篇为翻译BabylonJS官方教程的开始,后续将陆续更新相关系列文章

[原文链接](https://doc.babylonjs.com/journey/theFirstStep)

  
