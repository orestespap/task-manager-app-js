//DOM

const tasks= loadTasks()

console.log('todo.js script file')

let htClicked=1

const getIncompleteTasks= function(){
    return tasks.filter(function(aTask){return !aTask['completed']})
}

const findItemIndex= function(removedItem){
    return tasks.findIndex(function(aTask){
        return aTask.text.toLowerCase()===removedItem.text.toLowerCase()
    })
}

const showTasks= function(tasks){
    document.querySelector('#notes').innerHTML=''
   
    const header=createHeader2(`You have ${tasks.length} task(s)!`)
    document.querySelector('#notes').appendChild(header)
    
    if (tasks.length>0){
        tasks.forEach(function(aTask){ 
            const index= tasks.findIndex(function(element,index,array){
                return element.text==aTask.text
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