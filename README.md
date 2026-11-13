# A003｜lazyunclek 個人品牌網站

無建置步驟的靜態多頁網站，可放在 GitHub Pages 專案根目錄。GitHub 儲存庫為 `lazyunclek/lazyunclek-a003`，Pages 尚未啟用。A003 與 A001 獨立；沒有沿用 A001 38 MB 的 3D 模型，以免拖慢手機首屏。

## 網站路由

| 路徑 | 用途 |
|---|---|
| `/` | 品牌首頁、社群、精選作品、文章與服務 |
| `/bio/` | 手機優先的社群入口 |
| `/works/` | 網站與文章分類、搜尋、篩選 |
| `/work/?id=slug` | 作品詳情 |
| `/articles/?id=slug` | 文章閱讀頁 |
| `/services/` | 網站服務、流程、FAQ 與洽詢 |

## 預覽與部署

在 A003 資料夾執行 `python3 -m http.server 8000`，瀏覽 `http://localhost:8000/`。請勿以 `file://` 預覽：瀏覽器的模組載入會受限制。A003 內容放在 `lazyunclek/lazyunclek-a003` 的根目錄；實際網域待確認。站內連結使用相對路徑，也適用於 `/repo-name/` 子路徑。

## 更新內容

修改 `assets/content.js`：`site.social` 放社群網址，`site.contact` 放 `mailto:信箱` 或表單網址；`works`、`articles` 各項依 `slug` 產生獨立網址。`status:'demo'` 為示範內容；取得真實作品與文章後替換標題、摘要、內文、連結與圖片，再移除示範標記。文章排序就是陣列順序，可手動策展；未設日期與成效數據時不會顯示虛構數字。正式作品影片或圖片尚未提供，目前為 CSS 示意視覺；後續可新增經壓縮的 `poster` 圖片與點擊載入的影片。

正式網域確定後，設定 `site.canonical`，並產生包含實際發布項目絕對網址的 `sitemap.xml`、每頁 canonical 與絕對 OG 圖網址。現在刻意不提交錯誤網域的 sitemap。若要讓搜尋引擎索引每篇文章的獨立標題、OG 與內文，應在發布流程依內容資料預先產生靜態頁面；目前 `?id=` 詳情頁由瀏覽器渲染，動態標題不保證社群爬蟲讀取。

## 設計與狀態

暖紙色 `#f2efe8`、深綠 `#203a35`、淡黃綠 `#d8e386`；繁體中文以 Noto Serif TC 標題、Noto Sans TC 內文，英數使用 DM Sans。間距以 8px 為基礎、桌面 1320px 最大容器；卡片、導覽與按鈕在所有頁面共用。動態以進場和小幅位移為主，支援 `prefers-reduced-motion`。字體由 Google Fonts 載入，無網路時使用本機後備字體。

已確認的外部連結：@lazyunclek Threads、Instagram，來自 A001 原始碼。Facebook 粉專、合作聯絡方式、正式案例、文章原文、日期、成效、照片及網域均待設定。網站使用示範作品與文章來完整展示操作，不宣稱是已完成實績。互動研究目前為作品概念詳情，尚無實際模擬器。內容資料目前由 JavaScript 模組提供；未來串接 Supabase 時可替換資料來源及保留卡片模板。
