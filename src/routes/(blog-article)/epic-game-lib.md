## Three Ways To Show Your Games Back In Epic Launcher & Epic 游戏库不见了？消失了？这样找回来

时值51假期，我的一个白嫖了很多Epic商城游戏的朋友。
他跟我说，昨天他打开Epic准备玩《文明6》的时候，突然发现游戏库里面的游戏都不见了，望着往日辛辛苦苦摆白嫖而来的整整100多个游戏,如今变得空空荡荡，他陷入了沉思，去各大网站搜索均无结果，扬言要卸载Epic以泄愤怒。

当我得知此消息后，第一时间通过邮件的方式帮助他联系了Epic官方客服，没想很快就收到对方的回信，确定了本机原因后，对方给出了如下3个解决方案。
最终我的朋友通过第一个解决方案找回了他的所有游戏，于是乎，我的朋友像往常一样，进入了他的游戏世界，快乐得像个孙子。

### Disable fullscreen optimization
- Shut down Epic Games launcher completely.
- Go into the directory where it is installed, right-click on the launcher exe file, and click properties (Epic Games\Launcher\Engine\Binaries\Win64\EpicGamesLauncher.exe).
- Go into the Compatibility tab.
- Make sure you check the "Disable fullscreen optimizations".
- While you are there, you can also check "Run this program as an administrator".
Click Apply and Ok
 
### Clear your launcher’s webcache
- Exit the Epic Games Launcher by right-clicking the system tray icon in the bottom-right corner, and then clicking Exit.
- Press Windows key + R, type “%localappdata%”, and then press Enter to open a File Explorer window.
- Open the Epic Games Launcher folder.
- Open the Saved folder.
- Click the webcache folder, and then delete it.
- If there is a folder called webcache_4147 that can be deleted as well
- Restart your computer, and then relaunch the Epic Games Launcher.
 
### Reinstall the Epic Games Launcher
>Note: The following process will remove all of your installed games.

- Close the Epic Games launcher by right-clicking the system tray icon in the bottom right corner and then clicking Exit.
- Click Start.
- Type "cmd", right-click Command Prompt, and then click Run as administrator.
In the window that opens, type "sfc /scannow", and then press Enter. 
This may take a little while.
- Restart your computer.
- Click Start.
- Type "Add or Remove Programs", and then press Enter.
- Select Epic Games Launcher from the list of programs.
- Click Uninstall.
- Go to www.epicgames.com and click Get Epic Games in the top right corner to download the latest installer.