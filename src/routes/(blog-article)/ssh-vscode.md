## Remote Development using SSH on VS Code

>I have to say amazing after remote ssh on vs code. Debugging and preview remote on vs code is what I  want  for a long time. What a pity, it's too late to meet 🤣.

*The Visual Studio Code Remote - SSH extension allows you to open a remote folder on any remote machine, virtual machine, or container with a running SSH server and take full advantage of VS Code's feature set. Once connected to a server, you can interact with files and folders anywhere on the remote filesystem.*

### Step1: Generate an SSH Key
execute: <code>ssh-keygen</code>

output:

<code>Generating public/private rsa key pair.</code>

<code>Enter file in which to save the key (/Users/user-name/.ssh/id_rsa): </code>input the absolute path here.

<code>Enter passphrase (empty for no passphrase):</code>

Then, you got two file in your <code>.ssh</code> directory. Something like <code>tutorial</code> and <code>tutorial.pub</code>.

### Step2:  Copy the key to a server

>Once an SSH key has been created, the ssh-copy-id command can be used to install it as an authorized key on the server. Once the key has been authorized for SSH, it grants access to the server without a password.

<code>ssh-copy-id -i ~/.ssh/mykey user@host</code>

>Only the public key is copied to the server. The private key should never be copied to another machine.


### Step3: Install VS Code extension
Download [Remote-SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)



### Step4:Create a config file

```
Host aws-ec2 
    HostName 188.188.1.8
    User ubuntu
    IdentityFile /Users/user-name/.ssh/file-name
```

    - Host (aws-ec2) is just a name that will appear in VS Code. It can be any name.
    - HostName is the server’s host or IP.
    - User is the Ubuntu username.
    - IdentityFile is the path to the private key.

### Step5:Configure in VS Code
- Show all command to find remote-ssh 
![Screen Shot 2022-03-23 at 15.55.57.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648022794029/EspPFbrLX.png)
- Excute the Connect to Host

![Screen Shot 2022-03-23 at 15.58.21.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648022891947/BJyLSm7Dc.png)
- Configure SSH Hosts
![Screen Shot 2022-03-23 at 16.00.48.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648023023626/_TlWDnHiM.png)

- Setting configure path
![Screen Shot 2022-03-23 at 16.00.29.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648022973080/7I55W6URy.png)


![Screen Shot 2022-03-23 at 16.01.03.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648023404479/sgPmyCYvT.png)

- Excute the Connect to Host
Select one you have configired.

![Screen Shot 2022-03-23 at 16.03.19.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648023568401/5bbDnDVqP.png)

Then, connected.
![Screen Shot 2022-03-23 at 16.04.06.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1648023433958/rFVHxZNBP.png)

Enjoy remote developing, debug and preview locally with the power of VS Code.

Thanks for your reading.

Have a good day.
