let task = document.querySelector('.task')
let taskbutton = document.querySelector('.taskbutton')
let list = document.querySelector('.list')
let taskArr = [];

taskbutton.addEventListener('click', function(){
    taskArr.push(task.value)
    addTodo()
})

function addTodo(){
    list.innerHTML = ''
    taskArr.map((item)=>{
        
        list.innerHTML += `<li>${item} <button class="deleteBtn">Delete</button> </li>`
        task.value = ''
        let remove = document.querySelectorAll('.deleteBtn')
        let removeArr = Array.from(remove)
        removeArr.map((item, index)=>{
            item.addEventListener('click', function(){
                taskArr.splice(index, 1)
                addTodo()
            })
        })

    })
}





