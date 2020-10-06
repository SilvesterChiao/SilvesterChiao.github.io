<template>
  <div>
    <h3>栈</h3>
    <ul>
      <li v-for="value in data">{{value}}</li>
    </ul>
  </div>
</template>

<script>
class Stack {
  constructor () {
    this.data = []
  }

  get length () {
    return this.data.length
  }

  set length (value) {
    console.error(new Error('不能设置栈的 length'))
  }

  push (element) {
    this.data.push(element)
  }

  pop () {
    if (this.data.length !== 0) {
      return this.data.pop;
    }
    return new Error('栈为空')
  }

  peek () {
    if (this.data.length !== 0) {
      return this.data[this.data.length - 1]
    }
    return new Error('栈为空')
  }

  isEmpty () {
    return this.data.length === 0
  }
}
const data = new Stack()
data.push(1)
data.push(2)
console.log(data.peek())
console.log(data.isEmpty())
console.log(data.length)

export default {
  data () {
    return {
      data: data.data
    }
  }
}
</script>

<style>

</style>