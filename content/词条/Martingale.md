---
title: "鞅（Martingale）"
aliases: ["鞅", "Martingale", "上鞅", "Supermartingale", "下鞅", "Submartingale", "鞅差", "Martingale difference", "离散鞅变换"]
type: concept
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



鞅表示给定当前信息时，未来值的条件均值等于当前值；定义同时要求适应性和可积性。[^1][^2]

## 定义

实值过程 $M=(M_t)$ 是相对于[滤过（Filtration）](Filtration.md) $(\mathcal F_t)$ 的鞅，如果每个 $M_t$ 都适应且 $\mathbb E|M_t|<\infty$，并且
$$
\mathbb E[M_t\mid\mathcal F_s]=M_s\quad\text{几乎必然},\qquad s\le t.
$$
这里使用[条件期望（Conditional expectation）](Conditional-expectation.md)。把等号改成 $\ge$ 得下鞅（submartingale），改成 $\le$ 得上鞅（supermartingale）。离散时间只需核验相邻两时刻：塔性质推出任意 $m\ge n$ 的对应关系。增量 $D_n=M_n-M_{n-1}$ 称鞅差（martingale difference），满足 $\mathbb E[D_n\mid\mathcal F_{n-1}]=0$。

## 例

设 $\xi_k$ 独立同分布，$S_n=\sum_{k=1}^n\xi_k$，$\mathcal F_n=\sigma(\xi_1,\ldots,\xi_n)$。

- 若 $\mathbb E|\xi_1|<\infty$、$\mu=\mathbb E\xi_1$，则 $S_n-n\mu$ 是鞅。
- 若 $\mathbb E\xi_1=0$、$\mathbb E\xi_1^2=\sigma^2<\infty$，则 $S_n^2-n\sigma^2$ 是鞅。
- 若 $m(\theta)=\mathbb E e^{\theta\xi_1}<\infty$，则 $e^{\theta S_n}/m(\theta)^n$ 是非负鞅。

> [!proof]- 证明
> 第一项由 $\mathbb E[\xi_{n+1}\mid\mathcal F_n]=\mu$ 得到。第二项展开
> $$
> \mathbb E[S_{n+1}^2\mid\mathcal F_n]
> =S_n^2+2S_n\mathbb E[\xi_{n+1}\mid\mathcal F_n]+\mathbb E[\xi_{n+1}^2\mid\mathcal F_n]
> =S_n^2+\sigma^2.
> $$
> 第三项将 $e^{\theta S_n}$ 提出条件期望，再用独立性求出剩下的因子 $m(\theta)$。各项在所列假设下均可积。

## 凸变换与离散鞅变换

若 $M$ 是鞅，$\varphi$ 是凸函数且 $\varphi(M_t)$ 可积，则条件 Jensen 不等式给出 $\varphi(M)$ 是下鞅。对原本为下鞅的 $X$，还需要 $\varphi$ 单调不减。不能仅因 $p\ge1$ 就忽略 $\mathbb E|M_t|^p<\infty$。

离散时间设 $H_k$ 对 $\mathcal F_{k-1}$ 可测且每个 $H_k(M_k-M_{k-1})$ 可积，则
$$
(H\cdot M)_n=\sum_{k=1}^nH_k(M_k-M_{k-1})
$$
是鞅；例如每个 $H_k$ 有界足以保证可积。若把 $M$ 换成上鞅或下鞅，为保持不等号还须 $H_k\ge0$。

**注**：期望恒定不是鞅的充分条件。独立且均值零的序列 $X_n$ 一般满足 $\mathbb E[X_{n+1}\mid\mathcal F_n]=0$，而不等于 $X_n$。

收敛、最大值和停止性质分别见[鞅收敛定理（Martingale convergence theorem）](Martingale-convergence-theorem.md)、[Doob 最大不等式（Doob maximal inequality）](Doob-maximal-inequality.md)与[可选停止定理（Optional stopping theorem）](Optional-stopping-theorem.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，第 217 页；Examples 4.2.1–4.2.3；Theorems 4.2.5–4.2.8。

[^2]: Chen Wang, *Lecture Notes on Stochastic Processes*，个人笔记，Definition 2.1；Examples 2.6–2.7；Theorem 2.9；式 (2.3)。


