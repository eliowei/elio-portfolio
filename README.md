# Elio Wei 品牌網站服務

以品牌網站建置為核心，提供品牌形象網站、服務介紹頁與 Landing Page，LINE OA 內容管理整合作為延伸服務。

## 本機開發

安裝依賴後執行 npm run dev；正式建置使用 npm run build，預覽使用 npm run preview。

## 內容維護

- app/components/sections/HeroSection.vue：品牌定位與首頁主視覺。
- app/components/sections/AboutSection.vue：網站服務與 LINE OA 入口。
- app/components/sections/ServiceDetails.vue：合作流程、服務邊界與 FAQ。
- content/projects/：案例與產品方案；個人案例應標示專案性質。
- app/components/contact/ContactFrom.vue：洽詢表單與服務選項。

網站使用 Nuxt 4、Nuxt UI、Tailwind CSS 與 Nuxt Content。SEO 與網址設定見 nuxt.config.ts；EmailJS 使用 NUXT_PUBLIC_EMAIL_SERVICE_ID、NUXT_PUBLIC_EMAIL_TEMPLATE_ID、NUXT_PUBLIC_EMAIL_PUBLIC_KEY 環境變數。

## 上線前確認

確認報價與支援範圍符合實際承接能力，並實測 EmailJS 寄信、手機操作及分析事件。目前 Cookie banner 關閉而自訂事件要求同意紀錄，分析追蹤仍需另外統一處理。
