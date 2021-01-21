var sendBtn = document.getElementById('send-btn');
var sendText = document.getElementById('send-text');
sendText.onkeydown = function(e) {
    if(this.value != '' && e.keyCode === 13) {
        renderDom('mine', this.value)
        ajax({
            url: 'https://developer.duyiedu.com/edu/turing/chat',
            method: 'get',
            data: {
                text: this.value,
            },
            success: (e) =>{
                renderDom('robot', e.text);
            }
        })
        this.value = '';
    }
}
sendBtn.onclick = function(e) {
    console.log(this.Siblings());
}

/**
 * 渲染对话内容
 * @param {String} who 谁说的话mine / robot
 * @param {String} text 说话的内容
 */
function renderDom(who, text){
    // 当前对话框的class类名
    var divClass = who;
    // 当前对话框的头像
    var avatorImg = '';
    if(who === 'mine') {
        // divClass += ' clearfixe'
        avatorImg = './mine.jpg';
    } else {
        avatorImg = './robot.jpg';
    }
    var oDiv = document.createElement('div');
    oDiv.className = divClass;
    oDiv.innerHTML = `
        <img class="avator" src=${avatorImg} alt="">
        <p class="text">${text}</p>
    `
    var content = document.querySelector('.content');
    content.appendChild(oDiv);
    content.scrollTop = content.scrollHeight - content.offsetHeight;
}   