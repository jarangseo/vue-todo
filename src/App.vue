<template>
<body>
  <div id="app">
    App
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</body>
</template>
<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import TodoFooter from './components/TodoFooter'
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

export default {
  components: {
    'TodoHeader':TodoHeader,
    'TodoList':TodoList,
    'TodoInput':TodoInput,
    'TodoFooter':TodoFooter
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