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
  title: 在 LINE 中快速查詢天氣與 YouBike 資訊

  content: >
    使用者查詢 YouBike 與天氣資訊時，
    通常需要在不同 App 與網站之間切換，
    增加查詢成本與操作步驟。

    本專案透過 LINE Bot 整合 YouBike 即時站點資訊與中央氣象署天氣資料，
    讓使用者能在熟悉的聊天介面中快速取得資訊，
    減少切換成本並提升查詢效率。

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
    description: 透過位置資訊快速取得附近 YouBike 站點，包含可借車輛與剩餘停車格。
    features:
      - 站點查詢
      - 車輛數量
      - 多城市支援

  - title: Weather Forecast
    description: 查詢即時天氣與未來天氣預報，協助使用者規劃通勤與外出行程。
    features:
      - 即時天氣
      - 3小時預報
      - 3天預報
      - 1週預報

  - title: Chat Experience
    description: 利用 LINE Flex Message 提供視覺化資訊呈現，降低閱讀負擔並提升操作體驗。
    features:
      - 關鍵字觸發
      - 功能選單
      - Flex Message

challenges:
  - title: 整合多個第三方 API
    subtitle: Data Integration

    problem: >
      YouBike 與中央氣象署 API 提供的資料格式與欄位定義不同，若直接使用將增加後續維護成本，同時也需要考量 API 請求失敗或資料異常的情況。

    solution: >
      統一資料結構，
      設計資料轉換層與錯誤處理機制，
      讓 Bot 能以一致的格式回傳資訊，
      提升系統穩定性與維護性。

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
  col: 5
  aspect: video

  order:
    content: 1
    img: 2

futurePlans:
  - 使用者位置查詢
  - 快取機制

---
