let btn = document.querySelector('#addBtn')
let ul = document.querySelector('#list')
let inp = document.querySelector('#taskInput')
if(localStorage.getItem('lsitem')){
    ul.innerHTML = localStorage.getItem('lsitem')
}
btn.addEventListener('click', function(){
    let li = document.createElement('li')
    li.classList.add('item')
    if(inp.value === ''){
            console.log('Пусто')
    }else{
        li.textContent = inp.value
        let item = document.createElement('div')
        item.classList.add('item__btns')
        let chkBtn = document.createElement('button')
        chkBtn.className = 'fa-regular fa-square-check'
        item.append(chkBtn)
        let rmvBtn = document.createElement('button')
        rmvBtn.classList.add('fa-solid')
        rmvBtn.classList.add('fa-trash-can')
        item.append(rmvBtn)
        ul.append(li)
        li.append(item)
        }
        localStorage.setItem('lsitem', ul.innerHTML)
})
{
}
ul.addEventListener('click', function(e){
    let trg = e.target
    if(trg.classList.contains('fa-trash-can') == true){
        trg.closest('li').remove()
        localStorage.setItem('lsitem', ul.innerHTML)
    }
    if(trg.classList.contains('fa-square-check') == true){
        trg.closest('li').classList.toggle('done')
        localStorage.setItem('lsitem', ul.innerHTML)
    }
})

function checkButton(){
    chkBtn.addEventListener('click', function(){
        li.classList.toggle('done')
    })
}
