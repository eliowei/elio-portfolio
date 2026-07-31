---

title: 卡牌配對遊戲
updatedAt: 2026-07-31
slug: card-matching-game
order: 04
year: 2024
category: Frontend Game

card:
  title: 卡牌配對遊戲
  description: 使用 JavaScript 製作的記憶力遊戲。

description: >
  透過卡牌翻面與配對機制，
  練習 DOM 操作與遊戲邏輯設計。

highlights:
  - 配對機制
  - 洗牌系統
  - 難度設定
  - 主題切換
  - 遊戲邏輯

cover: /images/projects/card-matching-game/cover.png

tags:

- JavaScript
- JQuery

github: https://github.com/eliowei/Cards

demo: https://eliowei.github.io/Cards/

overview:
  title: 透過遊戲開發練習 JavaScript 核心能力。

  content: >
    本專案以經典卡牌配對遊戲為基礎，
    練習 JavaScript 的事件處理、
    DOM 操作與遊戲狀態管理。

    並加入難度設定與主題切換功能，
    提升遊戲可玩性與互動體驗。

responsibilities:
  frontend:
    - DOM 操作
    - 遊戲狀態管理
    - 難度系統設計
    - UI 互動設計

techStack:
  frontend:
    - JavaScript
    - JQuery

showcase:
  - title: Card Matching
    description: 隨機生成卡牌並完成配對。
    features:
      - 洗牌機制
      - 配對判斷
      - 勝利條件

  - title: Difficulty Settings
    description: 提供多種難度。
    features:
      - 卡牌數量
      - 次數限制

  - title: Custom Themes
    description: 客製化遊戲風格。
    features:
      - 夜間模式
      - 日間模式
      - 花色切換

challenges:
  - title: 洗牌演算法設計
    subtitle: Randomization

    problem: >
      卡牌需要在每次遊戲開始時重新排列，
      並確保配對卡牌數量正確。

    solution: >
      使用隨機排序演算法打亂卡牌陣列，
      並於初始化階段建立配對資料。

    technologies:
      - JavaScript

gallery:

- title: 難度選擇
  image: /images/projects/card-matching-game/02.png

- title: 開始遊戲
  image: /images/projects/card-matching-game/01.png

layout: 
  col: 4
  aspect: square

  order:
    content: 1
    img: 2

futurePlans:
  - TypeScript 重構
  - Canvas 版本

---
