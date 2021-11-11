
## 开始

```zsh
# 安装依赖
yarn
# 本地浏览器运行
yarn dev:h5
# 本地小程序运行
yarn dev:mp
```

## 开发

### 编译

为了提高开发体验、调整了默认 taro 模版的部分编译命令，也为不同服务器环境（包括 dev/sit/uat/pro）、不同编译模式（开发/打包）、不同运行环境（h5/小程序）提供了统一的命令。

新增的服务器环境参数，主要是考虑到在处理线上问题时，为了复现问题，经常需要在本地请求非开发环境的接口，这时候习惯的操作是去更改配置文件，而更改配置文件的风险是很高的，不仅操作繁琐，更容易在多人开发时造成冲突，甚至可能将测试的变量提交到生产环境，造成不必要的线上问题。

编译命令格式如下：

```shell
yarn <mode>:<platform>-<env>
```

`mode` ，编译模式：

- dev 本地开发
- build 服务器部署

`platform` ，运行环境

- mp 微信小程序
- h5 h5

`env` ，服务器环境标识，不同标识对应着不同的配置项，如接口 host

- sit 测试环境
- uat 预发环境
- pro 生产环境
- 空 开发环境

示例：

```shell
yarn dev:mp  # 本地开发 小程序 开发环境
yarn dev:mp-sit  # 本地开发 小程序 测试环境
yarn build:mp   # 部署 小程序 开发环境
yarn build-mo-pro  # 部署 小程序 生产环境
```

完整的编译命令列表详见 [package.json](./package.json) 中的 `scripts` 配置项。

### 启动本地调试

启动本地调试模式需要新建 config/local.js，参考如下内容：

```js
/**
 * 本地调试配置
 * 默认使用开发环境
 * 运行 yarn dev:h5命令
 */

module.exports = {
	defineConstants: {
		APP_CONF: {
			API_HOST: JSON.stringify('https://xx.com/'),
			APPID: JSON.stringify('this_is_my_tourist_appid'),
			API_MAP_QQ: JSON.stringify('https://apis.map.qq.com'),
			KEY_MAP_QQ: JSON.stringify('UQPBZ-RCU36-K2YS3-EMV6Y-JI6JJ-3WBUM'),
		},
	},
}


```
