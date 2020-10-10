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
1. [算法精解：约瑟夫（Josephus）问题](https://zhuanlan.zhihu.com/p/35487124)
1. [算法从入门到“放弃”（1）- 什么是算法？](https://zhuanlan.zhihu.com/p/40151536)
1. [约瑟夫问题](https://zh.wikipedia.org/wiki/%E7%BA%A6%E7%91%9F%E5%A4%AB%E6%96%AF%E9%97%AE%E9%A2%98)
1. [约瑟夫环——公式法（递推公式）](https://blog.csdn.net/u011500062/article/details/72855826)
1. [五分钟学算法](https://www.cxyxiaowu.com/)
1. [程序员必须掌握哪些算法？](https://www.zhihu.com/question/23148377)
1. [常见数据结构与算法整理总结（下）](https://www.jianshu.com/p/42f81846c0fb)
1. [【搞定算法】常见算法题分类总览](https://blog.csdn.net/pcwl1206/article/details/97390314)
