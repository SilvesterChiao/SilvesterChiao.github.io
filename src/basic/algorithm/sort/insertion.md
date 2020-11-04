# 插入排序

## 概念

## 实现

```javascript
function insertionSort(arr) {
    let result = Array.from(arr)
    let len = result.length;
    let preIndex, current;
    for (let i = 1; i < len; i++) {
        preIndex = i - 1;
        current = result[i];
        while(preIndex >= 0 && result[preIndex] > current) {
            result[preIndex+1] = result[preIndex];
            preIndex--;
        }
        result[preIndex+1] = current;
    }
    return result;
}
```

## 复杂度