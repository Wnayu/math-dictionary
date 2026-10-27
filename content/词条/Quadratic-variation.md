---
title: "二次变差（Quadratic variation）"
aliases:
  - "二次变差"
  - "Quadratic variation"
  - "Quadratic variation process"
type: concept
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



二次变差记录沿细分时间区间的增量平方和。Brownian 路径的普通总变差无限，二次变差却是时间本身，这是随机微积分出现二阶修正项的原因。

## 定义

对连续[局部鞅（local martingale）](Local-martingale.md) $M$，$[M]$ 是从零出发的连续适应递增过程，使 $M_t^2-[M]_t$ 为连续局部鞅。它在[不可区分（indistinguishable）](Stochastic-process.md)意义下唯一。Le Gall 将它记为 $\langle M,M\rangle$；本库写 $[M]=[M,M]$，并在连续情形认同 $[M]=\langle M\rangle$。[^1]

若 $X=X_0+M+A$ 是连续[半鞅（semimartingale）](Semimartingale.md)，$M_0=A_0=0$，$A$ 在紧时间区间上有界变差，则定义 $[X]=[M]$。对任意确定性分割 $\pi_n$，网格宽度趋于零时，
$$
\sum_{[u,v]\in\pi_n}(X_{v\wedge t}-X_{u\wedge t})^2
\xrightarrow{P}[X]_t.
$$
这里是固定 $t$ 的依概率极限；适当的过程表述还给出紧时间区间上一致依概率收敛。不是任意逐样本、任意自适应选取分割都自动得到相同极限。[^1]

## Brownian 运动的二次变差

标准 [Brownian 运动（Brownian motion）](Brownian-motion.md)满足 $[B]_t=t$。

> [!proof]- 证明：确定性分割的平方和
> 对 $0=t_0<\cdots<t_n=t$，记 $Q_\pi=\sum_i(B_{t_i}-B_{t_{i-1}})^2$。独立 Gaussian 增量给出
> $$
> E Q_\pi=t,\qquad \operatorname{Var}(Q_\pi)=2\sum_i(t_i-t_{i-1})^2\le2t|\pi|.
> $$
> 因而 $Q_\pi\to t$ 在 $L^2$ 中成立。又 $B_t^2-t$ 是鞅，唯一性识别出 $[B]_t=t$。

## 与有限变差的区别

对连续有限变差路径 $a$，
$$
\sum_i|\Delta a_i|^2\le \max_i|\Delta a_i|\sum_i|\Delta a_i|\longrightarrow0.
$$
所以连续有限变差部分不贡献二次变差。带跳跃时则不同：一般半鞅的二次变差包括 $\sum_{s\le t}(\Delta X_s)^2$；例如 [Poisson 过程（Poisson process）](Poisson-process.md) $N$ 满足 $[N]_t=N_t$。它与[可预测二次变差（Predictable quadratic variation）](Predictable-quadratic-variation.md)不应混用。[^2]

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，式 (4.3)；Theorem 4.9、Proposition 4.21、Proposition 2.16。

[^2]: David Applebaum，*Lévy Processes and Stochastic Calculus*，第2版，Cambridge Studies in Advanced Mathematics 116，Cambridge University Press，2009，式 (4.15)。
