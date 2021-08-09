// Declare Variables 
const submitButton = document.querySelector('#submitBtn')
const todoContainer = document.querySelector('.todo')
const completedDiv = document.querySelector('.completed')

// Create Elements
const removeBtn = document.createElement('button')
let listItemDiv = document.createElement('div')
let completeBtn = document.createElement('button')

const todoArray = []

// Displays todo items
const renderList = () => {
    // Creates 'completed' Button
    completeBtn.innerText = 'Completed'
    completeBtn.setAttribute('id', 'lists')

    // Assigns the value and class name for each item in the todoArray
    todoArray.forEach((item) => {
        listItemDiv.innerText = item
        listItemDiv.className = 'todo-item'
        todoContainer.append(listItemDiv)
        listItemDiv.append(completeBtn)
    })
    // Moves list item to the completed div and creates a remove button
    completeBtn.onclick = () => {
        completedDiv.append(listItemDiv)
        listItemDiv.className = 'done-item'
        completeBtn.remove()
    
        removeBtn.innerText = 'Remove'
        listItemDiv.append(removeBtn)
        removeBtn.onclick = () => {
        listItemDiv.remove()
        }
    }
}

// Puts the input value into an array and runs the renderList function
submitButton.onclick = () => {
    const inputValue = document.querySelector('#input-box').value
    todoArray.push(inputValue)
    console.log(todoArray)
    renderList()
}