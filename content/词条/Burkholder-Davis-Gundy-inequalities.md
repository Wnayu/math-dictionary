---
title: "Burkholder–Davis–Gundy 不等式（Burkholder–Davis–Gundy inequalities）"
aliases:
  - "Burkholder–Davis–Gundy 不等式"
  - "Burkholder–Davis–Gundy inequalities"
  - "BDG inequality"
  - "BDG 不等式"
type: theorem
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



BDG 不等式把连续局部鞅的路径最大值与二次变差联系起来，是估计随机积分和构造 SDE 解的重要工具。

## 陈述

设 $M_0=0$ 是实值连续[局部鞅（local martingale）](Local-martingale.md)，$\tau$ 是停时，$p>0$。存在只依赖 $p$ 的常数 $0<c_p\le C_p<\infty$，使
$$
c_pE([M]_\tau^{p/2})\le E\left[\left(\sup_{0\le s\le\tau}|M_s|\right)^p\right]
\le C_pE([M]_\tau^{p/2}).
$$
允许两侧同时为无穷；若 $\tau=\infty$，用单调极限解释。$[M]$ 为[二次变差（quadratic variation）](Quadratic-variation.md)。[^1]

## 二阶情形

$p=2$ 时可以取 $c_2=1,C_2=4$。

> [!proof]- 证明
> 先停止使 $M^\tau$ 有界且二次变差有界。由 $E M_\tau^2=E[M]_\tau$，下界来自 $|M_\tau|\le\sup_{s\le\tau}|M_s|$。上界由 [Doob 最大不等式（Doob maximal inequality）](Doob-maximal-inequality.md)得到
> $$
> E\sup_{s\le\tau}|M_s|^2\le4EM_\tau^2=4E[M]_\tau.
> $$
> 对一般 $M,\tau$，先令局部化停时和确定性截断趋于无穷，再用单调收敛/Fatou 得到两侧估计；有限二次变差期望的情形还可用平方可积鞅等距识别终值。

## 随机积分估计

取 $M=\int H\,dB$，则
$$
E\sup_{s\le T}\left|\int_0^sH_u\,dB_u\right|^p
\le C_pE\left(\int_0^T|H_u|^2du\right)^{p/2}.
$$
这同时控制所有时刻，强于只估计终点的 [Itô 等距（Itô isometry）](Ito-isometry.md)，并用于[SDE 存在唯一性（Existence and uniqueness of SDEs）](Existence-and-uniqueness-of-SDEs.md)。

**注**：一般 $p$ 的证明不是把二阶等距直接取 $p/2$ 次幂。Le Gall 的 Theorem 5.16 给出全陈述，并在正文证明所需的一部分估计；本卡完整证明二阶情形，一般 $p$ 的论证按该定理及其明确转引理解。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，Theorem 5.16。
