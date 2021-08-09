// Declare Variables 
const submitButton = document.querySelector('#submitBtn')
const todoContainer = document.querySelector('.todo')

const todoArray = []

// Displays todo items
const renderList = () => {
    let listItemDiv = document.createElement('div')
    let completeBtn = document.createElement('button')
    completeBtn.innerText = 'Completed'
    completeBtn.setAttribute('id', 'lists')

    todoArray.forEach((item) => {
        listItemDiv.innerText = item
        listItemDiv.className = 'todo-item'
        todoContainer.append(listItemDiv)
        listItemDiv.append(completeBtn)
    })

    completeBtn.onclick = () => {
        const completedDiv = document.querySelector('.completed')
        completedDiv.append(listItemDiv)
        listItemDiv.className = 'done-item'
        completeBtn.remove()
        
        const removeBtn = document.createElement('button')
        removeBtn.innerText = 'Remove'

        listItemDiv.append(removeBtn)
        removeBtn.onclick = () => {
            listItemDiv.remove()
        }
    }


}


submitButton.onclick = () => {
    const inputValue = document.querySelector('#input-box').value
    todoArray.push(inputValue)
    console.log(todoArray)
    renderList()
}