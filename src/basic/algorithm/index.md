# 算法

斐波那契数列

辗转相除法/欧几里得算法(Euclidean algorithm)

更相减损术

```javascript
function gcd(p, q) {
    if (q === 0) {
        return p
    }

    var r = p % q
    return gcd(q, r)
}
```

排列组合, 穷举法(暴力穷举)

递归

迭代

## 五大常用算法

- [分治](./divide-and-conquer.md)
- [动态规划](./dynamic-programming.md)
- [贪心](./greedy.md)
- [回溯](./back-tracking.md)
- [分支界定](./branch-and-bound.md)

## 排序算法

稳定性：排序后 2 个相等键值的顺序和排序之前它们的顺序相同

稳定的排序算法：冒泡排序、插入排序、归并排序、计数排序、基数排序、桶排序

不是稳定的排序算法：选择排序、快速排序、希尔排序、堆排序

1. [冒泡排序](./sort/bubble.md)
1. [选择排序](./sort/selection.md)
1. [插入排序](./sort/insertion.md)
1. [快速排序](./sort/quick.md)
1. [希尔排序](./sort/shell.md)
1. [归并排序](./sort/merge.md)
1. [堆排序](./sort/heap.md)
1. [基数排序](./sort/radix.md)
1. [计数排序](./sort/counting.md)
1. [桶排序](./sort/bucket.md)

## 查找算法

1. [顺序查找](./search/sequence.md)
1. [二分查找](./search/binary.md)
1. [插值查找](./search/insertion.md)
1. [斐波那契查找](./search/fibonacci.md)
1. [树表查找](./search/tree.md)
1. [分块查找](./search/block.md)
1. [哈希查找](./search/hash.md)

## 参考文档

1. [五分钟学算法](https://www.cxyxiaowu.com/)
1. [程序员必须掌握哪些算法？](https://www.zhihu.com/question/23148377)
1. [算法从入门到“放弃”（1）- 什么是算法？](https://zhuanlan.zhihu.com/p/40151536)
1. [常见数据结构与算法整理总结（下）](https://www.jianshu.com/p/42f81846c0fb)
1. [【搞定算法】常见算法题分类总览](https://blog.csdn.net/pcwl1206/article/details/97390314)
1. [「递归」和「迭代」有哪些区别？](https://www.zhihu.com/question/20278387)
1. [为什么你学不会递归？告别递归，谈谈我的一些经验](https://www.cnblogs.com/kubidemanong/p/10538799.html)
1. [1.0 十大经典排序算法](https://www.runoob.com/w3cnote/ten-sorting-algorithm.html)
1. [十大经典排序算法（动图演示）](https://www.cnblogs.com/onepixel/articles/7674659.html)
1. [常用查找算法](http://codingxiaxw.cn/2017/01/14/66-leetcode-find/)
1. [[Data Structure & Algorithm] 七大查找算法](https://www.cnblogs.com/maybe2030/p/4715035.html)
1. [算法精解：约瑟夫（Josephus）问题](https://zhuanlan.zhihu.com/p/35487124)
1. [约瑟夫问题](https://zh.wikipedia.org/wiki/%E7%BA%A6%E7%91%9F%E5%A4%AB%E6%96%AF%E9%97%AE%E9%A2%98)
1. [约瑟夫环——公式法（递推公式）](https://blog.csdn.net/u011500062/article/details/72855826)
