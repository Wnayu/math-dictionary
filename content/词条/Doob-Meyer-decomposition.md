---
title: "Doob–Meyer 分解（Doob–Meyer decomposition）"
aliases:
  - "Doob–Meyer 分解"
  - "Doob–Meyer decomposition"
  - "D 类过程"
  - "Class D process"
  - "可预测补偿过程"
  - "Predictable compensator"
type: theorem
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



Doob–Meyer 分解从下鞅中分离出可预测的平均增长与鞅型波动。它为带跳跃鞅的可预测二次变差提供存在性依据。

## 陈述

固定有限时域 $[0,T]$，滤过满足[通常条件（usual conditions）](Filtration.md)。设 $Y$ 是右连续有左极限的[下鞅（submartingale）](Martingale.md)，并属于 D 类（class D），即
$$
\{Y_\tau:\tau\text{ 为停时且 }0\le\tau\le T\}
$$
是[一致可积（uniformly integrable）](Uniform-integrability.md)族。则存在唯一分解
$$
Y_t=Y_0+M_t+A_t,
$$
其中 $M_0=0$ 是一致可积鞅，$A_0=0$ 是可预测、右连续、递增过程，且 $EA_T<\infty$；唯一性按不可区分理解。$A$ 称为 $Y$ 的可预测补偿过程（predictable compensator），因为 $Y-A$ 消除了可预测增长。[^1]

**注**：D 类要求对所有有界停时取值的一致可积性，不能仅检查确定时刻族 $\{Y_t:0\le t\le T\}$。所谓[可预测（predictable）](Predictable-process.md)也不能换成仅适应；补偿 Poisson 过程说明一般适应的有限变差局部鞅可以非零。

## 离散时间的构造

若 $(Y_n)_{n=0}^N$ 是可积下鞅，令
$$
A_0=0,\qquad A_n=\sum_{k=1}^n E[Y_k-Y_{k-1}\mid\mathcal F_{k-1}],
\qquad M_n=Y_n-Y_0-A_n.
$$
则 $A_n$ 递增，每个增量 $A_n-A_{n-1}$ 在 $\mathcal F_{n-1}$ 已可测，而 $M$ 为从零出发的鞅。

> [!proof]- 证明
> 下鞅性质给出每个条件期望增量非负，所以 $A$ 递增；其可积性来自各 $Y_k$ 可积。直接计算
> $$
> E[M_n-M_{n-1}\mid\mathcal F_{n-1}]
> =E[Y_n-Y_{n-1}\mid\mathcal F_{n-1}]-(A_n-A_{n-1})=0.
> $$
> 若另有同样的可预测分解，差值满足 $\Delta M=-\Delta A$；由于 $\Delta A$ 为 $\mathcal F_{n-1}$ 可测，对上式取条件期望就得到 $\Delta A=0$。逐项累加证明唯一性。

连续时间的构造不能只把求和符号直接换成积分；它需要利用细分网格上的离散分解、D 类带来的紧性与可预测性控制来取极限。Applebaum 在来源中给出正式陈述并转引一般证明，本条完整展示离散构造，不把这一说明标作连续时间的完整证明。

## 鞅平方的补偿

若 $M$ 是从零出发的平方可积鞅，则 $M^2$ 是下鞅。对有限时域，其停止值族满足所需的一致可积控制；分解中的递增过程记为 $\langle M\rangle$，称[可预测二次变差（Predictable quadratic variation）](Predictable-quadratic-variation.md)。例如强度 $\lambda$ 的 Poisson 过程 $N$ 满足 $\langle N-\lambda\cdot\rangle_t=\lambda t$，而路径二次变差为 $N_t$。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: David Applebaum, Lévy Processes and Stochastic Calculus, 2nd ed., Cambridge Studies in Advanced Mathematics 116, Cambridge University Press, 2009. §2.2.1，Theorem 2.2.3；原书陈述连续时间定理并转引其一般证明。
