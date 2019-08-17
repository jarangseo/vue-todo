const addOneItem = (state, todoItem) => {
  const obj = {completed: false, item: todoItem}
  localStorage.setItem(todoItem, JSON.stringify(obj))
  state.todoItems.push(obj)
  console.log(this)
}
const removeOneItem = (state, {todoItem, index}) => {
  localStorage.removeItem(todoItem.item)
  state.todoItems.splice(index, 1)
}
const toggleOneItem = (state, {todoItem, index}) => {
  console.log(todoItem, index)
  state.todoItems[index].completed = !state.todoItems[index].completed
  console.log('toggleComplete')
  localStorage.getItem(todoItem)
  // todoItem.completed = !todoItem.completed
  localStorage.removeItem(todoItem.item)
  localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
  console.log(state.todoItems)
}

const clearAllItem = (state) => {
  localStorage.clear()
  state.todoItems = []
}

export {
  addOneItem,
  removeOneItem,
  toggleOneItem,
  clearAllItem
}