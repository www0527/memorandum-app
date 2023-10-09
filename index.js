// 取得記事、日期、時間、新增與刪除按鈕、list
const content = document.getElementById("content")
const date = document.getElementById("date")
const time = document.getElementById("time")
const addedBtn = document.getElementById("addedBtn")
const deletdBtn = document.getElementById("deletdBtn")
const list = document.getElementById("list")

// 設定備忘錄新增時存放的陣列
const listContent = []

function render() {
    //設定空字串 
    let htmlStr = ''
    
    // 渲染頁面的list
    // listContent中有多少物件，就會跑幾次
    listContent.forEach(function (item) {
        // `` 模板語法，可以換行，也可以插入變數
        htmlStr = htmlStr + `
        <div class="item">
            <div>
                <p>內容：${item.content}</p>
                <p>時間：${item.date} ${item.time}</p>
            </div>
        </div>
        `
    })
    // 以.innerHTML覆蓋掉list裡的Element
    list.innerHTML = htmlStr
} 


// 新增事件處理：當新增按鈕被點擊時
addedBtn.addEventListener("click", function () {
    // 獲得記事、日期、時間的value，並push進物件的array中
    // 從前面推進去.unshift
    listContent.push({
        content : content.value,
        date : date.value,
        time : time.value
    })

    // 渲染頁面的list
    render()

})

// 刪除
deletdBtn.addEventListener("click", function () {
    // 從後面拉出來.pop
    // 從前面拉出來.shift
    listContent.pop()

    // 渲染頁面的list
    render()

})