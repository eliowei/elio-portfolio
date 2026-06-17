---
# ============================================================================
# Basic Information
# 基本資訊
# ============================================================================

title: LINE OA 商家管理平台
slug: line-oa-platform
type: product
category: Product Platform

year: 2026
order: 01

description: >
  一套專為中小型商家打造的 LINE 官方帳號管理平台，
  提供內容管理、圖文選單管理、權限管理與多店家管理功能，
  協助商家快速維護 LINE 官方帳號內容並提升營運效率。

highlights:
  - 商家自主內容管理
  - LINE OA 內容同步
  - 多店家管理
  - 權限管理
  - 數據分析儀表板

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
  title: 貓咪產業常見經營痛點

  description: >
    貓舍、寵物旅館與寵物美容店
    經常透過 LINE 官方帳號與客戶互動，
    但大量重複詢問與內容維護成本，
    往往消耗許多時間。

  items:
    - title: 重複回答相同問題
      description: >
        每天都需要回答房型價格、
        營業時間與預約方式。

    - title: 貓咪資訊更新困難
      description: >
        新增貓咪或更新照片時，
        需要重新建立訊息與圖片。

    - title: 公告資訊容易過期
      description: >
        活動公告與優惠資訊缺乏統一管理，
        容易造成資訊不一致。

    - title: 無法了解客戶興趣
      description: >
        不知道哪些貓咪最受歡迎、
        哪個房型最常被瀏覽。

# ============================================================================
# Feature Showcase
# 功能展示
# ============================================================================

showcase:

- title: 後台內容管理
  description: >
    提供商家自行維護公告、
    FAQ、價格與服務內容。

  features:
  
  - 我要看貓貓 管理
  - 價位表管理
  - 店址交通管理
  - 公告管理
  - FAQ 管理
  - 排序管理

- title: LINE OA 整合
  description: >
    將後台內容同步至 LINE 官方帳號，
    提供一致且即時的資訊體驗。

  features:
  - 圖文選單管理
  - Flex Message
  - 自動回覆
  - 推播訊息
  - 內容同步

- title: 多店家與權限管理
  description: >
    支援多店家與多角色權限管理，
    提升平台擴充與管理效率。

  features:

  - 店家管理
  - Bot 綁定
  - 角色權限
  - 管理員帳號
  - 會員管理

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
      - 預約系統
      - 預約表單設計
      - Google Calendar 串接
      - 預約通知推播
      - 圖文選單客製化
      - Flex Message 客製化
      - 自動回覆流程設計
      - Google Sheet 串接
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
    - name: Early Bird
      price: 18000
      description: 限前五間店家

    - name: Regular
      price: 20000

  # Delivery Information
  # 交付資訊
  delivery:
    days: 3
    label: 最快 3 個工作天完成導入
    support:
      - 30天售後支援
      - LINE OA 設定協助

  # Frequently Asked Questions
  # 常見問題
  faq:
    - question: 需要月費嗎？
      answer: 目前無強制月費。

    - question: 需要提供 LINE OA 嗎？
      answer: 需要提供官方帳號資訊。

  # Call To Action
  # 行動呼籲
  cta:
    title: 想了解是否適合您的店家？
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