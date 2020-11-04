# 冒泡排序(Bubble Sort)

## 概念

有一个无序的数字数组, 依次取相邻的两个元素比较大小, 并且按照一致的大小顺序进行交换, 全部执行完毕时会得到一个从大到小或者从小到大的有序数组

## 实现

```javascript
function bubbleSort(arr) {
    let result = Array.from(arr);
    let len = result.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (result[j] > result[j+1]) {
                let temp = result[j+1];
                result[j+1] = result[j];
                result[j] = temp;
            }
        }
    }
    return result;
}
```

## 复杂度

空间复杂度: O(1)

时间复杂度: O(n^2)
