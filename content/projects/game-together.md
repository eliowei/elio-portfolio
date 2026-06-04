---

title: Game Together
slug: game-together
order: 01

description: 為玩家打造的揪團平台，整合搜尋、留言與即時聊天室功能。

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
  title: 在當前的數位遊戲環境中，即時性是社群互動的靈魂。
  content: >
    Game Together 旨在消除玩家之間的溝通障礙，
    透過搜尋、聊天室與揪團機制，
    幫助玩家快速找到隊友。

responsibilities:
  frontend:
  - SPA 架構設計
  - 即時聊天室 UI
  - 響應式設計

  backend:
  - RESTful API
  - WebSocket
  - JWT 驗證

  database:
  - MongoDB Schema 設計
  - 搜尋條件設計

techStack:
  frontend:
  - Vue 3
  - Vuetify
  - Axios

  backend:
  - Node.js
  - Express

  database:
  - MongoDB
  - Mongoose

roles:

- title: 參加者
  description: 搜尋揪團、收藏、留言與聊天室功能

- title: 主辦者
  description: 建立揪團、管理申請者與聊天室

- title: 管理者
  description: 會員管理與揪團管理

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
    保護會員功能與 API，
    避免未授權存取。

  solution: >
    使用 Passport JWT 驗證，
    並於 API Middleware 中檢查 Token。

  technologies:
  - JWT
  - Passport

gallery:
- /images/projects/game-together/01.webp
- /images/projects/game-together/02.webp
- /images/projects/game-together/03.webp

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
