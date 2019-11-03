const aTaskID=location.hash.split('#')[1]
const taskIndex=findItemIndex(aTaskID)
showTask(taskIndex)

document.getElementById('save-edited-text').addEventListener('click',function(e){
    console.log(1)
    const newTaskContent=document.getElementById('edit-task-text-area').value

    if (newTaskContent){
        tasks[taskIndex]['text']=newTaskContent
        localStorage.setItem('userData',JSON.stringify(tasks))
        location.assign('index.html')
    }
    else{
        alert('Type in something first :)')
    }
})

window.addEventListener('storage',function(e){
    tasks=JSON.parse(e.newValue)
    document.getElementById('edit-task-div').innerHTML=''
    showTask(taskIndex)
})