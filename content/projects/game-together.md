---
# ============================================================================
# Basic Information
# 基本資訊
# ============================================================================

title: 遊戲社群揪團平台
updatedAt: 2026-07-31
slug: game-together
type: project
category: Full Stack Project

year: 2025
order: 03

description: "把找隊友、申請加入和即時聊天放進同一個揪團流程，讓玩家看完活動就能決定是否參加。"

highlights:
  - 多條件搜尋與排序
  - 即時 WebSocket 聊天室
  - JWT 身份驗證
  - 收藏與留言互動
  - 揪團建立與管理

cover: /images/projects/game-together/cover.png

tags:
  - Vue 3
  - Vuetify
  - Node.js
  - MongoDB
  - WebSocket

github: https://github.com/eliowei/game-together
demo: https://eliowei.github.io/game-together

# ============================================================================
# Card Information
# 卡片資訊（首頁列表）
# ============================================================================

card:
  title: 遊戲社群揪團平台
  description: "從找活動到加入聊天室的玩家揪團平台。"

# ============================================================================
# Overview
# 專案概述
# ============================================================================

overview:
  title: "把分散在貼文和聊天室的揪團資訊整理起來"
  content: "玩家常需要在貼文、聊天室和社群群組間來回確認日期、缺額和參加方式。我把搜尋、活動詳情、申請與聊天室放進同一個流程，也讓主辦人有地方管理參加狀態。"

caseStudy:
  label: "個人全端專案 · 活動管理與即時聊天"
  scope:
    - "揪團搜尋與篩選"
    - "活動及申請管理"
    - "即時聊天室"
    - "前後端與資料庫整合"
  process:
    - title: "規劃玩家與主辦人的操作"
      illustration: game-planning
      description: "拆出搜尋、活動詳情、申請和管理頁面，讓兩種角色找到各自需要的操作。"
    - title: "接上活動與即時通訊"
      illustration: game-chat
      description: "整合會員驗證、活動資料和 Socket.IO，並在離開聊天室時清理連線。"
  result: "圖集展示從找團、看詳情到聊天的操作，也收錄主辦人管理與個人資料畫面。"

# ============================================================================
# Feature Showcase
# 功能展示
# ============================================================================

showcase:

- title: 揪團搜尋系統
  icon: i-lucide-search
  description: "玩家可以依遊戲、地區、標籤或日期篩選揪團，再依排序找出合適的場次。"

  features:

  - 關鍵字搜尋
  - 地區搜尋
  - 標籤搜尋
  - 日期搜尋
  - 排序功能

- title: 揪團管理功能
  icon: i-lucide-calendar-check
  description: "主辦人可以建立和編輯活動、管理申請。玩家可以收藏活動，或在留言區先確認細節。"

  features:
  - 建立揪團
  - 編輯揪團
  - 收藏功能
  - 留言板
  - 參加申請管理

- title: 即時聊天室
  icon: i-lucide-messages-square
  description: "每個活動有自己的即時聊天室，方便隊友在活動前後交換資訊。"

  features:

  - Socket.IO
  - 即時訊息同步
  - 聊天紀錄保存
  - 獨立聊天室

# ============================================================================
# Responsibilities
# 負責內容
# ============================================================================

responsibilities:

  frontend:
    - Vue 3 Options API
    - Vue Router
    - Pinia 狀態管理
    - Vuetify UI
    - Responsive Design

  backend:
    - RESTful API
    - Socket.IO
    - JWT Authentication

  architecture:
    - MVC Architecture
    - 搜尋條件設計

  database:
    - MongoDB Schema Design
    - 聊天紀錄儲存

# ============================================================================
# Tech Stack
# 技術架構
# ============================================================================

techStack:
  frontend:
  - Vue 3
  - Vuetify
  - Pinia
  - Axios

  backend:
  - Node.js
  - Express
  - Socket.IO
  - JWT

  database:
  - MongoDB
  - Mongoose

  tools:
  - GitHub Actions
  - Render

# ============================================================================
# Engineering Challenges
# 技術挑戰
# ============================================================================

challenges:

- title: WebSocket 連線管理
  subtitle: Realtime Communication

  problem: >
    若使用者頻繁切換頁面，
    容易建立重複 WebSocket 連線。

  solution: >
    僅在揪團詳情頁建立連線，
    離開頁面立即斷開連線，
    避免重複建立 Socket 實例。

  technologies:
    - WebSocket
    - MongoDB

- title: JWT 權限驗證
  subtitle: Authentication

  problem: >
    會員功能與管理功能需要權限控管，
    避免未登入或非授權使用者存取敏感資源。

  solution: >
    使用 Passport JWT 驗證，
    並於 Middleware 中驗證 Token 與使用者身份，
    確保受保護資源僅能由授權使用者存取。

  technologies:
  - JWT
  - Passport

- title: 多條件搜尋設計
  subtitle: Search Experience

  problem: >
    玩家通常會依照遊戲類型、地區、日期等條件尋找活動。

  solution: >
    設計多條件搜尋與排序機制，
    支援關鍵字、標籤、地區與日期篩選，
    提升活動媒合效率。

  technologies:
    - MongoDB
    - Express

- title: 資料關聯設計
  subtitle: Data Modeling

  problem: >
    活動、使用者、聊天室與留言之間存在多層資料關聯，
    若結構設計不佳容易造成查詢複雜度提升。

  solution: >
    透過 Mongoose Schema 建立資料關聯結構，
    並依照使用情境進行資料拆分與引用設計，
    兼顧查詢效率與維護性。

  technologies:
    - MongoDB
    - Mongoose

# ============================================================================
# Gallery
# 圖片展示
# ============================================================================

gallery:
- title: 揪團首頁
  image: /images/projects/game-together/03.png

- title: 搜尋功能
  image: /images/projects/game-together/01.png

- title: 揪團詳情
  image: /images/projects/game-together/02.png

- title: 聊天室
  image: /images/projects/game-together/04.png

- title: 主辦揪團管理
  image: /images/projects/game-together/05.png

- title: 個人資料管理
  image: /images/projects/game-together/06.png

# ============================================================================
# Layout
# 畫廊版型設定
# ============================================================================

layout:
  col: 7
  aspect: video

  order:
    content: 1
    img: 2

---
