---
title: "Kolmogorov 极大不等式（Kolmogorov maximal inequality）"
aliases: ["Kolmogorov 极大不等式", "Kolmogorov maximal inequality"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



Kolmogorov 极大不等式控制独立中心化部分和在整个有限时间区间内越过阈值的概率，而不只控制终点。[^1]

## 定理

设 $X_1,\ldots,X_n$ 相互[独立（Independent）](Independence.md)，$\mathbb EX_j=0$，$\mathbb EX_j^2<\infty$。记 $S_k=\sum_{j=1}^kX_j$，则对 $\lambda>0$，
$$
P\!\left(\max_{1\le k\le n}|S_k|\ge\lambda\right)
\le\frac{\mathbb ES_n^2}{\lambda^2}
=\frac{\sum_{j=1}^n\operatorname{Var}(X_j)}{\lambda^2}.
$$

> [!proof]- 证明
> 令 $A_k=\{|S_k|\ge\lambda,\ |S_j|<\lambda\ (j<k)\}$。这些事件两两不交，且并为越界事件。$S_k1_{A_k}$ 仅依赖 $X_1,\ldots,X_k$，与中心化的 $S_n-S_k$ 独立，因而交叉项期望为零。于是
> $$
> \begin{aligned}
> \mathbb ES_n^2
> &\ge\sum_{k=1}^n\mathbb E[S_n^21_{A_k}]\\
> &=\sum_{k=1}^n\mathbb E[(S_k^2+(S_n-S_k)^2)1_{A_k}]\\
> &\ge\lambda^2\sum_{k=1}^nP(A_k).
> \end{aligned}
> $$
> 除以 $\lambda^2$ 即得结论。

## 方差可求和与随机级数

若独立中心化的无限序列满足 $\sum_j\operatorname{Var}(X_j)<\infty$，则 $\sum_jX_j$ 几乎必然收敛。事实上，对 $S_n$ 的尾部应用不等式，再令终点趋于无穷，得到
$$
P\!\left(\sup_{n\ge m}|S_n-S_m|>\varepsilon\right)
\le\varepsilon^{-2}\sum_{j>m}\operatorname{Var}(X_j)\to0.
$$
令 $W_m=\sup_{p,q\ge m}|S_p-S_q|$，则 $W_m$ 递减，且 $P(W_m>2\varepsilon)\to0$。对有理 $\varepsilon>0$ 取可数交，得几乎每条路径为 Cauchy 序列。

这种尾部控制是[三列级数定理（Kolmogorov three-series theorem）](Kolmogorov-three-series-theorem.md)及[强大数定律（Strong law of large numbers）](Strong-law-of-large-numbers.md)的重要工具。一般鞅的相应估计见[Doob 极大不等式（Doob maximal inequality）](Doob-maximal-inequality.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Theorems 2.5.5–2.5.6。
