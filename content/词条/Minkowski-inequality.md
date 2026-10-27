---
title: "Minkowski 不等式（Minkowski inequality）"
aliases: ["Minkowski inequality", "闵可夫斯基不等式"]
tags: [measure-theory]
type: theorem
draft: false
publish: true
status: needs-review
verified: false
---



Minkowski 不等式是 [Lp 范数（Lp norm）](Lp-space.md)的三角不等式，保证相加不会比两个函数分别的大小之和更大。[^1]

## 定理

对任意测度空间 $(X,\mathcal A,\mu)$、$1\le p\le\infty$ 和 $f,g\in L^p(\mu)$，所有范数均相对于 $\mu$，有
$$
\|f+g\|_p\le\|f\|_p+\|g\|_p.
$$

> [!proof]- 证明
> $p=1$ 由逐点三角不等式积分得到，$p=\infty$ 由本质上界得到。若 $1<p<\infty$，记 $a=\|f\|_p,b=\|g\|_p$；零范数情况直接处理。令 $F=f/a,G=g/b$，$\theta=b/(a+b)$。由 $z\mapsto|z|^p$ 的[凸性（convexity）](Convex-function.md)（把 $\mathbb C$ 看作实向量空间），
> $$
> \left|\frac{f+g}{a+b}\right|^p
> \le(1-\theta)|F|^p+\theta|G|^p.
> $$
> 积分得左端积分至多为 $1$，取 $p$ 次方根即得结论。

## 范数与拟范数

对 $0<p<1$，$\|\cdot\|_p$ 一般是[拟范数（quasi-norm）](Normed-space.md)，其放宽的三角估计具体为
$$
\|f+g\|_p^p\le\|f\|_p^p+\|g\|_p^p,
\qquad
\|f+g\|_p\le2^{1/p-1}(\|f\|_p+\|g\|_p).
$$

在两点[计数测度空间（Counting measure space）](Counting-measure.md)上用两个坐标记录函数的两个点值，取 $f=(1,0),g=(0,1)$，则 $\|f+g\|_p=2^{1/p}>2$，说明通常三角不等式失败。

**注**：常数 $2^{1/p-1}$ 是对所有测度空间统一的最优常数，不意味着每一个退化空间都需要这一常数。

此不等式还用于证明 [Lp 完备性（Completeness of Lp）](Lp-completeness.md)；另一证明可由 [Hölder 不等式（Hölder inequality）](Holder-inequality.md)获得。

## 参考文献

[^1]: Chen Wang，*Notes on Real Analysis*，个人笔记，Lemma 2.4(iii)；式 (2.4)–(2.5)；Exercise 2.5(i)、(iii)；第45页。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
