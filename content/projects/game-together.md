---

title: 遊戲社群揪團平台
slug: game-together
order: 01
year: 2025
category: Full Stack Project

card:
  title: 遊戲社群揪團平台
  description: 為玩家打造的揪團平台。整合即時聊天。

description: >
  一個專為玩家打造的即時社群揪團平台，
  結合搜尋篩選、活動管理與即時聊天室，
  幫助玩家快速找到隊友並建立長期遊戲社群。

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

overview:
  title: 為玩家打造更有效率的揪團體驗。
  content: >
    Game Together 是一個整合搜尋、揪團管理、
    留言互動與即時聊天室的社群平台。

    玩家可以透過遊戲類型、地區、日期等條件快速找到隊友，
    並透過即時聊天與留言系統完成活動協調，
    提升揪團效率與社群互動品質。

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
  - MVC Architecture


  database:
  - MongoDB Schema Design
  - 搜尋條件設計
  - 聊天紀錄儲存

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

  Deploy:
    - GitHub Actions
    - Render

showcase:

- title: Search System 
  description: >
    提供多條件搜尋與排序功能，
    協助玩家快速找到符合需求的揪團活動。

  features: 
    - 關鍵字搜尋
    - 地區搜尋
    - 標籤搜尋
    - 日期搜尋
    - 排序功能

- title: Group Management
  description: >
    建立完整的揪團建立、參與與管理流程，
    讓主辦者與參加者能有效協作。

  features:
    - 建立揪團
    - 編輯揪團
    - 收藏功能
    - 留言板
    - 參加申請管理

- title: Realtime Chat
  description: >
    透過 WebSocket 即時通訊，
    提升活動前後的互動與協調效率。

  features:
    - Socket.IO
    - 即時訊息同步
    - 聊天紀錄保存
    - 獨立聊天室

challenges:
- title: WebSocket 連線管理
  subtitle: 即時聊天室

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
    並於 API Middleware 中驗證 Token 與使用者身份，
    確保受保護資源僅能由授權使用者存取。

  technologies:
  - JWT
  - Passport

- title: 多條件搜尋設計
  subtitle: Search Experience

  problem: >
    玩家通常會依照遊戲類型、地區、日期等條件尋找活動，
    單一搜尋方式無法滿足不同需求。

  solution: >
    設計多條件搜尋與排序機制，
    支援關鍵字、標籤、地區與日期篩選，
    提升活動媒合效率。

  technologies:
    - MongoDB
    - Express

gallery:
- title: 揪團首頁
  image: /images/projects/game-together/03.png

- title: 搜尋功能
  image: /images/projects/game-together/01.png

- title: 揪團頁面
  image: /images/projects/game-together/02.png

layout:
  col: 8
  aspect: video

  order:
    content: 2
    img: 1

---

# 專案介紹

Game Together 是一個提供玩家快速揪團的平台。

使用者可以依照遊戲、地區、日期等條件搜尋揪團資訊，並透過留言與聊天室功能進行即時互動。

# 核心功能

## 會員系統

- 註冊與登入
- JWT 驗證
- 個人資料編輯

## 揪團系統

- 建立揪團
- 編輯揪團
- 收藏揪團
- 搜尋揪團

## 即時聊天室

- WebSocket 雙向通訊
- 儲存聊天紀錄
- 每個揪團獨立聊天室

# 開發心得

本專案最大的挑戰在於聊天室與權限管理。

除了前端介面設計之外，也需要考量資料庫結構、API 設計與即時通訊的生命週期管理。

# 未來規劃

- TypeScript 重構
- Nuxt 版本重構
- Docker 部署
- CI/CD 流程導入
- Redis 快取機制
