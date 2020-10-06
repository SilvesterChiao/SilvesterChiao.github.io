<template>
  <div>
    <h3>队列(Queue)</h3>

  </div>
</template>

<script>
class Queue {
  constructor() {
    this.data = []
  }

  get length () {
    return this.data.length
  }

  set length (value) {
    console.error(new Error('不能设置队列的 length'))
  }

  enqueue(element) {
    this.data.push(element)
  }

  dequeue() {
    return this.data.shift()
  }

  front() {
    if (this.isEmpty()) {
      return new Error('队列为空')
    }

    return this.data[0]
  }

  isEmpty () {
    return this.data.length === 0
  }
}

const queue = new Queue()
queue.enqueue(1)
console.log(queue.isEmpty())
console.log(queue.front())
export default {

}
</script>

<style>

</style>