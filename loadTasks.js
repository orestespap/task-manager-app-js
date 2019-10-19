const loadTasks = function(){

    const tasksArray= JSON.parse((localStorage.getItem('userData')))

    if (tasksArray!=null){
        return tasksArray
    }
    return []
}