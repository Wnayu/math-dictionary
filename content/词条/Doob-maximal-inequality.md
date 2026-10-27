---
title: "Doob 最大不等式（Doob maximal inequality）"
aliases: ["Doob 最大不等式", "Doob maximal inequality", "Doob不等式", "Lp最大不等式"]
type: theorem
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



Doob 最大不等式以终端矩控制整个过去的最大偏移，是鞅收敛与随机积分估计的基本工具。[^1][^2]

## 最大概率估计

设 $(X_k)_{k=0}^n$ 是非负[下鞅（Submartingale）](Martingale.md)，$X_n^*=\max_{0\le k\le n}X_k$。对 $\lambda>0$，
$$
\lambda P(X_n^*\ge\lambda)
\le \mathbb E[X_n1_{\{X_n^*\ge\lambda\}}]
\le\mathbb EX_n.
$$
对任意下鞅可把最大值取为 $\max_kX_k^+$；其中 $x^+=\max(x,0)$。

> [!proof]- 证明
> 令 $A_k=\{X_0<\lambda,\ldots,X_{k-1}<\lambda,X_k\ge\lambda\}$。这些事件两两不交，$A_k\in\mathcal F_k$，其并为 $A=\{X_n^*\ge\lambda\}$。下鞅性质给出
> $$
> \lambda P(A_k)\le\mathbb E[X_k1_{A_k}]
> \le\mathbb E[X_n1_{A_k}].
> $$
> 对 $k$ 求和即得第一式，第二式来自非负性。

## Lp 最大不等式

若 $1<p<\infty$ 且 $\mathbb EX_n^p<\infty$，则
$$
\|X_n^*\|_p\le\frac p{p-1}\|X_n\|_p.
$$
特别地，对 $L^p$ 鞅 $M$，将 $X_k=|M_k|$ 代入可得
$$
\mathbb E\max_{k\le n}|M_k|^p
\le\left(\frac p{p-1}\right)^p\mathbb E|M_n|^p.
$$

> [!proof]- 证明
> 先将最大值截断在 $R$。以 $p\lambda^{p-2}$ 乘最大概率估计并在 $(0,R)$ 积分，用[层蛋糕公式（Layer-cake formula）](Layer-cake-formula.md)及 Tonelli 定理得到
> $$
> \mathbb E(X_n^*\wedge R)^p
> \le\frac p{p-1}\mathbb E\bigl[X_n(X_n^*\wedge R)^{p-1}\bigr].
> $$
> [Hölder 不等式（Hölder inequality）](Holder-inequality.md)给出右侧不超过 $\frac p{p-1}\|X_n\|_p\|X_n^*\wedge R\|_p^{p-1}$。除去非零范数，再令 $R\uparrow\infty$ 即得结论。

对右连续过程，先在有限有理时间网格使用估计，再令网格加密，得到 $[0,T]$ 上的上确界版本。$p=1$ 时不能把常数直接代入；此处只保留弱型最大概率估计。若要求 $L^1$ 型最大值控制，需要额外的对数矩等条件。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Theorems 4.4.2、4.4.4；Example 4.4.5。

[^2]: Chen Wang, *Lecture Notes on Stochastic Processes*，个人笔记，式 (2.23)、(2.26)。


