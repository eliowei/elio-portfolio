---
# ============================================================================
# Basic Information
# 基本資訊
# ============================================================================

title: 遊戲社群揪團平台
updatedAt: 2026-11-27
slug: game-together
type: project
category: Full Stack Project

year: 2025
order: 06

description: "把找隊友、加入揪團和即時聊天放進同一個流程，讓玩家看完活動就能決定是否參加。"

highlights:
  - 多條件搜尋與排序
  - 即時 WebSocket 聊天室
  - JWT 身份驗證
  - 收藏與留言互動
  - 揪團建立與管理

cover: /images/projects/game-together/cover.jpg

tags:
  - 活動搜尋
  - 成員管理
  - 即時聊天

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
  content: "玩家常需要在貼文、聊天室和社群群組間來回確認日期、缺額和參加方式。我把搜尋、活動詳情、加入揪團與聊天室放進同一個流程，也讓主辦人和管理者各有自己的管理畫面。"

caseStudy:
  label: "社群活動平台"
  scope:
    - "揪團搜尋與篩選"
    - "活動建立與成員管理"
    - "即時聊天室"
    - "會員中心與管理後台"
    - "前後端與資料庫整合"
  process: []
  result: "玩家可以從搜尋、看活動、加入揪團一路到聊天；主辦人與管理者也有各自的管理畫面。展示網站的後端部署在免費主機，第一次開啟可能需要等待約 30 秒；案例畫面中的活動、成員與對話皆為示意資料。"

# ============================================================================
# Feature Showcase
# 功能展示
# ============================================================================

showcase: []

sections:
  - label: "Concept"
    title: "設計理念"
    lead: "讓找隊友這件事，在同一個地方完成。"
    paragraphs:
      - "揪團資訊常分散在社群貼文、聊天室和群組之間，日期、缺額和參加方式需要來回確認。"
      - "平台把活動整理成一致的欄位，玩家先用條件找到合適的場次，再看詳情決定是否加入。"
      - "加入之後的討論留在活動的聊天室，主辦人不必另外開群組整理名單。"
  - label: "Workflow"
    title: "使用流程"
    items:
      - name: "參加者"
        text: "依關鍵字、地區、標籤或日期搜尋與排序，查看詳情後加入、收藏或留言，再進聊天室交流。"
      - name: "主辦者"
        text: "依步驟填寫資訊、標籤與活動內容，預覽後送出；之後可以編輯揪團、回覆留言與管理成員。"
      - name: "管理者"
        text: "在管理後台維護揪團、會員與聯絡表單。"
  - label: "Visual"
    title: "視覺風格"
    items:
      - name: "深色首屏"
        text: "以深色遊戲情境照片襯托標題與搜尋框，進站第一個動作就是找揪團。"
      - name: "橘色行動提示"
        text: "搜尋按鈕、標籤與重點資訊使用橘色，讓可操作與需要注意的內容容易辨認。"
      - name: "淺色閱讀頁面"
        text: "列表、詳情與後台以白色和暖米色為底，資訊以卡片和表格分區。"
  - label: "Color"
    title: "網站配色"
    paragraphs:
      - "黑色用於首屏與聊天室標題列，白色與暖米色承載內容，橘色集中在行動與標籤。"
    colors:
      - name: "夜幕黑"
        value: "#000000"
      - name: "行動橘"
        value: "#FF9800"
      - name: "暖米底"
        value: "#FFF3E0"
      - name: "內容白"
        value: "#FFFFFF"
  - label: "Experience"
    title: "使用者體驗"
    paragraphs:
      - "首頁提供關鍵字、縣市、標籤與日期四種搜尋入口，並列出最新與即將到來的揪團。"
      - "列表直接顯示線上或線下、地點、時間與剩餘名額，不用點進詳情就能先篩選。"
      - "聊天室固定在活動頁右下角，只開放給已加入的成員，邊看活動資訊邊討論。"

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
  image: /images/projects/game-together/03.jpg

- title: 搜尋功能
  image: /images/projects/game-together/01.jpg

- title: 揪團詳情
  image: /images/projects/game-together/02.jpg

- title: 聊天室
  image: /images/projects/game-together/04.jpg

- title: 主辦揪團管理
  image: /images/projects/game-together/05.jpg

- title: 個人資料管理
  image: /images/projects/game-together/06.jpg

- title: 管理後台
  image: /images/projects/game-together/07.jpg

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
