const createHeader2= function(text){
    const header= document.createElement('h2')
    header.id='header2-1'
    header.textContent=text
    return header
}

const generateTaskDOM= function(index,aTask){
    let aP= document.createElement('p')
    aP.innerHTML=`${index+1}.) ${aTask['text']}`
    aP.className='note-class'
    aP.id=index+1
    document.querySelector('#notes').appendChild(aP)
    if (!aTask['completed']){
        const checkbox= document.createElement('input')
        checkbox.type='checkbox'
        checkbox.id=`${aTask.text}`
        checkbox.className='task-completed'
        document.getElementById(index+1).appendChild(checkbox)
    }
    
}
