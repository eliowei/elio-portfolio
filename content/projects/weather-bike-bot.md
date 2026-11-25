---

# ============================================================================
# Basic Information
# 基本資訊
# ============================================================================

title: 天氣 Bike 小幫手
updatedAt: 2026-07-31
slug: weather-bike-bot
type: project
category: LINE Bot Project

year: 2024
order: 04

description: "從 LINE 聊天室查附近的 YouBike 站點、可借車數和天氣預報，規劃通勤或出門時少切換一個 App。"

highlights:
  - LINE Bot
  - YouBike 查詢
  - 天氣預報
  - Flex Message
  - 第三方 API 整合

cover: /images/projects/weather-bike-bot/cover.png

tags:
  - LINE Bot
  - 即時資料
  - 資訊卡片

github: https://github.com/eliowei/linebot

# ============================================================================
# Card Information
# 卡片資訊（首頁列表）
# ============================================================================

card:
  title: 天氣 Bike 小幫手
  description: "在 LINE 裡查 YouBike 站點與天氣預報。"

# ============================================================================
# Overview
# 專案概述
# ============================================================================

overview:
  title: "在 LINE 裡一起查車和天氣"
  content: "出門前常要查可借車數、空車位和稍後的天氣。我把即時站點和預報整合到同一個 LINE 選單，讓使用者從熟悉的聊天視窗就能取得這些資訊。"

caseStudy:
  label: "LINE 查詢服務"
  scope:
    - "LINE 訊息與選單設計"
    - "YouBike 即時資料"
    - "中央氣象署預報"
    - "LINE 資訊卡片"
  process:
    - title: "拆成站點與天氣兩條查詢流程"
      illustration: bike-route
      description: "用功能選單區分任務，站點流程也支援分享位置來查附近資訊。"
    - title: "把不同來源的資料整理成容易讀的卡片"
      illustration: bike-messages
      description: "站點與天氣資料統一整理成資訊卡，可借數量、空位和分時預報一眼就能看懂。"
  result: "使用者不必切換 App，在 LINE 裡就能查附近站點、可借車數和接下來的天氣。"

# ============================================================================
# Feature Showcase
# 功能展示
# ============================================================================

showcase:

- title: YouBike 站點查詢
  icon: map
  description: "查看附近站點、目前可借的車和可還的空位，也可以用分享位置查詢。"

  features:
    - 站點查詢
    - 車輛數量顯示
    - 空位資訊顯示
    - 多城市支援

- title: 天氣預報查詢
  icon: i-lucide-cloud-sun
  description: "在聊天視窗看即時天氣和分時預報，決定何時出門比較合適。"

  features:
    - 即時天氣
    - 3 小時預報
    - 3 天預報
    - 1 週預報

- title: LINE 互動體驗
  icon: i-lucide-message-square-text
  description: "用功能選單和資訊卡片把查詢結果排成可讀的 LINE 訊息。"

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
  device: phone

- title: YouBike 查詢
  image: /images/projects/weather-bike-bot/02.png
  device: phone

- title: YouBike 位置分享查詢
  image: /images/projects/weather-bike-bot/03.png
  device: phone

- title: 天氣預報
  image: /images/projects/weather-bike-bot/04.png
  device: phone

- title: 天氣預報查詢
  image: /images/projects/weather-bike-bot/07.png
  device: phone

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
