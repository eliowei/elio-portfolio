---

# ============================================================================
# Basic Information
# 基本資訊
# ============================================================================

title: 個人品牌網站
updatedAt: 2026-07-31
slug: personal-portfolio
type: project
category: Portfolio Website

year: 2026
order: 02

description: "我的獨立接案網站，把服務介紹、作品和合作入口放在同一個地方，讓第一次認識我的人知道可以一起做什麼。"

highlights:
  - SEO 優化
  - GSAP 動畫互動
  - 響應式網頁設計
  - 專案案例展示

cover: /images/projects/personal-website/cover.png

tags:
  - 品牌網站
  - RWD 響應式
  - 前端開發

demo: https://elioflowra.com

# ============================================================================
# Card Information
# 卡片資訊（首頁列表）
# ============================================================================

card:
  title: 個人品牌網站
  description: "以服務、作品與洽詢串起來的自有品牌網站。"

# ============================================================================
# Overview
# 專案概述
# ============================================================================

overview:
  title: "讓第一次來的人快速知道可以怎麼合作"
  content: "我把網站當成接案時的第一份自我介紹。從首頁的服務分類、案例索引到洽詢表單，每一段都對應訪客在決定合作前要找的資訊。"

caseStudy:
  label: "自有品牌網站 · 網站設計與前端開發"
  scope:
    - "品牌網站與版面設計"
    - "Nuxt 前端開發"
    - "手機版與捲動互動"
    - "案例內容與洽詢流程"
  process:
    - title: "整理服務與作品"
      illustration: portfolio-planning
      description: "確定首頁要回答的問題，讓服務介紹和案例互相對照。"
    - title: "設計與實作頁面"
      illustration: portfolio-devices
      description: "將首頁、案例和聯絡頁串起來，案例內容可以持續新增，再檢查不同裝置的閱讀順序。"
  result: "訪客可以先看服務與案例，再從任何頁面帶著服務類型直接洽詢。"

# ============================================================================
# Feature Showcase
# 功能展示
# ============================================================================

showcase:
- title: Case Study 展示
  icon: image
  description: "每件作品有自己的詳情頁，讓訪客看得到問題、實作和畫面。"

  features:
    - 專案分類
    - 圖片展示
    - 技術標籤
    - 專案細節頁

- title: SEO 與內容管理
  icon: i-lucide-file-search
  description: "案例以 Markdown 維護，頁面會讀取標題、摘要和封面，讓首頁與詳情頁使用同一份內容。"

  features:
  - Sitemap
  - Meta Tags
  - Open Graph
  - 搜尋引擎收錄

- title: 動畫與使用體驗
  icon: devices
  description: "用頁面轉場和捲動互動引導閱讀，並針對不同螢幕調整畫面。"

  features:

  - Page Transition
  - Scroll Animation
  - Responsive Layout

# ============================================================================
# Responsibilities
# 負責內容
# ============================================================================

responsibilities:

  frontend:
  - Nuxt 4
  - TypeScript
  - Tailwind CSS
  - Responsive Design

  animation:
  - GSAP Page Transition
  - Scroll Animation

  architecture:
  - SEO Optimization
  - Content Architecture
  - Information Architecture

# ============================================================================
# Tech Stack
# 技術架構
# ============================================================================

techStack:
  frontend:
  - Nuxt 4
  - Vue 3
  - TypeScript
  - Tailwind CSS

  animation:
  - GSAP
  - Vue Transition

  content:
  - Nuxt Content
  - Markdown

# ============================================================================
# Engineering Challenges
# 技術挑戰
# ============================================================================

challenges:

- title: SEO 架構規劃
  subtitle: Search Optimization
  problem: >
    個人網站需要具備良好的搜尋能見度，
    同時兼顧內容維護與頁面效能。

  solution: >
    透過 Nuxt SSR、Meta 管理與 Sitemap 建立，
    提升搜尋引擎索引效率與網站曝光度。

  technologies:
    - Nuxt SEO
    - Sitemap

- title: 頁面轉場體驗
  subtitle: User Experience

  problem: >
    頁面切換過於生硬，
    容易降低整體瀏覽體驗。

  solution: >
    使用 GSAP 建立 Page Transition 與動畫效果，
    提升網站的互動感與品牌印象。

  technologies:
    - GSAP
    - Vue Transition

- title: 內容架構設計
  subtitle: Content Architecture

  problem: >
    隨著作品數量增加，
    若缺乏統一資料結構，
    容易造成維護成本提高與版面不一致。

  solution: >
    使用 Nuxt Content 與 Markdown 建立內容驅動架構，
    將作品資料結構化管理，
    讓頁面能透過相同模板快速產生內容。

  technologies:
    - Nuxt Content
    - Markdown

# ============================================================================
# Gallery
# 圖片展示
# ============================================================================

gallery:

- title: 首頁 Hero
  image: /images/projects/personal-website/01.png

- title: Case Study 列表
  image: /images/projects/personal-website/02.png

- title: 作品詳情
  image: /images/projects/personal-website/03.png

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
