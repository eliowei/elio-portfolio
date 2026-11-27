// Content for the fictional grooming shop demo at /demo/mao-ri. Shop details, prices and records are all made up.
export const maoriImg = (name: string) => `/images/demo/mao-ri/${name}.webp`
export const maoriBase = '/demo/mao-ri'

export const maoriNav = [
  { to: `${maoriBase}/about`, label: '關於我們' },
  { to: `${maoriBase}/services`, label: '美容服務' },
  { to: `${maoriBase}/price`, label: '美容價目' },
  { to: `${maoriBase}/daily`, label: '美容日常' },
  { to: `${maoriBase}/booking`, label: '線上預約' },
  { to: `${maoriBase}/news`, label: '店內公告' },
  { to: `${maoriBase}/contact`, label: '聯絡我們' }
]

// Newest first: the home page pins the first one.
export const maoriNews = [
  { id: 'year-end', date: '2026.11.24', tag: '公休', title: '年末公休時間', body: '12 月 29 日到 31 日公休\n1 月 2 日起恢復營業' },
  { id: 'winter', date: '2026.11.15', tag: '提醒', title: '冬天洗澡請多留一點時間', body: '天氣變冷毛髮比較難乾\n接回時間可能晚 20 分鐘' },
  { id: 'cat-day', date: '2026.11.02', tag: '服務', title: '週三下午為貓咪安靜時段', body: '週三 14:00 到 17:00 只接貓咪\n環境比較安靜' },
  { id: 'first', date: '2026.10.20', tag: '活動', title: '初次來店贈送腳底毛修剪', body: '第一次來店預約洗澡或造型\n活動到 12 月 28 日' }
]

// The small signs hanging in the shop.
export const maoriSigns = [
  { title: '請牽好牽繩', text: '進店前請繫上牽繩\n或使用外出籠' },
  { title: '貓咪請待在籠內', text: '到美容室再讓牠出來\n避免受到驚嚇' },
  { title: '準時接送', text: '超過 15 分鐘\n請先打電話告訴我們' },
  { title: '拍照請先問一聲', text: '有些毛孩怕鏡頭\n也有客人不想入鏡' },
  { title: '先別餵別人家的孩子', text: '牠可能過敏\n或正在控制飲食' },
  { title: '不舒服就改期', text: '拉肚子 發燒或有傷口\n健康比造型重要' }
]

export const maoriShop = {
  address: '○○市○○區○○巷 00 號 示意',
  hours: '週二至週日 10:00–19:00',
  closed: '週一公休',
  phone: '02-0000-0000'
}

export const maoriGroomers = [
  { photo: 'groomer', name: '小羽', role: '店主 寵物美容師', focus: '小型犬造型', alt: '小羽幫白色比熊修剪毛髮', words: '每一隻毛孩都有自己的個性\n我喜歡慢慢認識牠們\n再找到最適合的整理方式' },
  { photo: 'groomer-2', name: '阿哲', role: '寵物美容師', focus: '中大型犬洗護', alt: '阿哲幫黃金獵犬幼犬吹整毛髮', words: '大狗吹乾要花很久\n我會讓牠中途起來走一走\n不用一次撐到底' },
  { photo: 'groomer-3', name: '米亞', role: '寵物美容師', focus: '貓咪梳整', alt: '米亞輕輕幫長毛貓梳毛', words: '貓咪不喜歡被催\n先讓牠聞聞梳子\n願意靠過來了我們再開始' }
]

export const maoriServices = [
  {
    id: 'bath', name: '基礎沐浴', doodle: 'bath', tint: 'var(--mist)', photo: 'svc-bath', alt: '小狗閉著眼睛享受洗澡',
    short: '溫和清潔 舒緩放鬆', text: '溫水清洗再手吹吹整\n把皮膚和毛髮整理乾爽',
    facts: { 適合對象: '所有犬貓', 所需時間: '約 60–90 分鐘', 洗吹方式: '溫水手洗 全程手吹', 是否關籠: '不關籠 休息時分區安置' }
  },
  {
    id: 'trim', name: '造型修剪', doodle: 'scissors', tint: 'var(--apricot)', photo: 'svc-trim', alt: '美容師修剪貴賓犬臉部毛髮',
    short: '依品種與需求修整', text: '依品種臉型和生活習慣討論造型\n好看也好整理',
    facts: { 適合對象: '需要修剪造型的犬貓', 所需時間: '約 90–150 分鐘', 洗吹方式: '洗澡手吹後修剪', 是否關籠: '不關籠' }
  },
  {
    id: 'detail', name: '細節照護', doodle: 'comb', tint: '#e8c978', photo: 'svc-detail', alt: '美容師小心幫小狗修剪指甲',
    short: '修甲 清耳 肛門腺', text: '指甲 耳朵 肛門腺與腳底毛的日常清潔\n也可以單做',
    facts: { 適合對象: '所有犬貓', 所需時間: '約 20–40 分鐘', 洗吹方式: '依需求局部清潔', 是否關籠: '不關籠' }
  },
  {
    id: 'cat', name: '貓咪美容', doodle: 'cat', tint: 'var(--leaf)', photo: 'svc-cat', alt: '長毛貓趴在毛巾上讓人梳毛',
    short: '低壓環境 專屬照護', text: '安排安靜時段分段進行\n牠緊張就先停下來',
    facts: { 適合對象: '貓咪 第一次建議先評估', 所需時間: '約 60–120 分鐘', 洗吹方式: '溫水清洗 低噪音手吹', 是否關籠: '不關籠 獨立安靜空間' }
  }
]

export const maoriSteps = [
  { title: '溝通', text: '了解毛況個性和想要的樣子' },
  { title: '清潔洗澡', text: '先梳開毛結 再依膚況洗澡' },
  { title: '吹整修剪', text: '手吹吹整 累了就休息' },
  { title: '檢查交付', text: '一起確認 說明回家照顧重點' }
]

export const maoriDogPrices = [
  { size: '小型犬', weight: '5kg 以下', bath: '$500', trim: '$800 起' },
  { size: '中型犬', weight: '5–15kg', bath: '$700', trim: '$1,100 起' },
  { size: '大型犬', weight: '15–30kg', bath: '$900', trim: '$1,500 起' },
  { size: '超大型犬', weight: '30kg 以上', bath: '$1,200', trim: '$2,000 起' }
]
export const maoriCatPrices = [
  ['基礎沐浴', '$800 起'], ['全身修剪 依毛況', '$1,200 起'], ['局部修剪 肚毛與屁股毛', '$300 起'], ['除毛結', '$300 起']
]
export const maoriAddons = [
  ['指甲修剪', '$100'], ['耳道清潔', '$100'], ['肛門腺清理', '$100'], ['腳底毛修剪', '$100'], ['牙齒基礎清潔', '$200']
]
export const maoriSurcharges = [
  ['毛結嚴重需要額外梳開', '$200–500'], ['情緒緊張需要分段安撫', '$200 起'],
  ['超過約定接回時間', '每 30 分鐘 $200'], ['高齡 幼齡或術後照護', '另行評估']
]

export type MaoriKind = '狗狗' | '貓咪'
export const maoriDaily: { id: number, name: string, kind: MaoriKind, breed: string, date: string, service: string, note: string }[] = [
  { id: 1, name: '布丁', kind: '狗狗', breed: '柴犬', date: '2026.11.20', service: '基礎沐浴', note: '洗澡時一直笑\n吹到屁股才開始抗議' },
  { id: 2, name: '豆豆', kind: '狗狗', breed: '貴賓', date: '2026.11.18', service: '基礎沐浴', note: '包進毛巾就不想出來了' },
  { id: 5, name: '小花', kind: '貓咪', breed: '長毛米克斯', date: '2026.11.15', service: '梳整', note: '分兩段梳\n中間讓她在墊子上睡一下' },
  { id: 3, name: '麻糬', kind: '狗狗', breed: '比熊', date: '2026.11.13', service: '造型修剪', note: '圓頭修好\n主人說像一顆雲' },
  { id: 6, name: '橘子', kind: '貓咪', breed: '橘貓', date: '2026.11.08', service: '梳整', note: '梳到下巴會自己把頭靠過來' },
  { id: 4, name: '阿福', kind: '狗狗', breed: '雪納瑞', date: '2026.11.06', service: '造型修剪', note: '鬍子保留長一點\n很有精神' },
  { id: 7, name: '米米', kind: '貓咪', breed: '英國短毛貓', date: '2026.11.01', service: '基礎沐浴', note: '第一次來\n先熟悉環境才下水' },
  { id: 8, name: '黑糖', kind: '貓咪', breed: '賓士貓', date: '2026.10.28', service: '細節照護', note: '剪完指甲就在窗邊睡著' }
]

// Each image holds the before (left half) and after (right half) of one pet.
export const maoriCompares = [
  { image: 'ba-dog', name: '可可', breed: '紅貴賓', service: '造型修剪', note: '毛量多又打結\n梳開後修成泰迪熊造型' },
  { image: 'ba-cat', name: '奶茶', breed: '長毛貓', service: '沐浴梳整', note: '胸口和後腿的浮毛梳掉\n蓬鬆很多' },
  { image: 'ba-dog2', name: '棉花', breed: '比熊', service: '造型修剪', note: '遮住眼睛的毛修短\n臉又圓回來了' },
  { image: 'ba-cat2', name: '南瓜', breed: '長毛橘貓', service: '梳整', note: '分兩次梳完\n沒有剃毛' }
]

export const maoriFaqs = [
  { q: '需要提前多久預約', a: '建議提前 3 到 7 天\n假日時段比較快額滿' },
  { q: '需要打過預防針嗎', a: '請先完成基本預防針與驅蟲\n第一次來店時告訴我們日期' },
  { q: '第一次來要帶什麼', a: '牽繩或外出籠就可以\n有病史或過敏請一起告訴我們' },
  { q: '可以陪同嗎', a: '開始前可以一起討論\n多數毛孩在主人離開後比較放鬆\n我們會回報狀況' }
]
