---
title: "可选停止定理（Optional stopping theorem）"
aliases: ["可选停止定理", "Optional stopping theorem", "可选抽样定理", "Optional sampling theorem"]
type: theorem
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



可选停止定理将鞅的确定时刻条件均值关系推广到适当的随机时刻。无界停时需要额外控制，不能只用“几乎必然有限”。[^D][^L]

## 有界停时

设 $M_n$ 是可积[鞅（Martingale）](Martingale.md)，$S\le T\le N$ 是[停时（Stopping time）](Stopping-time.md)，$N$ 为确定整数，则
$$
\mathbb E[M_T\mid\mathcal F_S]=M_S.
$$
对下鞅将等号改为 $\ge$，对上鞅改为 $\le$。连续时间的右连续鞅及有界停时也满足同一结论。

> [!proof]- 离散时间的证明
> 有
> $$
> M_T-M_S=\sum_{k=1}^N1_{\{S<k\le T\}}(M_k-M_{k-1}).
> $$
> 任取 $A\in\mathcal F_S$，则 $A\cap\{S<k\le T\}\in\mathcal F_{k-1}$，因此每一项乘 $1_A$ 后期望为零。有限和可积，故 $\mathbb E[1_A(M_T-M_S)]=0$，即为条件期望的定义。

## 无界停时的充分条件

若 $T<\infty$ 几乎必然，且停止族 $(M_{n\wedge T})_{n\ge0}$ [一致可积（Uniform integrability）](Uniform-integrability.md)，则
$$
\mathbb E M_T=\mathbb E M_0.
$$
特别地，若整个鞅一致可积，任意 $S\le T\le\infty$ 均有条件版本，其中 $M_\infty$ 为 $L^1$ 极限。另一个实用条件是
$$
\mathbb ET<\infty,\qquad
\mathbb E[|M_{n+1}-M_n|\mid\mathcal F_n]\le C
$$
对所有 $n$ 成立，$C$ 为确定有限常数。

> [!proof]- 无界停时的极限步骤
> 有界停止给出 $\mathbb EM_{n\wedge T}=\mathbb EM_0$。在 $T<\infty$ 上，$M_{n\wedge T}\to M_T$；一致可积允许取 $L^1$ 极限。上述期望时间条件保证
> $$
> |M_{n\wedge T}|\le |M_0|+\sum_{k=0}^\infty1_{\{T>k\}}|M_{k+1}-M_k|,
> $$
> 且右侧期望不超过 $\mathbb E|M_0|+C\sum_kP(T>k)=\mathbb E|M_0|+C\mathbb ET$，所以提供可积控制。条件版本对 $A\in\mathcal F_S$ 使用同样的有界停止与 $L^1$ 极限。

## 为什么有限停时仍不够

令 $S_n$ 为从 $0$ 出发的一维简单对称[随机游动（Random walk）](Random-walk.md)，$T=\inf\{n:S_n=1\}$。由常返性，$T<\infty$ 几乎必然；但 $S_T=1$、$S_0=0$，所以期望不相等。停止族不一致可积，且 $\mathbb ET=\infty$。

**注**：非负上鞅可在任意停时使用 Fatou 引理得到 $\mathbb E M_T\le\mathbb EM_0$，但一般不能把不等号改为等号。随机积分中的[局部鞅（Local martingale）](Local-martingale.md)还需要先局部化，不能直接套用可积鞅版本。

[概率论导航](../概率论导航.md)

## 参考文献

[^D]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §§4.4、4.8。

[^L]: Jean-François Le Gall, Brownian Motion, Martingales, and Stochastic Calculus, Graduate Texts in Mathematics 274, Springer, 2016. §3.4。
