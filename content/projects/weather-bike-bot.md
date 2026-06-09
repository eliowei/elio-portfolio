---

title: 天氣 Bike 小幫手
slug: weather-bike-bot
order: 03
year: 2024
category: LINE Bot Project

card:
  title: 天氣 Bike 小幫手
  description: 整合 YouBike 與天氣查詢的 LINE Bot。

description: >
  透過 LINE 聊天介面提供 YouBike 與天氣查詢，
  讓使用者快速取得即時資訊。

highlights:
  - LINE Bot
  - YouBike 查詢
  - 天氣預報
  - Flex Message
  - API 串接

cover: /images/projects/weather-bike-bot/cover.png

tags:

- Node.js
- Line Bot

github: https://github.com/eliowei/linebot

overview:
  title: 在聊天視窗中快速取得生活資訊。

  content: >
    Weather Bike Bot 是一個建構於 LINE 平台上的聊天機器人，
    整合 YouBike 即時資訊與中央氣象署天氣資料。

    使用者可透過關鍵字、功能選單與位置分享，
    快速查詢附近 YouBike 站點與天氣預報，
    降低資訊查找成本並提升使用便利性。

responsibilities:
  backend:
    - LINE Messaging API
    - REST API Integration
    - Message Flow Design
    - Flex Message 設計
    - 第三方資料整合

  architecture:
    - 關鍵字路由設計
    - 功能選單規劃
    - 使用者互動流程設計

techStack:
  backend:
    - Node.js
    - Express
    - LINE Bot SDK

  api:
    - YouBike API
    - Central Weather Administration API

  messaging:
    - Flex Message
    - Rich Menu

showcase:
  - title: YouBike Lookup
    description: 查詢附近站點資訊。
    features:
      - 站點查詢
      - 車輛數量
      - 多城市支援

  - title: Weather Forecast
    description: 提供天氣預報。
    features:
      - 即時天氣
      - 3小時預報
      - 3天預報
      - 1週預報

  - title: Chat Experience
    description: 聊天式操作體驗。
    features:
      - 關鍵字觸發
      - 功能選單
      - Flex Message

challenges:
  - title: 多來源 API 整合
    subtitle: Data Integration

    problem: >
      需整合不同來源的資料格式。

    solution: >
      統一資料處理流程，
      將資料轉換成 Bot 可用格式。

    technologies:
      - Node.js
      - Express

  - title: 聊天流程設計
    subtitle: User Experience

    problem: >
      使用者無法像網站一樣直接點擊導覽列，
      若功能過多容易造成操作複雜。

    solution: >
      設計功能選單與關鍵字觸發機制，
      搭配 Flex Message 提供清晰的操作流程，
      降低使用門檻。

    technologies:
      - LINE Bot SDK
      - Flex Message


gallery:
- title: 功能選單
  image: /images/projects/weather-bike-bot/01.png

- title: YouBike 查詢
  image: /images/projects/weather-bike-bot/02.png

- title: YouBike 位置分享查詢
  image: /images/projects/weather-bike-bot/03.png

- title: line - 天氣預報
  image: /images/projects/weather-bike-bot/04.png

- title: line - 天氣預報查詢
  image: /images/projects/weather-bike-bot/07.png

layout:
  col: 8
  aspect: video

  order:
    content: 1
    img: 2

futurePlans:
  - 使用者位置查詢
  - 快取機制

---
