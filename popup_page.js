
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    item = url.split("&sid")
    if(item.length == 2 && item[0] == "http://survey.ncut.edu.tw/index.php?r=survey/index") {
        btn_good   = document.createElement('button');
        btn_not_bad= document.createElement('button');
        btn_normal = document.createElement('button');
        btn_bad    = document.createElement('button');
        btn_suck   = document.createElement('button');
        btn_submit = document.createElement('button');

        btn_good   .textContent = "很好";
        btn_not_bad.textContent = "不錯";
        btn_normal .textContent = "普通";
        btn_bad    .textContent = "爛";
        btn_suck   .textContent = "完蛋了";
        btn_submit .textContent = "送出";

        btn_suck   .style = "background-color:#880000;color:#FFFFFF";
        btn_submit .style = "float:right";
        
        btn_good.addEventListener('click', () => {chrome.tabs.executeScript({ file : 'good.js'})});
        btn_not_bad.addEventListener('click', () => {chrome.tabs.executeScript({ file : 'not_bad.js'})});
        btn_normal.addEventListener('click', () => {chrome.tabs.executeScript({ file : 'normal.js'})});
        btn_bad.addEventListener('click', () => {chrome.tabs.executeScript({ file : 'bad.js'})});
        btn_suck.addEventListener('click', () => {chrome.tabs.executeScript({ file : 'suck.js'})});
        btn_submit.addEventListener('click', () => {chrome.tabs.executeScript({ file : 'submit.js'})});
        
        document.body.appendChild(btn_good);
        document.body.appendChild(btn_not_bad);
        document.body.appendChild(btn_normal);
        document.body.appendChild(btn_bad);
        document.body.appendChild(btn_suck);
        document.body.appendChild(btn_submit);
    }
});


