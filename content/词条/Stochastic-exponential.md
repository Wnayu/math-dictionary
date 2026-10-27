---
title: "随机指数（Stochastic exponential）"
aliases:
  - "随机指数"
  - "Stochastic exponential"
  - "Doléans exponential"
  - "Doléans–Dade exponential"
  - "指数鞅"
  - "Exponential martingale"
  - "随机对数"
  - "Stochastic logarithm"
type: concept
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



随机指数是乘法型随机方程的基本解。它与普通 $e^{M_t}$ 的区别在于减去二次变差的一半。

## 定义

设 $M_0=0$ 为实值连续[局部鞅（local martingale）](Local-martingale.md)，定义 Doléans 指数
$$
\mathcal E(M)_t=\exp\!\left(M_t-\frac12[M]_t\right).
$$
它严格为正、从 $1$ 出发，并满足
$$
\mathcal E(M)_t=1+\int_0^t\mathcal E(M)_s\,dM_s.
$$
因此它是连续局部鞅。[^1]

> [!proof]- 证明
> 对 $f(x,a)=e^{x-a/2}$ 与半鞅 $(M,[M])$ 应用 [Itô 公式（Itô formula）](Ito-formula.md)。有限变差变量 $[M]$ 不贡献二次协变差。两项 $-\tfrac12\mathcal E(M)d[M]$ 与 $\tfrac12\mathcal E(M)d[M]$ 相消，剩余 $d\mathcal E(M)=\mathcal E(M)dM$。

## 真鞅条件

非负局部鞅是上鞅，故 $E\mathcal E(M)_t\le1$。要把它作为概率密度，需要等号；[Novikov 条件（Novikov condition）](Novikov-condition.md)是一种充分条件。若 $M_t=\theta B_t$，Gaussian 矩母函数直接给出 $E\mathcal E(M)_t=1$，所以它在每个有限时间区间上是真鞅。

若 $H$ 为适当的可预测过程，$M=\int H\,dB$，则
$$
\mathcal E(M)_t=\exp\!\left(\int_0^t H_s\,dB_s-\frac12\int_0^t H_s^2ds\right).
$$
这一表达式是 [Girsanov 定理（Girsanov theorem）](Girsanov-theorem.md)中的常用密度。

## 随机对数

若 $Z$ 是严格正的连续局部鞅且 $Z_0=1$，则 $L_t=\int_0^t Z_s^{-1}dZ_s$ 局部有定义，并且 $Z=\mathcal E(L)$。证明是对 $\log Z$ 局部应用 Itô 公式。因而“随机指数”与这个积分定义的“随机对数”互为逆操作；它们不是逐点普通指数与对数的简单替换。[^1]

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall, Brownian Motion, Martingales, and Stochastic Calculus, Graduate Texts in Mathematics 274, Springer, 2016. §5.2 Proposition 5.11；§5.5 Proposition 5.21。
