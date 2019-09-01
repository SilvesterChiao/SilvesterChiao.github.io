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

<h2 id="sort">排序算法</h2>

### 冒泡排序

### 快速排序

### 选择排序

### 插入排序

### 希尔排序

### 归并排序

### 堆排序

### 基数排序
