# Fetch 测试项目

## 概述

该项目是一个简单的网页应用程序，旨在测试 Fetch API 在与不同端点交互时的行为。它提供了一个基本的界面，包含一个按钮，点击后会向指定的 API 端点发起两个 fetch 请求，并以格式化的 JSON 结构显示结果。

结果如下：

```
/api/error-no-body -- {
  "ok": false,
  "status": 500,
  "text": ""
}
/api/error-with-body -- {
  "ok": false,
  "status": 500,
  "text": "Internal Server Error with body"
}
```

## 功能

- **Fetch API 测试**：应用程序向端点 `/api/error-no-body` 和 `/api/error-with-body` 发起两个 fetch 请求。
- **JSON 响应显示**：fetch 请求的响应以 JSON 格式显示，便于阅读和理解响应结构。
- **错误处理**：应用程序包含基本的错误处理，以显示 fetch 请求过程中遇到的任何错误。

## 使用方法

1. `npm start` 启动项目
1. 访问：http://localhost:3000
2. 点击“Test Fetch”按钮。
3. 查看页面上显示的 fetch 请求结果。

## 目的

该项目的主要目的是演示如何使用 Fetch API 发起 HTTP 请求并在网页应用程序中处理响应。它还作为一个简单的示例，展示如何以用户友好的方式格式化和显示 JSON 数据。

## 要求

- 支持 Fetch API 的网页浏览器。

## 许可证

该项目是开源的，并在 MIT 许可证下提供。 