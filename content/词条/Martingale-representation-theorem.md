---
title: "鞅表示定理（Martingale representation theorem）"
aliases:
  - "鞅表示定理"
  - "Martingale representation theorem"
  - "Brownian martingale representation"
type: theorem
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



Brownian 鞅表示定理说明，在 Brownian 运动自身生成的信息中，所有平方可积鞅都可以由对该 Brownian 运动的随机积分表示。滤过的选择是定理的实质假设。

## 陈述

设 $B$ 为 $d$ 维标准 Brownian 运动，$\mathcal F_t$ 为其完备自然滤过，固定 $T<\infty$。对每个 $Z\in L^2(\mathcal F_T)$，存在可预测 $\mathbb R^d$ 值过程 $H$，满足 $E\int_0^T|H_s|^2ds<\infty$，使
$$
Z=EZ+\int_0^T H_s\cdot dB_s.
$$
$H$ 在 $dt\,dP$ 几乎处处意义下唯一。因此 $M_t=E[Z\mid\mathcal F_t]$ 有连续版本，并且 $M_t=EZ+\int_0^tH_s\cdot dB_s$。连续局部鞅版本通过局部化延拓，$H$ 相应只要求局部平方可积。[^1]

> [!proof]- 证明
> 考虑由常数和 $\int_0^T H\cdot dB$ 构成的 $L^2(\mathcal F_T)$ 子空间。由 [Itô 等距（Itô isometry）](Ito-isometry.md)，它是闭子空间。对确定性阶梯函数 $h$，复指数鞅 $\mathcal E(i\int h\cdot dB)$ 的终值属于此子空间：其微分为 $i\mathcal E(i\int h\cdot dB)h\cdot dB$，在有限时域上平方可积。
> 这些终值与有限个 Brownian 增量的指数函数 $\exp(i\sum_j u_j\cdot(B_{t_j}-B_{t_{j-1}}))$ 只差确定非零因子。它们的线性张成稠密：若 $Y\in L^2$ 与所有这样的指数函数正交，则由有限维特征函数唯一性，$E[Y\mathbf1_A]=0$ 对每个有限维柱集 $A$ 成立；单调类定理把结论扩展到 $\mathcal F_T$，从而 $Y=0$。闭且稠密的子空间即全空间。唯一性再次由等距得出。

## 为什么必须指定滤过

若扩大滤过，使其还包含独立 Brownian 运动 $W$ 的信息，$W_t$ 是该滤过下的鞅，但不能表示为仅对 $B$ 的积分：否则 $[W,B]=0$ 会迫使积分系数为零，而 $[W]_t=t$。这个反例说明“空间上存在一个 Brownian 运动”远弱于“滤过由它生成”。

鞅表示也是 [Girsanov 定理（Girsanov theorem）](Girsanov-theorem.md)中密度过程在 Brownian 自然滤过下可写成连续随机积分的重要依据。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，Theorem 5.18、Lemma 5.19；第131页。
