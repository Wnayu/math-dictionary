---
title: "零一律（Zero-one laws）"
aliases: ["零一律", "Zero-one laws", "尾σ代数", "Tail sigma-algebra", "Hewitt–Savage零一律"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



零一律断言某类事件的概率只能是 $0$ 或 $1$；必须说明是哪一种事件类和哪一种独立性假设。[^1]

## Kolmogorov 零一律

设 $X_1,X_2,\ldots$ 相互独立。尾 $\sigma$-代数（tail sigma-algebra）定义为
$$
\mathcal T=\bigcap_{n\ge1}\sigma(X_n,X_{n+1},\ldots).
$$
每个 $A\in\mathcal T$ 都满足 $P(A)\in\{0,1\}$。记号 $\sigma(X_n,X_{n+1},\ldots)$ 表示使这些变量可测的最小[生成 $\sigma$-代数（Generated sigma-algebra）](Generated-sigma-algebra.md)。

> [!proof]- 证明
> 对每个 $m$，$A$ 属于 $\sigma(X_{m+1},X_{m+2},\ldots)$，故与 $\sigma(X_1,\ldots,X_m)$ 独立。所有有限坐标事件组成生成整个 $\sigma(X_1,X_2,\ldots)$ 的 $\pi$-系统；由 $\pi$–$\lambda$ 定理，把这种独立性扩展到整个 $\sigma$-代数。由于 $A$ 本身也属于这个 $\sigma$-代数，$A$ 与自身独立，于是 $P(A)=P(A)^2$。

## Hewitt–Savage 零一律

若 $X_n$ 独立同分布，则任何在有限坐标置换下不变的可测事件，其概率为 $0$ 或 $1$。准确地说，在序列的乘积空间上，有限置换 $\pi$ 只移动有限多个正整数；若 $A$ 对每个这样的置换满足 $\pi^{-1}A=A$，则结论成立。这类事件构成可交换 $\sigma$-代数（exchangeable sigma-algebra）。

> [!proof]- 证明
> 取仅依赖前 $n$ 个坐标的事件 $A_n$，使 $P(A_n\triangle A)\to0$。其存在性来自有限坐标柱集生成整个乘积 $\sigma$-代数以及测度近似。把前 $n$ 个坐标与随后 $n$ 个坐标互换，得到 $A'_n$。同分布及 $A$ 的置换不变性给出 $P(A'_n\triangle A)=P(A_n\triangle A)\to0$。而 $A_n,A'_n$ 独立，故
> $$
> P(A_n\cap A'_n)=P(A_n)P(A'_n)\to P(A)^2.
> $$
> 同时 $(A_n\cap A'_n)\triangle A\subseteq(A_n\triangle A)\cup(A'_n\triangle A)$，左侧概率趋零，因此 $P(A)=P(A)^2$。

## 尾事件与置换不变事件

$\{\sum_nX_n\text{ 收敛}\}$ 是尾事件：改动有限项不会改变级数是否收敛。若 $S_n=\sum_{k\le n}X_k$，则 $\{S_n>0\text{ 无限多次}\}$ 在有限置换下不变，但一般不是尾事件，因为改动有限项可能把所有后续部分和整体平移。两个定理的事件类不同；不能只说“由零一律”而不指明适用版本。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §2.5，Theorems 2.5.3–2.5.4。
