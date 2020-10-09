<template>
  <div>
    <h3>哈希表</h3>
  </div>
</template>

<script>
class HashTable {
  constructor () {
    this.storage = [] // 数组存储元素
    this.count = 0
    this.limit = 8
  }

  // 哈希函数
  hashFunc (str, max) {
    // 1. 定义 hashCode
    let hashCode = 0

    // 2. 霍纳算法
    for (let i =0; i < str.length; i ++ ){
      hashCode = 31 * hashCode + str.charCodeAt(i);
    }

    hashCode = hashCode % max
    
    return hashCode
  }

  // 放入/修改元素
  put (key, value) {
    // 1. 根据 key 映射到 index
    const index = this.hashFunc(key, this.limit)

    // 2. 取出数组
    let bucket = this.storage[index]
    if (bucket === undefined) {
      bucket = []
      this.storage[index] = bucket
    }

    // 3. 判断是插入还是修改操作
    let overide = false
    for (let i = 0; i < bucket.length; i ++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        tuple[1] = value;
        overide = true
      }
    }

    // 4. 如果没有覆盖
    if (!overide) {
      bucket.push([key, value])
      this.count ++
    }
  }

  // 根据 key 获取 value
  get (key) {
    // 1. 根据 key 获取 index
    const index = this.hashFunc(key, this.limit)

    // 2. 获取 bucket
    const bucket = this.storage[index];
    if (bucket) {
      // 3. 遍历 bucket
      for(let i = 0; i < bucket.length; i ++) {
        let tuple = bucket[i]
        if (tuple[0] === key) {
          return tuple[1]
        } else {
          return null
        }
      }
    } else {
      return null
    }
  }

  // 根据 key 删除元素
  remove (key) {
    // 1. key 获取 index
    const index = this.hashFunc(key, this.limit)

    // 2. 获取 bucket
    const bucket = this.storage[index]
    if (bucket) {
      // 3. 遍历 bucket, 找到元素, 并且将删除的元素返回
      for (let i = 0; i < bucket.length; i ++) {
        let tuple = bucket[i]
        if (tuple[0] === key) {
          bucket.splice(i, 1)
          this.count --
          return tuple[1]
        } else {
          return null
        }
      }
    } else {
      return null
    }
  }

  isEmpty () {
    return this.count === 0
  }

  size () {
    return this.count
  }
}

const hashTable = new HashTable()
hashTable.put('name', 'Melenela')
hashTable.put('age', '25')
hashTable.put('height', '172')
hashTable.put('address', 'Esdf')
console.log(hashTable)
console.log(hashTable.get('weight'))
console.log(hashTable.get('name'))
console.log(hashTable.get('age'))
console.log(hashTable.remove('name'))
console.log(hashTable.remove('age'))
console.log(hashTable)
export default {

}
</script>

<style>

</style>