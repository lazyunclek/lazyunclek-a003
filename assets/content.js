export const site = {
  name: 'lazyunclek｜慵懶的K叔',
  description: '投資研究、生活美學與互動網站。把好奇心寫成文章，也做成能親手操作的網頁。',
  social: {
    threads: 'https://www.threads.com/@lazyunclek',
    instagram: 'https://www.instagram.com/lazyunclek/',
    facebook: null // 待設定：Facebook 粉專正式網址
  },
  contact: null, // 待設定：合作信箱或表單網址
  canonical: null // 待設定：正式網站根網址，設定後產生絕對 canonical / OG / sitemap
};

// status: demo 的內容是功能示範，不代表已完成作品或已發布文章。
export const works = [
  { slug:'btc-history', title:'比特幣歷史報酬模擬器', category:'互動研究', summary:'選擇投入時間與金額，探索不同市場週期的報酬與回撤。', detail:'讓讀者調整起始日期、投入方式與持有期間，並把結果和風險放在同一個畫面閱讀。', technologies:'互動圖表・情境試算', status:'demo', url:null, poster:'chart' },
  { slug:'brand-site', title:'個人品牌網站案例', category:'網站設計', summary:'從社群內容、作品展示到合作入口，規劃完整的閱讀路徑。', detail:'示範網站架構與內容編排。正式案例上線後，請替換文字、預覽圖片與實際網址。', technologies:'響應式網站・內容架構', status:'demo', url:null, poster:'editorial' },
  { slug:'valuation', title:'AI 股票估值工具', category:'互動研究', summary:'將成長率和估值假設攤開，檢視價格背後的市場預期。', detail:'讓使用者自行調整假設，觀察估值區間的變化。此處為待製作的示範概念，並無真實資料或計算結果。', technologies:'情境分析・資料視覺化', status:'demo', url:null, poster:'grid' },
  { slug:'business-tool', title:'小生意數位工具', category:'網站設計', summary:'讓資訊、詢問與日常管理進入同一套清楚的流程。', detail:'示範客戶需求如何轉成前台展示和後台管理，尚未對應真實委託案。', technologies:'流程設計・後台規劃', status:'demo', url:null, poster:'type' }
];

export const articles = [
  { slug:'price-and-story', title:'市場買的是故事，還是已經發生的獲利？', category:'投資心理', date:null, summary:'當價格先反映兩年後的想像，我們該如何分辨預期和已經驗證的事實？', body:['一則示範文章，用來展示長篇內容的版型與導覽。這段文字並非已發表的 Threads 原文。','正式發布時，請保留原文的語氣與脈絡，補上來源、日期、圖片與查證過的資料。'], threads:null, status:'demo', relatedWork:'valuation' },
  { slug:'collecting-value', title:'收藏的價格，從哪一刻變成市場共識？', category:'收藏市場', date:null, summary:'卡牌、藝術品與日常收藏，價格曲線之外還有流動性和文化認同。', body:['這是示範內容，並非真實文章。未來可以在此放入已確認的原文、圖片和歷史價格資料。'], threads:null, status:'demo', relatedWork:'btc-history' },
  { slug:'long-term', title:'一張報酬圖，沒有告訴你的持有過程', category:'加密貨幣', date:null, summary:'終點的漲幅很醒目；途中最大的跌幅，以及當時能否繼續持有，同樣重要。', body:['這是示範文章。正式內容請提供 Threads 原文連結，並確認文中的數據與計算方法。'], threads:null, status:'demo', relatedWork:'btc-history' }
];
