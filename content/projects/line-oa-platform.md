---
# ============================================================================
# Basic Information
# 基本資訊
# ============================================================================

title: |
 LINE OA 
 商家管理平台
slug: line-oa-platform
type: product
category: Product Platform

year: 2026
order: 01

description: |
  讓店家不用找工程師
  自己就能更新 LINE 官方帳號

  專為貓舍、寵物旅館與寵物美容打造

highlights:
  - 商家自主更新
  - 多店管理
  - 最快 3 天完成導入

cover: /images/projects/line-oa-platform/cover.jpeg

tags:
  - Vue 3
  - PrimeVue
  - Node.js
  - MongoDB
  - LINE Messaging API

# ============================================================================
# Card Information
# 卡片資訊（首頁列表）
# ============================================================================

card:
  title: LINE OA 商家管理平台
  description: 提供商家自行管理 LINE 官方帳號內容的後台管理平台。

# ============================================================================
# Overview
# 專案/產品概述
# ============================================================================

overview:
  title: 讓商家無需依賴工程師，也能自行維護 LINE 官方帳號內容。

  content: >
    許多商家將 LINE 官方帳號作為主要資訊入口，
    但每次修改公告、價格或服務內容時，
    都需要重新設定或請工程師協助處理。

    本專案建立可重複部署的商家管理平台，
    透過後台系統整合公告、服務內容、
    圖文選單與會員管理功能，
    讓商家可自行維護內容並即時同步至 LINE 官方帳號。

# ============================================================================
# Problem
# 商業痛點（Product 專用）
# ============================================================================

problem:
  title: 商家常見經營痛點

  description: >
    管理 LINE OA 時，您是否也遇過這些問題？

  items:
    - title: 重複回答相同問題
      description: >
        客服訊息不斷湧入，其中 80% 都是詢問價格、地點或預約方式等重複問題。

    - title: 貓咪資訊更新困難
      description: >
        個體資訊繁瑣且異動頻繁，難以在通訊軟體中即時且結構化呈現。

    - title: 公告資訊容易過期
      description: >
        重要公告常淹沒在訊息流中，客戶難以即時掌握最新優惠或休假資訊。

    - title: 無法了解客戶興趣
      description: >
        不知道客戶點擊了哪些服務，缺乏數據支持來優化經營策略或精準行銷。

# ============================================================================
# Implementation Benefits
# 導入成效
# ============================================================================
benefits:
  - 節省每日客服回覆時間
  - 快速更新所有 LINE 內容
  - 降低 LINE OA 維護成本
  - 提升客戶查詢效率
  - 建立商家資料中心

# ============================================================================
# Feature Showcase
# 功能展示
# ============================================================================

showcase:

- title: 內容管理
  description: >
    包含 FAQ、公告、價目表等基礎內容，皆可透過後台自由編輯，無需工程開發。

  # features:
  
  # - 我要看貓貓 管理
  # - 價位表管理
  # - 店址交通管理
  # - 公告管理
  # - FAQ 管理
  # - 排序管理

- title: LINE OA 整合
  description: >
    將後台內容同步至 LINE 官方帳號，
    提供一致且即時的資訊體驗。

- title: 多店家與權限管理
  description: >
    專為連鎖品牌設計，可個別調整分店專屬的服務與資料。

- title: 數據分析

  features:
    - 追蹤圖文選單點擊紀錄
    - 熱門內容排行
    - 使用者行為分析
    - 點擊成效統計

# ============================================================================
# Responsibilities
# 負責內容（Project 偏向）
# ============================================================================

responsibilities:

  frontend:
    - Vue 3
    - PrimeVue
    - Pinia
    - Responsive Design

  backend:
    - RESTful API
    - JWT Authentication
    - Role Permission

  architecture:
    - Multi Tenant Design
    - Role Permission Design

  database:
    - MongoDB
    - Mongoose

# ============================================================================
# Tech Stack
# 技術架構
# ============================================================================

techStack:
  frontend:
  - Vue 3
  - PrimeVue
  - Pinia

  backend:
  - Node.js
  - Express
  - JWT

  database:
  - MongoDB
  - Mongoose

  line:
  - Messaging API
  - Rich Menu API
  - Flex Message

# ============================================================================
# Industries
# 適用產業 / 可擴充功能
# ============================================================================

industries:

  - title: 適用產業
    subtitle: INDUSTRIES

    items:
      - 貓舍
      - 寵物旅館
      - 寵物美容
      - 寵物到府

  - title: 可擴充功能
    subtitle: EXTENSIONS

    items:
      - 線上預約系統
      - Google Calendar 同步
      - Google Sheet 報表串接
      - 預約通知推播
      - 圖文選單客製化
      - Flex Message 客製化
      - 自動回覆流程設計
      - 第三方 API 串接
      - 資料同步整合

# ============================================================================
# Implementation
# 導入流程
# ============================================================================

implementation:

  - title: 需求訪談
    subtitle: Discovery

    description: >
      了解店家產業類型、服務內容、
      LINE 官方帳號現況與功能需求，
      規劃適合的公版方案與擴充方向。

  - title: LINE OA 串接
    subtitle: Integration

    description: >
      協助完成 LINE Official Account、
      Messaging API 與 Webhook 設定，
      建立後台與 LINE Bot 的連線機制。

  - title: 資料建置
    subtitle: Content Setup

    description: >
      建立 FAQ、公告、
      價格資訊與店家內容，
      完成初始資料匯入與版面配置。

  - title: 系統上線
    subtitle: Deployment

    description: >
      完成權限配置、
      功能測試與部署作業，
      正式交付店家使用。

  - title: 客製化擴充
    subtitle: Customization

    description: >
      可依需求擴充預約系統、Google Calendar

# ============================================================================
# Engineering Challenges
# 技術挑戰
# ============================================================================

# challenges:

# ============================================================================
# System Design
# 系統設計
# ============================================================================

# systemDesign:

# ============================================================================
# Product Information
# 產品資訊（Product 專用）
# ============================================================================

product:

  # Pricing Plans
  # 價格方案
  pricing:

    title: 方案價格

    description: 平台建置導入方案，不含 LINE 官方帳號費用

    plans:

      - name: 標準導入方案

        subtitle: 適合單店快速上線

        price: 28,800

        suffix: 起

        featured: true

        button:
          text: 立即預約諮詢
          link: /contact

        features:
          - LINE OA 串接設定
          - 平台帳號開通
          - 商家資料建置
          - 後台操作教學
          - 30 天技術支援
          - 初始資料建置

      - name: 客製化方案

        subtitle: 依需求客製開發

        priceText: 依需求報價

        button:
          text: 預約需求討論
          link: /contact

        featured: true

        features:
          - 線上預約系統
          - Google Calendar 整合
          - LINE Login 會員登入
          - Google Sheet 同步
          - 第三方 API 串接
          - 長期維護方案

  # Frequently Asked Questions
  # 常見問題
  faq:

    title: 常見問題

    items:

      - question: 不懂 LINE OA 怎麼辦？
        answer: 可以協助您完成設定。

      - question: 可以自己修改內容嗎？
        answer: 可以，後台可自行管理。

      - question: 導入需要多久？
        answer: 最快3個工作天

      - question: 有客製需求怎麼辦？
        answer: 可另外評估報價

  # Call To Action
  # 行動呼籲
  cta:

    title: 準備開始經營 LINE 官方帳號了嗎？

    description: 歡迎與我討論您的需求，最快 3 個工作天完成導入

    button: 立即諮詢

    link: /contact

# ============================================================================
# Gallery
# 圖片展示
# ============================================================================

gallery:
- title: LINE 官方帳號首頁
  image: /images/projects/line-oa-platform/01.jpeg

- title: 系統資訊總覽
  image: /images/projects/line-oa-platform/02.png

- title: 貓咪管理
  image: /images/projects/line-oa-platform/03.png

- title: 公告管理
  image: /images/projects/line-oa-platform/04.png

# ============================================================================
# Layout
# 畫廊版型設定
# ============================================================================

layout:
  col: 6
  aspect: square

  order:
    content: 2
    img: 1

---