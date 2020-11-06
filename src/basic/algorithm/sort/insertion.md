# 插入排序

## 概念

有一个无序的数字数组, 依次取值, 与前面的值倒序循环比较, 大于(小于)当前值则交换, 结束后可以得到一个从小到大(从大到小)的数组

## 实现

```javascript
function insertionSort(arr) {
    let result = Array.from(arr)
    let preIndex, current;
    for (let i = 1; i < result.length; i ++) {
        preIndex = i - 1;
        current = result[i];
        while(preIndex >= 0 && result[preIndex] > current) {
            result[preIndex + 1] = result[preIndex];
            preIndex --;
        }
        result[preIndex + 1] = current;
    }
    return result;
}
```

## 复杂度

空间复杂度: O(1)

平均时间复杂度: O(n^2)

最好情况: O(n)

最坏情况: O(n^2)
