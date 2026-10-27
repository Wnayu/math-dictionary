---
title: "Chapman–Kolmogorov 方程（Chapman–Kolmogorov equations）"
aliases: ["Chapman–Kolmogorov 方程", "Chapman–Kolmogorov equations", "Chapman-Kolmogorov方程", "转移半群", "Transition semigroup"]
type: theorem
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



Chapman–Kolmogorov 方程把跨越两个时间段的转移分解为中间状态上的积分。[^D][^L]

## 定义及等价定义

时间齐次转移半群 $(P_t)_{t\ge0}$ 是同一可测空间上的[概率核（Probability kernel）](Transition-kernel.md)族，满足 $P_0(x,\cdot)=\delta_x$、$(t,x)\mapsto P_t(x,A)$ 对每个可测 $A$ 联合可测，以及
$$
P_{s+t}(x,A)=\int P_t(y,A)P_s(x,dy).
$$
相应算子写作 $P_tf(x)=\int f(y)P_t(x,dy)$，方程等价于 $P_{s+t}f=P_s(P_tf)$，对所有有界可测 $f$ 成立。在同一时间齐次半群内 $P_sP_t=P_tP_s$，但任意两个转移核不必交换。

## 从 Markov 性推出

对从每个状态 $x$ 出发的一族[Markov 过程（Markov process）](Markov-process.md)，记 $P_t(x,A)=P_x(X_t\in A)$，则满足上述方程。

> [!proof]- 证明
> 应用塔性质及 Markov 性，
> $$
> P_x(X_{s+t}\in A)
> =\mathbb E_x\bigl[P(X_{s+t}\in A\mid\mathcal F_s)\bigr]
> =\mathbb E_x[P_t(X_s,A)]
> =\int P_t(y,A)P_s(x,dy).
> $$
> 从指标函数推广到有界可测函数便得算子形式。

## 非齐次与离散时间版本

非齐次核 $P_{s,t}$ 的方程为 $P_{r,t}=P_{r,s}P_{s,t}$，$r\le s\le t$。可数状态链则为
$$
p^{m+n}(x,z)=\sum_y p^m(x,y)p^n(y,z).
$$
**注**：若只给定某一个初始分布下的过程，条件分布的版本可能只在该时刻状态分布的几乎处处意义下确定。要断言方程对每个 $x$ 成立，须有一致选定的转移族或把半群关系纳入定义。

[概率论导航](../概率论导航.md)

## 参考文献

[^D]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §5.2。

[^L]: Jean-François Le Gall, Brownian Motion, Martingales, and Stochastic Calculus, Graduate Texts in Mathematics 274, Springer, 2016. §6.1。
