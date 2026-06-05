---

title: Clock & Snake
slug: clock-snake
order: 05
year: 2023
category: Frontend Project

card:
  title: 時鐘與貪食蛇
  description: 結合時鐘功能與小遊戲的互動作品。

description: >
  以 FF 系列風格打造的時鐘應用，
  並整合貪食蛇遊戲與多媒體功能。

highlights:
  - 世界時區
  - 主題切換
  - 拖曳互動
  - 貪食蛇遊戲
  - FF 風格設計

cover: /images/projects/clock-snake/cover.png

tags:

- JavaScript

github: https://github.com/eliowei/Clock

demo: https://eliowei.github.io/Clock/

overview:
  title: 將時間資訊與互動娛樂整合在同一介面。

  content: >
    本專案以 Final Fantasy 系列的介面風格作為設計靈感，
    打造結合世界時鐘、多媒體播放與貪食蛇遊戲的互動式應用。

    使用者可快速切換不同國家時區，
    並透過拖曳與主題切換提升操作體驗，
    讓工具型應用兼具實用性與趣味性。

responsibilities:
  frontend:
    - JavaScript DOM 操作
    - 時區轉換邏輯
    - 拖曳互動設計
    - 遊戲邏輯設計
    - 響應式介面設計

techStack:
  frontend:
    - HTML
    - CSS
    - JavaScript

  tools:
    - LocalStorage

showcase:
  - title: World Clock
    description: 多時區時鐘功能。
    features:
      - 7個時區
      - 即時更新

  - title: UI Interaction
    description: 提供拖曳與樣式切換。
    features:
      - 拖曳功能
      - 主題切換

  - title: Mini Games
    description: 內建貪食蛇遊戲。
    features:
      - 遊戲模式
      - 分數紀錄

challenges:

- title: 多時區時間同步
  subtitle: World Clock

  problem: >
    不同國家具有不同時區設定，
    必須確保各地時間能夠同步更新，
    並避免切換時區時產生誤差。

  solution: >
    使用 JavaScript Date API 計算不同時區時間，
    並透過定時更新機制同步畫面顯示。

  technologies:
    - JavaScript

- title: 拖曳式介面設計
  subtitle: Interaction

  problem: >
    傳統時鐘介面較為靜態，
    缺乏使用者互動性。

  solution: >
    實作拖曳功能，
    讓使用者能自由調整介面位置，
    提升操作體驗與趣味性。

  technologies:
    - JavaScript
    - DOM

gallery:
  - title: 世界時鐘
    image: /images/projects/clock-snake/cover.png

  - title: 主題切換
    image: /images/projects/clock-snake/01.png

  - title: 貪食蛇遊戲
    image: /images/projects/clock-snake/02.png

layout:
  col: 8
  aspect: video

  order:
    content: 1
    img: 2

futurePlans:
  - Canvas 重構貪食蛇遊戲
  - TypeScript 重構
  - 更多主題樣式
  - 世界城市搜尋功能
  - 響應式介面優化

---
