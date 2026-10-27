---
title: "半鞅（Semimartingale）"
aliases:
  - "半鞅"
  - "Semimartingale"
  - "连续半鞅"
  - "Continuous semimartingale"
  - "有限变差过程"
  - "Finite-variation process"
  - "特殊半鞅"
  - "Special semimartingale"
type: concept
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



半鞅把鞅型波动与有限变差运动合在一起，是经典 Itô 随机积分的基本积分器。本条以连续半鞅为主，跳跃版本的积分和公式另见相应词条。

## 定义

在满足通常条件的[滤过（filtration）](Filtration.md)下，连续适应过程 $X$ 若可写成
$$
X_t=X_0+M_t+A_t,
$$
其中 $M$ 是从零出发的连续[局部鞅（local martingale）](Local-martingale.md)，$A$ 是从零出发的连续适应过程，且几乎每条路径在每个有限区间上[有界变差（bounded variation）](Bounded-variation.md)，则称 $X$ 为连续半鞅。该分解在不可区分意义下唯一。[^1]

一般实值右连续有左极限的适应过程 $X$ 称为半鞅，若可写成 $X=X_0+M+A$，其中 $M$ 是从零出发的右连续有左极限局部鞅，$A$ 是从零出发的右连续有左极限适应过程，且在每个紧时间区间上有界变差。此时允许 $M,A$ 跳跃。[^2]若还可要求 $A$ 可预测，就称为特殊半鞅（special semimartingale），这个可预测分解唯一；一般分解不能照搬连续情形的唯一性结论。

## 连续分解的唯一性

> [!proof]- 证明
> 若有两种连续分解，则 $N=M-M'=A'-A$ 是从零出发的连续局部鞅，且有限变差。停在总变差和时间有界的区间后，$N$ 有界，是真鞅。对确定性分割，鞅增量正交给出
> $$
> E N_t^2=E\sum_i(\Delta N_i)^2.
> $$
> 右边被 $\max_i|\Delta N_i|\operatorname{Var}_{[0,t]}(N)$ 控制；连续性和有界总变差使它趋于零，并允许支配收敛。因此 $N_t=0$ 几乎必然。对有理 $t$ 取共同零集、再用连续性及解除停时，得到 $N\equiv0$。

## 典型过程与封闭性

Brownian 运动、连续有限变差过程、$X_t=X_0+\int_0^t b_sds+\int_0^t\sigma_s dB_s$ 都是连续半鞅，最后一式要求每个有限区间上 $\int|b_s|ds+\int|\sigma_s|^2ds<\infty$ 几乎必然。其[二次变差（quadratic variation）](Quadratic-variation.md)为 $[X]_t=\int_0^t|\sigma_s|^2ds$。

连续半鞅的线性组合、乘积、$C^2$ 函数像及适当的[随机积分（stochastic integrals）](Stochastic-integral.md)仍是半鞅，具体分解由 [Itô 公式（Itô formula）](Ito-formula.md)给出。连续且适应本身并不足以保证是半鞅，定义中的分解条件不能省略。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，Theorem 4.8、Definition 4.19、Theorems 5.6、5.10。

[^2]: David Applebaum，*Lévy Processes and Stochastic Calculus*，第2版，Cambridge Studies in Advanced Mathematics 116，Cambridge University Press，2009，第137页。
