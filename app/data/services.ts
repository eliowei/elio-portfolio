// Single source for service names: home cards, inquiry sidebar and the form's project type all read this.
// `id` is the ?service= query value and the project_type sent by the inquiry email.
export const services = [
  { id: 'corporate', title: '品牌形象網站', description: '個人或企業的品牌、服務與聯絡入口', icon: 'i-lucide-panels-top-left' },
  { id: 'landing', title: '一頁式網站／活動頁', description: '介紹活動、商品或服務', icon: 'i-lucide-layers' },
  { id: 'line_oa_template', title: 'LINE OA／LINE Bot 整合', description: '內容管理與流程整合', icon: 'i-lucide-message-circle' },
  { id: 'custom', title: '客製化功能開發', description: '依需求規劃功能與串接', icon: 'i-lucide-settings' },
]
