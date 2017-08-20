var Task = require('./task').default

export default class TaskList{
  constructor(name = 'default'){
    var source = TaskList.fetch(name)

    this.title = source.title || name
    this.tasks = []
    let tasks = source.tasks || []
    tasks.forEach((task) => {
      this.tasks.push(new Task(task))
    })
  }

  add(task){
    this.tasks.push(task)
  }

  save(){
    localStorage.setItem(TaskList.strage_key(this.title), JSON.stringify(this))
  }

  static strage_key(name){
    return 'vue-tutorial-' + name
  }

  static fetch(name = 'default'){
    return JSON.parse(localStorage.getItem(TaskList.strage_key(name)) || '{}')
  }
}
