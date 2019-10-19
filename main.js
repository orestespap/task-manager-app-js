//DOM

const tasks= loadTasks()

console.log('todo.js script file')

let htClicked=1

const getIncompleteTasks= function(){
    return tasks.filter(function(aTask){return !aTask['completed']})
}

const findItemIndex= function(removedItem){
    return tasks.findIndex(function(aTask){
        return aTask.taskID===removedItem
    })
}

const showTasks= function(tasks){
    document.querySelector('#notes').innerHTML=''
    const allTasksChecked=document.getElementById('all-tasks').checked
    const completedTasksChecked=document.getElementById('completed-tasks').checked
    console.log(allTasksChecked)
    let textToDisplay=''
    const tasksArraySize=tasks.length

    if (tasksArraySize===1){
        if (allTasksChecked || completedTasksChecked){
            textToDisplay="1 task!"
        }
        else{
            textToDisplay=`Just 1 task left!`
        }
    }
    else if (tasksArraySize<=3){
        if (allTasksChecked || completedTasksChecked){
            textToDisplay= `${tasksArraySize} tasks!`
        }
        else{
            textToDisplay=`Almost there! Just ${tasksArraySize} tasks to go!`
        }
    }
    else{
        if (allTasksChecked || completedTasksChecked){
            textToDisplay= `${tasksArraySize} tasks!`
        }
        else{
            textToDisplay=`${tasksArraySize} tasks to go!`
        }
    }
    
    const header=createHeader2(textToDisplay)
    document.querySelector('#notes').appendChild(header)
    
    if (tasksArraySize>0){
        tasks.forEach(function(aTask){ 
            const index= tasks.findIndex(function(element,index,array){
                return element.taskID==aTask.taskID
                })  
                generateTaskDOM(index,aTask)
            })
        }
    else{
        let aP= document.createElement('p')
        aP.innerHTML='No available tasks:('
        aP.className='note-class'
        document.querySelector('#notes').appendChild(aP)
    }
}

const hideTasks= function(){
    document.querySelector('#notes').innerHTML=''
    const header= createHeader2(`No tasks!`)
    document.querySelector('#notes').appendChild(header)
}

showTasks(getIncompleteTasks())