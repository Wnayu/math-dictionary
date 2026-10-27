---
title: "Kronecker 引理（Kronecker lemma）"
aliases: ["Kronecker 引理", "Kronecker lemma"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



Kronecker 引理把加权级数的收敛转化为归一化部分和趋于零，是从随机级数通向大数定律的确定性工具。[^1]

## 定理

设实数 $b_n>0$ 非降且 $b_n\to\infty$。若实数或复数级数 $\sum_{n\ge1}x_n/b_n$ 收敛，则
$$
\frac1{b_n}\sum_{k=1}^nx_k\longrightarrow0.
$$
这里不要求级数绝对收敛。

> [!proof]- 证明
> 记 $s_n=\sum_{k=1}^nx_k/b_k\to s$，$s_0=0$。分部求和给出
> $$
> \sum_{k=1}^nx_k=b_ns_n-\sum_{k=1}^{n-1}(b_{k+1}-b_k)s_k.
> $$
> 代入 $s_k=s+(s_k-s)$，除以 $b_n$ 后，常数部分为 $sb_1/b_n\to0$。给定 $\varepsilon>0$，取 $N$ 使 $|s_k-s|\le\varepsilon$ 对 $k\ge N$ 成立。有限前段除以 $b_n$ 趋于零，尾段满足
> $$
> \frac1{b_n}\sum_{k=N}^{n-1}(b_{k+1}-b_k)|s_k-s|\le\varepsilon.
> $$
> 再用 $s_n-s\to0$，最后令 $\varepsilon\downarrow0$。

## 在强大数定律中的用途

若 $X_n$ 独立、中心化，且 $\sum_n\operatorname{Var}(X_n)/n^2<\infty$，[Kolmogorov 极大不等式（Kolmogorov maximal inequality）](Kolmogorov-maximal-inequality.md)的级数推论给出 $\sum_nX_n/n$ 几乎必然收敛。对每条满足该结论的路径取 $b_n=n$，即得 $n^{-1}\sum_{k\le n}X_k\to0$ 几乎必然。

**注**：这是逐路径使用的确定性引理；可求和方差条件在前一个随机级数论证中使用，不能将它省略后仍宣称随机级数必然收敛。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Theorem 2.5.9；Exercise 2.5.4(i)。
