---
title: "局部鞅（Local martingale）"
aliases:
  - "局部鞅"
  - "Local martingale"
  - "连续局部鞅"
  - "Continuous local martingale"
  - "局部化"
  - "Localization"
  - "严格局部鞅"
  - "Strict local martingale"
type: concept
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



局部鞅是在逐步推远的停止时刻之前具有鞅性质的过程。“局部”控制的是停止后的过程，不能自动推出每个时刻的可积性或全局鞅等式。

## 定义

在满足通常条件的[滤过（filtration）](Filtration.md)下，先设 $M_0=0$。适应的右连续有左极限过程 $M$ 称为局部鞅，若存在递增[停时（stopping times）](Stopping-time.md) $\tau_n\uparrow\infty$ 几乎必然，使每个停止过程 $M^{\tau_n}_t:=M_{t\wedge\tau_n}$ 是[鞅（martingale）](Martingale.md)。$\tau_n$ 称为局部化序列（localizing sequence）。[^1]在连续情形，可以选取使每个停止过程一致可积的序列。[^2]

一般初值时，采用 $M-M_0$ 是上述局部鞅的约定，并明确另行指出是否假定 $M_0\in L^1$。这与 Le Gall 的连续局部鞅约定一致；有些文献直接要求被停止的 $M$ 本身是鞅，从而也要求初值可积。本专题的积分产生的局部鞅均从零出发。

## 从局部鞅得到真鞅

连续局部鞅若在 $[0,T]$ 上被一个可积随机变量支配，即 $|M_{t\wedge\tau_n}|\le Z\in L^1$ 对所有 $t\le T,n$ 成立，且 $M_0\in L^1$，则在 $[0,T]$ 上是真鞅。有界局部鞅是最常见特例。

> [!proof]- 证明
> 对 $s\le t\le T$，停止后的鞅等式为 $E[M_{t\wedge\tau_n}\mid\mathcal F_s]=M_{s\wedge\tau_n}$。支配收敛给出两端在 $L^1$ 中的收敛；条件期望是 $L^1$ 压缩，因此极限满足 $E[M_t\mid\mathcal F_s]=M_s$。

非负局部鞅若 $E[M_0]<\infty$，则是上鞅：条件 Fatou 引理作用于停止后的非负过程，给出 $E[M_t\mid\mathcal F_s]\le M_s$。不等式未必取等号。[^2]

## 严格局部鞅

局部鞅而非真鞅的过程称为严格局部鞅（strict local martingale）。例如三维 [Brownian 运动（Brownian motion）](Brownian-motion.md) $B$ 从 $x\ne0$ 出发时，$M_t=1/|B_t|$ 是非负连续局部鞅。函数 $y\mapsto1/|y|$ 在 $\mathbb R^3\setminus\{0\}$ 上调和，故停在避开原点的有界区域后可由 [Itô 公式（Itô formula）](Ito-formula.md)证明局部鞅性；Gaussian 密度积分则给出 $E[M_t]<1/|x|$，$t>0$，所以它不是真鞅。该例的完整计算见来源习题 5.33。[^2]

**注**：每个确定时刻的矩有界，不等于对全部停止时刻具有足够的一致可积性。进行[换测度（change of measure）](Girsanov-theorem.md)时，密度的局部鞅性尤其不能替代期望恒等于 $1$。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: David Applebaum，*Lévy Processes and Stochastic Calculus*，第2版，Cambridge Studies in Advanced Mathematics 116，Cambridge University Press，2009，第92–93页。

[^2]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，Definition 4.6、Proposition 4.7、Exercise 5.33。
