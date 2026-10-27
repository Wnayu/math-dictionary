---
title: "可预测二次变差（Predictable quadratic variation）"
aliases:
  - "可预测二次变差"
  - "Predictable quadratic variation"
  - "Angle-bracket process"
  - "尖括号过程"
type: concept
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



可预测二次变差描述鞅平方的可预测补偿。在连续鞅情形，它等于路径二次变差；带跳跃时必须区分这两个对象。

## 定义

设 $M_0=0$，$M$ 是满足通常条件的滤过下的右连续有左极限、局部平方可积[局部鞅（local martingale）](Local-martingale.md)。局部平方可积是指存在局部化停时，使停止过程在每个有限时刻平方可积。$\langle M\rangle$ 是唯一的从零出发、可预测、右连续递增过程，使
$$
M_t^2-\langle M\rangle_t
$$
成为局部鞅；称为可预测二次变差或尖括号过程（angle-bracket process）。存在性来自鞅平方的 [Doob–Meyer 分解（Doob–Meyer decomposition）](Doob-Meyer-decomposition.md)，即把满足 D 类条件的下鞅分成鞅与可预测递增部分，再作局部化。[^1]

这里[可预测（predictable）](Predictable-process.md)是定义的一部分。仅要求适应和递增不能在带跳跃情形替代它。交叉尖括号由极化定义：
$$
\langle M,N\rangle=\tfrac14\bigl(\langle M+N\rangle-\langle M-N\rangle\bigr).
$$

## 连续情形与跳跃情形

连续局部鞅 $M$ 的 $[M]$ 连续适应，因而可预测，所以 $\langle M\rangle=[M]$。这解释了 Le Gall 在连续理论中用 $\langle M,M\rangle$ 表示[二次变差（quadratic variation）](Quadratic-variation.md)的约定。[^2]

若 $N$ 是强度 $\lambda$ 的 [Poisson 过程（Poisson process）](Poisson-process.md)，$M_t=N_t-\lambda t$，则
$$
[M]_t=N_t,\qquad \langle M\rangle_t=\lambda t.
$$

> [!proof]- 证明：补偿 Poisson 过程
> $M$ 只在 $N$ 的跳点跳跃，每次跳幅为 $1$，连续漂移没有二次变差，故 $[M]_t=N_t$。对 $s<t$，独立增量给出 $E[M_t-M_s\mid\mathcal F_s]=0$ 和 $E[(M_t-M_s)^2\mid\mathcal F_s]=\lambda(t-s)$。展开平方后得到 $E[M_t^2-\lambda t\mid\mathcal F_s]=M_s^2-\lambda s$。由于 $\lambda t$ 可预测，定义与唯一性给出尖括号公式。

**注**：过程 $[M]-\langle M\rangle$ 可以是具有有限变差路径的非零局部鞅；“有限变差局部鞅必为常数”需要连续性，不能直接套用于这里。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: David Applebaum，*Lévy Processes and Stochastic Calculus*，第2版，Cambridge Studies in Advanced Mathematics 116，Cambridge University Press，2009，Theorem 2.2.3；第94页；Exercise 2.1.4。

[^2]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，Theorem 4.9。
