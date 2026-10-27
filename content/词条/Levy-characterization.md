---
title: "Lévy 的 Brownian 运动刻画（Lévy characterization of Brownian motion）"
aliases:
  - "Lévy 的 Brownian 运动刻画"
  - "Lévy characterization of Brownian motion"
  - "Lévy characterization"
type: theorem
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



Lévy 刻画从局部鞅性质与二次协变差出发识别 Brownian 运动，不必预先分别证明 Gaussian 增量和独立增量。

## 陈述

设 $X=(X^1,\ldots,X^d)$ 连续适应、$X_0=0$。则 $X$ 是相对于给定滤过的标准 $d$ 维 [Brownian 运动（Brownian motion）](Brownian-motion.md)，当且仅当各 $X^i$ 是连续局部鞅，并且
$$
[X^i,X^j]_t=\delta_{ij}t.
$$
$\delta_{ij}$ 是 Kronecker 符号，$i=j$ 时为 $1$，否则为 $0$。[^1]

> [!proof]- 证明
> Brownian 增量独立及二阶矩给出必要性。反过来，对任意 $u\in\mathbb R^d$，$u\cdot X$ 的二次变差为 $|u|^2t$。由 Itô 公式，
> $$
> Z_t=\exp(iu\cdot X_t+\tfrac12|u|^2t)
> $$
> 是复局部鞅；在任意有限时间区间上其模有确定上界，因此是真鞅。于是
> $$
> E[e^{iu\cdot(X_t-X_s)}\mid\mathcal F_s]=e^{-|u|^2(t-s)/2}.
> $$
> 右边是 $N(0,(t-s)I_d)$ 的[特征函数（characteristic function）](Characteristic-function.md)，且不依赖过去。将等式乘 $\mathbf1_A$，$A\in\mathcal F_s$，取期望，再用特征函数唯一性，得到 $X_t-X_s$ 具有该 Gaussian 分布且独立于 $\mathcal F_s$。递归应用得到所有不交区间增量独立，结合连续性即为 Brownian 运动。

## 一维形式与限制

一维时，“$X$ 和 $X^2-t$ 都是连续局部鞅”是等价条件。仅要求 $[X]_t=t$ 不够，例如 $X_t=B_t+t$ 也具有该二次变差，但有漂移。仅匹配每个时刻的边缘 Gaussian 分布也不足以替代独立增量。

该刻画用于 [Girsanov 定理（Girsanov theorem）](Girsanov-theorem.md)、[时间变换表示（Dambis–Dubins–Schwarz theorem）](Dambis-Dubins-Schwarz-theorem.md)及 SDE 的弱解分析。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall, Brownian Motion, Martingales, and Stochastic Calculus, Graduate Texts in Mathematics 274, Springer, 2016. §5.3.1，Theorem 5.12。
