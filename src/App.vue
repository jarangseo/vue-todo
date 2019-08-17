<template>
<body>
  <div id="app">
    App
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItem"></TodoFooter>
  </div>
</body>
</template>
<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import TodoFooter from './components/TodoFooter'

export default {
  data() {
    return {
      todoItems: []
    }
  },
  components: {
    TodoHeader,
    TodoList,
    TodoInput,
    TodoFooter
  },
  methods: {
    addOneItem(toodItem) {
      const obj = {completed: false, item: toodItem}
      localStorage.setItem(toodItem, JSON.stringify(obj))
      this.todoItems.push(obj)
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item)
      this.todoItems.splice(index, 1)
    },
    toggleOneItem(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed
      console.log('toggleComplete')
      localStorage.getItem(todoItem)
      // todoItem.completed = !todoItem.completed
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
      console.log(this.todoItems)
    },
    clearAllItem() {
      localStorage.clear()
      this.todoItems = []
    }
  },
  created() {
    console.log('created')
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          console.log(JSON.parse(localStorage.getItem(localStorage.key(i))))
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
        // console.log(localStorage.key(i))
      }
    }
  }
}
</script>
<style scoped>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.0)
}
</style>


// import Vue from 'vue'

// var my_cmp = {
//   template: '<div>hello</div>'
// }

// // new Vue({
// //   el:'',
// //   components:{
// //     '컴포넌트이름':'컴포넌트내용'
// //   }
// // })

// new Vue({
//   el:'',
//   components:{
//     'my-cmp':my_cmp
//   }
// })