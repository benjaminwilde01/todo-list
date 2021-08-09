// Declare Variables 
const submitButton = document.querySelector('#submitBtn')
const todoContainer = document.querySelector('.todo')

const todoArray = []

// Displays todo items
const renderList = () => {
    let listItemDiv = document.createElement('div')
    let createBtn = document.createElement('button')
    createBtn.innerText = 'Completed'
    createBtn.setAttribute('id', 'lists')

    todoArray.forEach((item) => {
        listItemDiv.innerText = item
        listItemDiv.className = 'todo-item'
        todoContainer.append(listItemDiv)
        listItemDiv.append(createBtn)
    })
}
