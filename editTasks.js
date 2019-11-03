const showTask = function(taskIndex){
    if (taskIndex===-1){
        location.assign('index.html') //redirect to homepage
    }
    
    const aP=document.createElement('p')
    aP.id='edit-task-original'
    aP.innerHTML=`Original text: ${tasks[taskIndex]['text']}`
    
    const aTextArea=document.createElement('textarea')
    aTextArea.id='edit-task-text-area'
    aTextArea.placeholder='Edit task content ...'
    aTextArea.maxLength=50


    document.getElementById('edit-task-div').appendChild(aP)
    document.getElementById('edit-task-div').appendChild(aTextArea)
    document.getElementById('edit-task-div').appendChild(document.createElement('br'))

}