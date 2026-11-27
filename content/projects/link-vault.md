---

# ============================================================================
# Basic Information
# 基本資訊
# ============================================================================

title: "拾鏈 LINK VAULT"

updatedAt: 2026-11-27
slug: link-vault
type: project
category: AI Knowledge Tool

year: 2026
order: 08

description: "把網址傳給 LINE Bot，由 AI 產生摘要、分類與標籤，存進自己的 Notion，之後可以在網站上搜尋與瀏覽。"

highlights:
  - LINE Bot 收藏
  - AI 摘要與分類
  - Notion 資料儲存
  - 收藏網站與權限管理

cover: /images/projects/link-vault/02.jpg

tags:
  - "AI Tool"
  - "LINE Bot"
  - "Notion"
  - "Knowledge Management"
  - "Full Stack"
  - "Self-hosted"

# ============================================================================
# Card Information
# 卡片資訊（首頁列表）
# ============================================================================

card:
  title: "拾鏈 AI 網址收藏助手"
  description: "在 LINE 貼上網址，AI 整理後存進 Notion。"

# ============================================================================
# Overview
# 專案概述
# ============================================================================

overview:
  title: "AI 網址收藏與知識整理工具"
  content: "在社群、GitHub 或各種網站看到值得收藏的工具與文章，常因為分散各處、沒有分類，過一陣子就找不回來。拾鏈把收藏的動作縮到在 LINE 貼上網址，整理交給 AI，資料則留在自己的 Notion。這是一套單一資料擁有者、自行部署的工具，不是多人訂閱服務。"

caseStudy:
  label: "個人專案 · AI 網址收藏助手"
  scope:
    - "產品規劃與使用流程"
    - "LINE Bot 與訊息卡片設計"
    - "AI 內容整理流程"
    - "收藏網站介面與開發"
    - "權限與安全防護"
    - "自動化測試與部署文件"
  process: []
  result: "完成從 LINE 收藏、AI 整理、寫入 Notion 到網站查詢的完整流程。使用者可以在聊天室直接查詢收藏，也能在網站搜尋、依分類瀏覽、補充筆記與重新整理失敗的項目。"

# ============================================================================
# Feature Showcase
# 功能展示
# ============================================================================

showcase: []

sections:
  - label: "Concept"
    title: "設計理念"
    lead: "讓收藏從存下一個網址，變成找得回來的知識。"
    paragraphs:
      - "收藏的當下越輕越好，因此入口放在原本就在使用的 LINE，貼上網址就完成。"
      - "整理的工作交給 AI，資料留在自己的 Notion，隨時可以編輯、匯出或改用其他工具讀取。"
      - "面對抓不到的內容選擇誠實呈現：保留網址並標示等待補充，而不是產生一份看似完整、實際空洞的摘要。"
  - label: "Workflow"
    title: "使用流程"
    items:
      - name: "貼上網址"
        text: "一則訊息可以傳多個網址，Bot 先回覆已加入收藏，整理在背景進行。"
      - name: "擷取內容"
        text: "GitHub 專案讀取專案資訊與 README，一般文章擷取網頁主文。"
      - name: "AI 整理"
        text: "產生繁體中文摘要、主要用途、分類與標籤，完成後推播訊息卡片。"
      - name: "找回收藏"
        text: "在聊天室輸入關鍵字或選擇分類，也可以到網站搜尋與瀏覽詳情。"
  - label: "Visual"
    title: "視覺風格"
    items:
      - name: "Dark Geometric Brutalism｜深色幾何粗獷"
        text: "以深色底、直角框線與大型標題建立清楚的資訊層級。"
      - name: "Pixel Accent｜像素點綴"
        text: "編號、狀態與按鈕使用像素字體，AI 整理的內文則維持易讀字體。"
      - name: "Diamond Identity｜菱形識別"
        text: "菱形只用在標誌、狀態與選中分類，讓識別元素有固定用途。"
      - name: "Consistent Touchpoints｜跨介面一致"
        text: "LINE 訊息卡片、圖文選單與網站沿用同一套深色與橘色語言。"
  - label: "Color"
    title: "品牌配色"
    paragraphs:
      - "以接近黑色的底色降低干擾，米白色承載內文，橘色只標示行動與目前狀態。"
    colors:
      - name: "墨黑"
        value: "#0B0B0A"
      - name: "深墨"
        value: "#141412"
      - name: "框線灰"
        value: "#3A3A35"
      - name: "骨白"
        value: "#EDE8DC"
      - name: "訊號橘"
        value: "#FF5A1F"
  - label: "Experience"
    title: "使用者體驗"
    paragraphs:
      - "收藏、查詢與使用指南都能在聊天室完成，圖文選單提供固定入口。"
      - "每個項目都有清楚的狀態：整理中、待審核、等待補充或整理失敗，使用者知道下一步能做什麼。"
      - "需要登入才看得到的網頁，可以把貼文內容一起貼上，再交給 AI 整理。"

# ============================================================================
# Tech Stack
# 技術架構
# ============================================================================

techStack:
  frontend:
  - Nuxt 4
  - Vue 3
  - TypeScript
  - Tailwind CSS v4

  backend:
  - Cloudflare Workers
  - LINE Messaging API
  - Gemini API
  - Notion API

  testing:
  - Vitest

# ============================================================================
# Video
# 介紹影片
# ============================================================================

video:
  title: "介紹影片"
  description: "48 秒看完從貼上網址、AI 整理到找回收藏的流程。畫面為操作示意，搭配實際產品截圖，含配樂、無旁白。"
  src: /videos/link-vault/intro.mp4
  poster: /videos/link-vault/poster.jpg

# ============================================================================
# Gallery
# 圖片展示
# ============================================================================

gallery:

- title: 收藏網站首頁
  image: /images/projects/link-vault/02.jpg

- title: 傳送網址收藏
  image: /images/projects/link-vault/03.jpg

- title: 查詢結果
  image: /images/projects/link-vault/04.jpg

- title: 圖文選單
  image: /images/projects/link-vault/05.jpg

- title: 使用指南與查詢
  image: /images/projects/link-vault/06.jpg

- title: 收藏完成通知
  image: /images/projects/link-vault/07.jpg
  device: phone

# ============================================================================
# Layout
# 畫廊版型設定
# ============================================================================

layout:
  col: 6
  aspect: video

  order:
    content: 2
    img: 1

---
