# 算法

欧几里得算法(辗转相除法)

```javascript
function gcd(p, q) {
    if (q === 0) {
        return p
    }

    var r = p % q
    return gcd(q, r)
}
```

## 五大常用算法

### 分治

### 动态规划

### 贪心

### 回溯

### 分支界定

## 排序算法

### 冒泡排序

### 快速排序

### 选择排序

### 插入排序

### 希尔排序

### 归并排序

### 堆排序

### 基数排序

### 计数排序

### 桶排序

## 查找算法

### 顺序查找

### 二分查找

### 插值查找

### 斐波那契查找

### 数表查找

### 分块查找

### 哈希查找

## 参考文档

1. [1.0 十大经典排序算法](https://www.runoob.com/w3cnote/ten-sorting-algorithm.html)
1. [[Data Structure & Algorithm] 七大查找算法](https://www.cnblogs.com/maybe2030/p/4715035.html)
