<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
        <!-- <button v-on:click="">delete</button> -->
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  // printf("love proud")
  created: function() {
    console.log('created')
    if(localStorage.length > 0) {
      for(var i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          console.log(JSON.parse(localStorage.getItem(localStorage.key(i))))
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
        // console.log(localStorage.key(i))
      }
    }
  },
  methods: {
    removeTodo: function(todoItem, index) {
      console.log(todoItem, index)
      localStorage.removeItem(todoItem)
      this.todoItems.splice(index, 1)
      console.log('removeTodo')
    },
    toggleComplete: function(todoItem, index) {
      console.log('toggleComplete')
      localStorage.getItem(todoItem)
      todoItem.completed = !todoItem.completed
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
      console.log(this.todoItems)
    }
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0px;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: red;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-left: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
</style>

