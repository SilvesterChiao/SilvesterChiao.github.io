<template>
  <div>
    <h3>链表</h3>
  </div>
</template>

<script>
class Node {
  constructor (element) {
    // 数据
    this.element = element
    // 指向下一个节点
    this.next = null
  }
}
class LinkedList {
  constructor () {
    this.head = null;
    this.length = 0
  }

  // 向链表尾部添加一个新的项
  append (element) {
    // 1. 根据 element 创建 Node 对象
    const newNode = new Node(element)

    // 2. 追加到最后
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next
      }

      current.next = newNode
    }

    this.length ++
  }

  // 向列表的特定位置插入一个新的项
  insert (position, element) {
    // 1. 判断越界问题
    if (position < 0 || position > this.length) {
      return false
    }

    // 2. 创建新的节点
    const newNode = new Node(element)

    // 3. 插入元素
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode
    } else {
      let index = 0
      let previous = null
      let current = this.head
      while (index ++ < position) {
        previous = current
        current = current.next
      }

      previous.next = newNode
      newNode.next = current
    }

    this.length ++;

    return true
  }

  // 获取对应位置的元素
  get (position) {
    // 1. 判断越界问题
    if (position < 0 || position > this.length - 1) {
      return null
    }

    // 2. 查找该位置的元素
    let index = 0
    let current = this.head
    while (index ++ < position) {
      current = current.next
    }

    return current.element
  }

  // 返回元素在链表中的索引。如果链表中没有该元素则返回 -1
  indexOf (element) {
    // 1. 获取第一个元素
    let current = this.head
    let index = 0

    // 2. 开始查找
    while (current) {
      if (current.element === element) {
        return index 
      }
      index ++
      current = current.next
    }

    return -1
  }

  // 修改某个位置的元素
  update (position, element) {
    // 1. 删除 position 位置的元素
    const result = this.removeAt(position)

    // 2. 插入 position 位置 element 元素
    this.insert(position, element)

    return result
  }

  // 从列表的特定位置移除一项
  removeAt (position) {
    // 1. 判断越界问题
    if (position < 0 || position > this.length - 1) {
      return null
    }

    // 2. 删除元素
    let previous = null
    let current = this.head
    let index = 0
    if (position === 0) {
      this.head = current.next
    } else {
      while (index ++ < this.length) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }

    this.length --

    return current.element
  }

  // 从列表中移除一项
  remove (element) {
    // 1. 获取元素的位置
    const index = this.indexOf(element)
    if (index === -1) {
      return
    }

    // 2. 删除该元素
    this.removeAt(index)
  }

  // 如果链表中不包含任何元素, 返回 true; 如果链表长度大于0, 则返回 false
  isEmpty () {
    return this.length === 0
  }

  // 返回链表包含的元素个数。 与数组的 length 属性类似
  size () {
    return this.length
  }
}

const linkedList = new LinkedList()
linkedList.append('Elimy')
linkedList.append('Lucify')
linkedList.append('Nancy')
linkedList.insert(1, 'Demo')
console.log(linkedList)
console.log(linkedList.get(2))
export default {

}
</script>

<style>

</style>