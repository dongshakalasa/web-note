# Git

## 1、Git的三个工作区

- 工作区
- 暂存区
- Git仓库

## 2、获取帮助

- git help config
- git config -h

## 3、本地仓库

### ①、初始化仓库

- 在项目目录中，通过鼠标右键打开 “Git Bash”
- 执行git init命令将当前的目录转化为Git仓库

### ②、查看文件状态

```
1、查看文件状态（详细）
git status

2、查看文件状态（精简）
git status -s
```

### ③、跟踪文件

```
1、跟踪指定文件
git add 文件名

2、跟踪所有文件
git add 。
```

### ④、提交更新

```
1、提交暂存区中的问阿金
git commit -m “描述信息”

2、跳过暂存区
git commit -a -m "描述信息"
```

### ④、撤销对文件的修改

```
git check out --文件名
```

### ⑤、取消暂存文件

```
1、移除指定文件
git reset HEAD 要移除的文件名

2、移除所有文件
git reset HEAD 。
```

### ⑥、从Git仓库移除文件

```
1、从Git仓库和工作区中同时移除 文件
git rm -f 需要移除的文件

2、只从Git仓库中移除文件，但保留工作区中的文件
git rm --cached 需要移除的文件
```

### ⑦、忽略文件

**创建 .gitignore文件进行设置**

- **星号***匹配零个或多个任意字符
- **【abc】**匹配任何一个列在方括号中的字符（此案例匹配一个a或匹配一个b或匹配一个c）
- **问号？**只匹配一个任意字符
- 在方括号中使用**短划线**分隔两个字符，表示所有在这两个字符范围内的都可以匹配（比如【0-9】表示匹配所有0到9的数字）
- **两个星号**表示匹配任意中间目录（比如a/**/z可以匹配a/z、a/b/z或a/b/c/z等）

.**gitignore文件例子**：

![image-20220606105813178](截图\image-20220606105813178.png)

### ⑧、查看提交历史

```
# 按时间先后顺序列出所有的提交历史，最近的提交排在最上面
git log

# 只展示最新的两条提交历史，数字可以按需求进行填写
git log -2

# 在一行上展示最近两条提交历史的信息
git log -2 --pretty=oneline

# 在一行上展示最近两条提交历史的信息，并自定义输出的格式
# %h提交的简写哈希值 %an作者名字 %ar作者修订时间，按多久以前的方式显示 %s提交说明
git log -2 --pretty=format:"%h | %an | %ar | %s"
```

### ⑨、回退版本

```
一、从最新版回退
    1、在一行上显示所有历史版本
    git log --pretty=oneline

    2、使用 git reset --hard 命令，根据指定的提交 ID 回退到指定版本
    git reset --hard <CommitID

二、从旧版跳转版本
	1、在旧版中使用 git reflog --pretty=oneline命令，查看所以历史提交版本
	git reflog --pretty=oneline
	
	2、再次根据最新的提交 ID，跳转到指定版本
    git reset --hard <CommitID>
```



## 4、遇到的问题

### 1、remote origin already exists.

- 描述：报错远程起源已经存在。
- 解决方法：
  - 先输入：git remote rm origin
  - 再输入：git remote add origin**************
  - 最后输入：git push origin master 

### 2、src refspec main does not match any

- 描述：giihub默认创建的分支时main，本地是master
- 解决方法：
  - git branch -m master main（切换分支）
  - git remote add origin**************
  - git push origin main
