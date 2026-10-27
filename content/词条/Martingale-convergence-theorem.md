---
title: "鞅收敛定理（Martingale convergence theorem）"
aliases: ["鞅收敛定理", "Martingale convergence theorem"]
type: theorem
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



鞅收敛包含几乎必然收敛、$L^1$ 收敛和 $L^p$ 收敛等不同结论；它们需要的条件不能混同。[^1][^2]

## 几乎必然收敛

若离散[下鞅（Submartingale）](Martingale.md) $X_n$ 满足 $\sup_n\mathbb EX_n^+<\infty$，则存在可积有限随机变量 $X_\infty$，使 $X_n\to X_\infty$ 几乎必然。特别地，非负上鞅几乎必然收敛，且 $\mathbb EX_\infty\le\mathbb EX_0$。

> [!proof]- 证明
> 由[上穿不等式（Upcrossing inequality）](Upcrossing-inequality.md)，对任意有理数 $a<b$，
> $$
> \sup_n\mathbb EU_n[a,b]\le\frac{\sup_n\mathbb EX_n^++|a|}{b-a}<\infty.
> $$
> 单调收敛给出 $U_\infty[a,b]<\infty$ 几乎必然。若上下极限不同，可在两者之间插入有理数 $a<b$，从而有无穷多次上穿，矛盾。因此扩充实数极限存在。
>
> 又因 $\mathbb EX_n\ge\mathbb EX_0$，
> $$
> \mathbb EX_n^- =\mathbb EX_n^+-\mathbb EX_n
> \le\sup_m\mathbb EX_m^+-\mathbb EX_0.
> $$
> 分别对正负部用 Fatou 引理，得极限两部分均可积，故极限有限。对非负上鞅应用此结论于 $-X$，再用 Fatou 引理得到期望不等式。

## 一致可积与终端表示

对离散可积鞅 $M_n$，下列条件等价：$\{M_n\}$ [一致可积（Uniform integrability）](Uniform-integrability.md)；$M_n$ 在 $L^1$ 中收敛；存在 $Z\in L^1$ 使 $M_n=\mathbb E[Z\mid\mathcal F_n]$。此时也几乎必然收敛，且
$$
M_n=\mathbb E[M_\infty\mid\mathcal F_n],\qquad
\mathbb EM_\infty=\mathbb EM_0.
$$

> [!proof]- 证明
> 一致可积给出 $L^1$ 有界，先由前一结论得几乎必然极限，再由[Vitali 收敛定理（Vitali convergence theorem）](Vitali-convergence-theorem.md)得 $L^1$ 收敛。反之，$L^1$ 收敛族一致可积。若 $M_m\to M_\infty$ 于 $L^1$，固定 $n$，利用条件期望的 $L^1$ 压缩性，在 $M_n=\mathbb E[M_m\mid\mathcal F_n]$ 中令 $m\to\infty$，得到终端表示。最后，单个可积 $Z$ 的全部条件期望构成一致可积族：先以有界变量逼近 $Z$，再用条件期望的 $L^1$ 压缩性及截断估计。

## Lp 有界与反例

若 $p>1$ 且 $\sup_n\mathbb E|M_n|^p<\infty$，则 $M_n\to M_\infty$ 几乎必然且在 $L^p$ 中收敛。[Doob 最大不等式（Doob maximal inequality）](Doob-maximal-inequality.md)使 $\mathbb E\sup_n|M_n|^p<\infty$，于是对 $|M_n-M_\infty|^p$ 使用控制收敛。

$L^1$ 有界本身不足以推出 $L^1$ 收敛。例如连续抛公平硬币，令 $M_n=2^n1_{\{前n次均为正面\}}$。这是非负鞅，$\mathbb EM_n=1$，但 $M_n\to0$ 几乎必然，所以不能在 $L^1$ 中收敛到该极限。

对于递增 $\mathcal F_n$，取 $M_n=\mathbb E[Z\mid\mathcal F_n]$，其极限为 $\mathbb E[Z\mid\sigma(\bigcup_n\mathcal F_n)]$；递减信息的对应结论见[反向鞅（Reverse martingale）](Reverse-martingale.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Theorems 4.2.11–4.2.12、4.4.6、4.6.1、4.6.7–4.6.8。

[^2]: Chen Wang, *Lecture Notes on Stochastic Processes*，个人笔记，Theorems 2.27、2.30、2.49、2.63–2.64；Remark 2.31。


