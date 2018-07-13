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
