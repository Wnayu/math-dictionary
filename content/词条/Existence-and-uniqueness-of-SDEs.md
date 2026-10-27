---
title: "随机微分方程的存在唯一性（Existence and uniqueness of SDEs）"
aliases:
  - "随机微分方程的存在唯一性"
  - "Existence and uniqueness of SDEs"
  - "Picard iteration for SDEs"
  - "SDE 的 Picard 迭代"
type: theorem
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



Lipschitz 条件控制两条解在同一噪声下的分离速度；线性增长条件控制解向无穷远逃逸。两者共同给出全局强解。

## 陈述

固定 $T<\infty$。设 $b,\sigma$ 关于 $(t,x)$ 连续，存在 $K_T<\infty$，对 $0\le t\le T$ 和所有 $x,y\in\mathbb R^d$ 有
$$
|b(t,x)-b(t,y)|+\|\sigma(t,x)-\sigma(t,y)\|_{\mathrm{HS}}\le K_T|x-y|,
$$
$$
|b(t,x)|+\|\sigma(t,x)\|_{\mathrm{HS}}\le K_T(1+|x|).
$$
给定 $m$ 维 Brownian 运动和确定初值 $x$，则[SDE（stochastic differential equation）](Stochastic-differential-equation.md)存在唯一强解，且 $E\sup_{t\le T}|X_t|^2<\infty$。若每个有限 $T$ 都满足这些条件，解可一致拼接为全局解。[^1]

> [!proof]- 证明
> 定义 Picard 迭代 $X^0_t=x$，
> $$
> X^{n+1}_t=x+\int_0^t b(s,X_s^n)ds+\int_0^t\sigma(s,X_s^n)dB_s.
> $$
> 对积分有定义且满足 $E\sup_{t\le T}|U_t|^2+E\sup_{t\le T}|V_t|^2<\infty$ 的连续适应过程 $U,V$，用 $(a+b)^2\le2a^2+2b^2$、Cauchy–Schwarz、Doob 的二阶最大不等式与 Itô 等距，得到
> $$
> E\sup_{u\le t}|\Phi(U)_u-\Phi(V)_u|^2
> \le C_T\int_0^tE\sup_{r\le s}|U_r-V_r|^2ds,
> $$
> 其中 $\Phi$ 是上式积分映射。连续性和线性增长保证第一步差值有限。记 $g_n(t)=E\sup_{s\le t}|X^{n+1}_s-X^n_s|^2$，反复积分给出 $g_n(T)\le C(C_TT)^n/n!$。于是 $\sum_n\sqrt{g_n(T)}<\infty$，迭代在平方可积最大范数中收敛；还可选取几乎必然一致收敛的子列。极限连续且适应于给定噪声的自然滤过。上述估计又使两类积分收敛，因此极限满足方程。
> 对任意两个解，先停在其范数均不超过 $N$ 的时间，应用同样的差值估计和 [Gronwall 不等式（Gronwall inequality）](Gronwall-inequality.md)，得到停止后之差为零。解除停止即路径唯一。线性增长配合同样的最大范数估计给出 $E\sup_{s\le T}|X_s|^2\le C_T(1+|x|^2)$，排除有限时间爆炸。

## 局部 Lipschitz 与爆炸

空间局部 Lipschitz 可通过截断系数先构造到退出球的解；如果还保留上述线性增长控制，仍得到不爆炸的全局解。否则只保证爆炸前的唯一性。例如确定性方程 $dX_t=X_t^2dt$、$X_0=1$，系数局部 Lipschitz，但 $X_t=(1-t)^{-1}$ 在 $t=1$ 爆炸。

Lyons 讲义把停止后的最大范数差值估计单列为引理，适合用于核对上述迭代与唯一性论证。[^2]

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall, Brownian Motion, Martingales, and Stochastic Calculus, Graduate Texts in Mathematics 274, Springer, 2016. §8.2 Theorem 8.3、Lemma 8.4；局部Lipschitz与增长条件的说明。

[^2]: Russell Lyons, Stochastic Calculus: Lecture notes based on the book by J.-F. Le Gall, 讲义, 2025-08-10. §8.2，Theorem 8.3 前的停止过程估计及其证明。
