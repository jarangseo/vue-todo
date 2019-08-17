import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storage = {
  fetch() {
    const arr = []
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          console.log(JSON.parse(localStorage.getItem(localStorage.key(i))))
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
        // console.log(localStorage.key(i))
      }
    }
    return arr
  }
}

export const store = new Vuex.Store({
  state: {
    headerText: 'TODOTODO it!',
    todoItems: storage.fetch()
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = {completed: false, item: todoItem}
      localStorage.setItem(todoItem, JSON.stringify(obj))
      state.todoItems.push(obj)
      console.log(this)
    },
    removeOneItem(state, {todoItem, index}) {
      localStorage.removeItem(todoItem.item)
      state.todoItems.splice(index, 1)
    },
    toggleOneItem(state, {todoItem, index}) {
      console.log(todoItem, index)
      state.todoItems[index].completed = !state.todoItems[index].completed
      console.log('toggleComplete')
      localStorage.getItem(todoItem)
      // todoItem.completed = !todoItem.completed
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
      console.log(state.todoItems)
    },
    clearAllItem(state) {
      localStorage.clear()
      state.todoItems = []
    }
  }
})