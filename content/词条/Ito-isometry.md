---
title: "Itô 等距（Itô isometry）"
aliases:
  - "Itô 等距"
  - "Itô isometry"
type: theorem
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



Itô 等距把随机积分的二阶矩转成被积过程的平方积分，使阶梯过程上的定义能够延拓到完整的积分空间。

## 陈述

设 $M_0=0$ 是连续平方可积[鞅（martingale）](Martingale.md)，$H$ [可预测（predictable）](Predictable-process.md)，且 $E\int_0^T H_s^2d[M]_s<\infty$。则 $I_t=\int_0^tH_s\,dM_s$ 是平方可积鞅，且
$$
E[I_T]=0,\qquad E[I_T^2]=E\int_0^T H_s^2\,d[M]_s.
$$
特别地，对标准 Brownian 运动，$d[B]_s=ds$。[^1]

> [!proof]- 证明
> 先设 $H=\sum_iH_i\mathbf1_{(t_i,t_{i+1}]}$，系数有界且 $\mathcal F_{t_i}$ 可测。不同区间的项正交，因为当 $i<j$ 时，$H_i\Delta M_iH_j$ 为 $\mathcal F_{t_j}$ 可测，而 $E[\Delta M_j\mid\mathcal F_{t_j}]=0$。故
> $$
> E I_T^2=\sum_iE[H_i^2(\Delta M_i)^2].
> $$
> 由 $M^2-[M]$ 是鞅以及 $E[M_{t_{i+1}}-M_{t_i}\mid\mathcal F_{t_i}]=0$，得到
> $$
> E[(\Delta M_i)^2\mid\mathcal F_{t_i}]=E[[M]_{t_{i+1}}-[M]_{t_i}\mid\mathcal F_{t_i}].
> $$
> 因而平方和等于 $E\int_0^T H_s^2d[M]_s$。零均值由同一个条件期望计算得到。对一般 $H$，取阶梯近似 $H^{(n)}$ 在此平方积分范数中收敛；等距使积分成为 $L^2$ Cauchy 列。取极限即得等式，鞅性由条件期望的 $L^2$ 连续性保持。

## 交叉等距与条件

对同一积分器和可积的 $H,K$，极化给出
$$
E\left[\left(\int_0^T H_s\,dM_s\right)\left(\int_0^T K_s\,dM_s\right)\right]
=E\int_0^T H_sK_s\,d[M]_s.
$$
若只有 $\int H^2d[M]<\infty$ 几乎必然，所得[随机积分（stochastic integral）](Stochastic-integral.md)仍可通过局部化定义，但不保证以上期望有限，也不保证积分是真鞅。不能把局部条件直接代入一个要求有限二阶矩的等式。

## 例

取 $H_s=B_s$，则 $E\int_0^T B_s^2ds=T^2/2$，因此 $E[(\int_0^T B_s,dB_s)^2]=T^2/2$。这与 $\int_0^T B_s,dB_s=(B_T^2-T)/2$ 的 Gaussian 四阶矩计算相符。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，式 (5.6)–(5.8)；Theorems 4.13、5.4。
