---

# ============================================================================
# Basic Information
# 基本資訊
# ============================================================================

title: 天氣 Bike 小幫手
slug: weather-bike-bot
type: project
category: LINE Bot Project

year: 2024
order: 04

description: >
  透過 LINE 聊天介面整合 YouBike 與天氣查詢功能，
  讓使用者能快速取得即時站點資訊與天氣預報，
  減少在不同 App 與網站之間切換的成本。

highlights:
  - LINE Bot
  - YouBike 查詢
  - 天氣預報
  - Flex Message
  - 第三方 API 整合

cover: /images/projects/weather-bike-bot/cover.png

tags:
  - Node.js
  - Express
  - LINE Bot
  - Flex Message
  - API Integration

github: https://github.com/eliowei/linebot

# ============================================================================
# Card Information
# 卡片資訊（首頁列表）
# ============================================================================

card:
  title: 天氣 Bike 小幫手
  description: 整合 YouBike 與天氣查詢的 LINE Bot。

# ============================================================================
# Overview
# 專案概述
# ============================================================================

overview:
  title: 在 LINE 中快速查詢天氣與 YouBike 資訊

content: >
  使用者查詢 YouBike 與天氣資訊時，
  通常需要在不同 App 與網站之間切換，
  增加查詢成本與操作步驟。

  本專案透過 LINE Bot 整合 YouBike 即時站點資訊與中央氣象署天氣資料，
  讓使用者能在熟悉的聊天介面中快速取得資訊，
  減少切換成本並提升查詢效率。


# ============================================================================
# Feature Showcase
# 功能展示
# ============================================================================

showcase:

- title: YouBike 站點查詢

  description: >
    快速取得附近 YouBike 站點資訊，
    包含可借車輛數量與剩餘停車格資訊。

  features:
    - 站點查詢
    - 車輛數量顯示
    - 空位資訊顯示
    - 多城市支援

- title: 天氣預報查詢

  description: >
    查詢即時天氣與未來天氣預報，
    協助使用者規劃通勤與外出行程。

  features:
    - 即時天氣
    - 3 小時預報
    - 3 天預報
    - 1 週預報

- title: LINE 互動體驗

  description: >
    利用 Flex Message 與功能選單，
    提供更直覺的聊天式操作體驗。

  features:
    - 關鍵字觸發
    - 功能選單
    - Flex Message
    - 圖文訊息互動

# ============================================================================
# Responsibilities
# 負責內容
# ============================================================================

responsibilities:
  backend:
    - LINE Messaging API
    - REST API Integration
    - Message Flow Design
    - Third Party API Integration

  messaging:
    - Flex Message Design
    - Rich Menu Design
    - User Interaction Design

  architecture:
    - 關鍵字路由設計
    - 功能選單規劃
    - 使用者互動流程設計

# ============================================================================
# Tech Stack
# 技術架構
# ============================================================================

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

# ============================================================================
# Engineering Challenges
# 技術挑戰
# ============================================================================

challenges:

- title: 整合多個第三方 API
  subtitle: Data Integration

  problem: >
    YouBike 與中央氣象署 API 提供的資料格式與欄位定義不同，
    若直接使用將增加後續維護成本，
    同時也需要考量 API 請求失敗或資料異常情況。

  solution: >
    建立資料轉換層，
    統一資料結構與回傳格式，
    並加入錯誤處理機制，
    提升系統穩定性與維護性。

  technologies:
    - Node.js
    - Express

- title: 聊天流程設計
  subtitle: User Experience

  problem: >
    使用者無法像網站一樣透過導覽列操作，
    若功能過多容易增加學習成本。

  solution: >
    設計功能選單與關鍵字觸發流程，
    搭配 Flex Message 呈現資訊，
    提供更清晰的操作體驗。

  technologies:
    - LINE Bot SDK
    - Flex Message

- title: 多城市資料整合
  subtitle: Data Normalization

  problem: >
    不同城市的 YouBike API 結構與資料格式存在差異，
    增加資料處理與維護難度。

  solution: >
    建立統一資料格式與轉換邏輯，
    將不同來源資料整理成一致結構，
    讓後續功能擴充更加容易。

  technologies:
    - Node.js
    - API Integration

# ============================================================================
# Gallery
# 圖片展示
# ============================================================================

gallery:

- title: 功能選單
  image: /images/projects/weather-bike-bot/01.png

- title: YouBike 查詢
  image: /images/projects/weather-bike-bot/02.png

- title: YouBike 位置分享查詢
  image: /images/projects/weather-bike-bot/03.png

- title: 天氣預報
  image: /images/projects/weather-bike-bot/04.png

- title: 天氣預報查詢
  image: /images/projects/weather-bike-bot/07.png

# ============================================================================
# System Design
# 系統設計
# ============================================================================

systemDesign:

- title: 訊息路由設計
  subtitle: Message Routing

  description: >
    根據使用者輸入的關鍵字與選單操作，
    將請求導向對應功能模組，
    降低功能之間的耦合度並提升維護性。

  technologies:
    - LINE Bot SDK
    - Express

# ============================================================================
# Layout
# 畫廊版型設定
# ============================================================================

layout:
  col: 5
  aspect: video

  order:
    content: 1
    img: 2

---
