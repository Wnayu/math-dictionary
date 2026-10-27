---
title: "Novikov 条件（Novikov condition）"
aliases:
  - "Novikov 条件"
  - "Novikov condition"
  - "Novikov criterion"
type: theorem
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



Novikov 条件是一种可检查的指数可积条件，用于确保随机指数是真鞅，从而可用作换测度密度。

## 陈述

设 $M_0=0$ 是连续[局部鞅（local martingale）](Local-martingale.md)，$T<\infty$。若
$$
E\exp\!\left(\frac12[M]_T\right)<\infty,
$$
则停止在 $T$ 的[随机指数（stochastic exponential）](Stochastic-exponential.md) $\mathcal E(M)_{t\wedge T}$ 是一致可积鞅，特别地 $E\mathcal E(M)_T=1$。当 $M=\int\theta\cdot dB$ 时，条件为 $E\exp(\tfrac12\int_0^T|\theta_s|^2ds)<\infty$。[^1]

> [!proof]- 证明
> 全部过程停止于 $T$。条件蕴含 $E[M]_T<\infty$，故 $M$ 是平方可积鞅。由 Cauchy–Schwarz 与非负局部鞅的期望不增，
> $$
> E e^{M_T/2}=E\left[\mathcal E(M)_T^{1/2}e^{[M]_T/4}\right]
> \le (E\mathcal E(M)_T)^{1/2}(Ee^{[M]_T/2})^{1/2}<\infty.
> $$
> 对任意停时 $\tau\le T$，条件 Jensen 给出 $e^{M_\tau/2}\le E[e^{M_T/2}\mid\mathcal F_\tau]$，故这些变量组成一致可积族。
> 取 $0<a<1$，有恒等式
> $$
> \mathcal E(aM)_\tau=\mathcal E(M)_\tau^{a^2}\left(e^{aM_\tau/(1+a)}\right)^{1-a^2}.
> $$
> 对任意事件 $A$，两次 Hölder 不等式给出
> $$
> E[\mathbf1_A\mathcal E(aM)_\tau]
> \le \bigl(E[\mathbf1_Ae^{M_\tau/2}]\bigr)^{2a(1-a)}.
> $$
> 右边对 $\tau\le T$ 在 $P(A)\to0$ 时一致趋零，故停止值族 $\mathcal E(aM)_\tau$ 一致可积。通过局部化的鞅等式取极限，它是真鞅，于是 $E\mathcal E(aM)_T=1$。同一 Hölder 估计在 $A=\Omega,\tau=T$ 上给出
> $$
> 1\le(E\mathcal E(M)_T)^{a^2}(Ee^{M_T/2})^{2a(1-a)}.
> $$
> 令 $a\uparrow1$ 得 $E\mathcal E(M)_T\ge1$；上鞅性给出反向不等式，所以等于 $1$。非负上鞅在终点保持初始期望，故在整个区间上是由终值封闭的鞅，并一致可积。

## 例

若 $|\theta_t|\le K$，则 $\int_0^T|\theta_s|^2ds\le K^2T$，条件立即成立。这里允许 $\theta$ 随机、依赖过去，而不要求确定性。

**注**：Novikov 是充分条件，不是必要条件。条件不成立时，结论需要其他判据或直接验证；不能由“未满足 Novikov”直接判定随机指数为严格局部鞅。其用途见 [Girsanov 定理（Girsanov theorem）](Girsanov-theorem.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，Theorem 5.23。
