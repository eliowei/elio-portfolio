---

title: 番茄鐘管理工具
slug: pomodoro-timer
order: 02
year: 2024
category: Frontend Project

card:
  title: 番茄鐘管理工具
  description: 結合番茄工作法與待辦事項管理。

description: >
  透過番茄工作法協助使用者建立專注與休息循環，
  並結合待辦事項管理提升工作效率。

highlights:
  - 番茄鐘倒數
  - 任務管理
  - 主題切換
  - 鈴聲切換
  - LocalStorage 儲存

cover: /images/projects/pomodoro-timer/cover.png

tags: 

- Vue 3
- Vuetify

github: https://github.com/eliowei/pomodoro

demo: https://eliowei.github.io/pomodoro/#/

overview:
  title: 將時間管理與任務管理整合於同一工作流程。

  content: >
    Pomodoro Timer 以番茄工作法為核心，
    協助使用者建立專注與休息循環。

    除了計時功能之外，
    也整合待辦事項管理、主題切換與音效設定，
    讓使用者能打造符合個人習慣的專注環境。

responsibilities:
  frontend:
    - Vue 3 Composition API
    - Vuetify UI
    - Pinia 狀態管理
    - Responsive Design

  architecture:
    - 計時器生命週期設計
    - LocalStorage 資料持久化
    - 任務管理流程設計

techStack:
  frontend:
    - Vue 3
    - Vuetify
    - Pinia

  storage:
    - LocalStorage

  tooling:
    - Vite

showcase:
  - title: Focus Timer
    description: 提供番茄鐘倒數與循環機制。
    features:
      - 工作倒數
      - 休息倒數
      - 自動切換

  - title: Task Management
    description: 管理每日待辦事項。
    features:
      - 新增任務
      - 狀態切換
      - 篩選功能

  - title: Personalization
    description: 提供個人化設定。
    features:
      - 主題切換
      - 鈴聲切換
      - 設定保存

challenges:
  - title: 計時器狀態管理
    subtitle: Timer Lifecycle

    problem: >
      使用者切換頁面時，
      計時器狀態容易不同步。

    solution: >
      將計時邏輯集中管理，
      確保畫面與倒數狀態同步更新。

    technologies:
      - Vue 3

  - title: 資料持久化設計
    subtitle: Persistence

    problem: >
      使用者重新整理頁面後，
      待辦事項與個人設定容易遺失。

    solution: >
      使用 LocalStorage 保存任務資料與使用者偏好設定，
      確保重新進入頁面後仍能維持原有狀態。

    technologies:
      - LocalStorage
      - Vue 3

gallery:
- title: 首頁
  image: /images/projects/pomodoro-timer/01.png

- title: 鈴聲設定
  image: /images/projects/pomodoro-timer/02.png

layout: 
  col: 4
  aspect: square

  order:
    content: 2
    img: 1

futurePlans:
  - TypeScript 重構
  - PWA 支援
  - 雲端同步功能
  - 統計分析面板
  - 自訂工作週期設定
---