---
title: "Feynman–Kac 公式（Feynman–Kac formula）"
aliases:
  - "Feynman–Kac 公式"
  - "Feynman–Kac formula"
type: theorem
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



Feynman–Kac 公式把线性抛物型方程的解表示为扩散路径上的期望。系数与正则性条件决定它是“验证已有经典解”的公式，还是还能用来构造经典解。

## 陈述

设扩散 $X$ 满足[SDE（stochastic differential equation）](Stochastic-differential-equation.md)，系数满足保证全局解的 Lipschitz 与线性增长条件。记其漂移算子为
$$
L_tu=b(t,x)\cdot\nabla u+\tfrac12\operatorname{tr}(\sigma\sigma^{\mathsf T}(t,x)D^2u).
$$
固定 $T<\infty$，设 $c,f$ 有界连续、$g$ 有界连续，且有界函数 $u\in C^{1,2}([0,T)\times\mathbb R^d)\cap C([0,T]\times\mathbb R^d)$ 满足
$$
\partial_tu+L_tu-cu+f=0,\qquad u(T,x)=g(x).
$$
则
$$
u(t,x)=E_{t,x}\left[e^{-\int_t^T c(r,X_r)dr}g(X_T)
+\int_t^T e^{-\int_t^s c(r,X_r)dr}f(s,X_s)ds\right].
$$
$E_{t,x}$ 表示从时刻 $t$、状态 $x$ 出发的解的期望。该形式是来源 Brownian 公式与 Itô 验证法的直接扩展，下面给出推导。[^1][^2]

> [!proof]- 证明
> 令 $D_s=\exp(-\int_t^s c(r,X_r)dr)$。对 $D_su(s,X_s)$ 使用时间依赖 Itô 公式和有限变差乘积公式，PDE 使漂移等于 $-D_sf(s,X_s)ds$。因此
> $$
> D_su(s,X_s)+\int_t^sD_rf(r,X_r)dr
> $$
> 是局部鞅。$u,c,f$ 有界且时域有限，使整个过程有确定上界，因此是真鞅。先在 $s<T$ 取期望，再令 $s\uparrow T$，连续性与支配收敛给出公式。它还证明在此有界经典解类别中唯一性。

## 热方程

取 $b=0,\sigma=I,c=f=0$，得到 $u(t,x)=E[g(x+B_{T-t})]$，即终值与 Gaussian 热核的卷积。该例可直接微分热核验证 $\partial_tu+\tfrac12\Delta u=0$。

**注**：上面的验证定理先假定经典解存在。对仅可测系数或退化扩散，期望表示未必自动具有 $C^{1,2}$ 正则性；不能仅写出期望就宣称已经证明经典解存在。退出时刻对应的椭圆型问题见 [Dirichlet 问题（Dirichlet problem）](Dirichlet-problem.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett，*Probability: Theory and Examples*，Version 5，2019年1月11日，式 (9.4.2)；Theorems 9.4.1、9.4.2。

[^2]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，Exercises 6.26、7.28。
