---
title: "Kolmogorov 连续性定理（Kolmogorov continuity theorem）"
aliases: ["Kolmogorov 连续性定理", "Kolmogorov continuity theorem", "Kolmogorov–Chentsov定理", "Kolmogorov-Chentsov theorem", "Hölder连续修改"]
type: theorem
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



Kolmogorov 连续性定理把增量的高阶矩估计转化为连续修改与 Hölder 正则性；它的结论是存在一个修改，而非原先任意选定的过程都具有连续路径。[^1][^2]

## 定义

设 $X=(X_t)_{t\in[0,1]}$ 取值于完备度量空间 $(E,d)$。若存在 $p>0$、$\varepsilon>0$、$C<\infty$，使
$$
\mathbb E[d(X_s,X_t)^p]\le C|t-s|^{1+\varepsilon}
\qquad(s,t\in[0,1]),
$$
则存在[修改（Modification）](Stochastic-process.md) $\widetilde X$，其路径对每个 $0<\alpha<\varepsilon/p$ 都 Hölder 连续。所谓 Hölder 连续是存在有限随机常数 $K_\alpha$，使 $d(\widetilde X_s,\widetilde X_t)\le K_\alpha|t-s|^\alpha$ 对所有 $s,t$ 成立。

参数在 $\mathbb R^k$ 的有界矩形中时，矩估计中的幂次应改为 $k+\varepsilon$，而 Hölder 阶数仍为任意 $\alpha<\varepsilon/p$。无界区间得到局部结论。

> [!proof]- 一维参数的证明
> 固定 $\alpha<\varepsilon/p$。第 $n$ 级二分网格有 $2^n$ 对相邻点。用 Markov 不等式及并集界，
> $$
> P\left(\max_{0\le j<2^n}d(X_{(j+1)2^{-n}},X_{j2^{-n}})>2^{-n\alpha}\right)
> \le C2^{-n(\varepsilon-p\alpha)}.
> $$
> 右侧可求和，故 Borel–Cantelli 保证：在共同余零集上，所有充分细网格的相邻增量均不超过 $2^{-n\alpha}$。把有限个粗网格的最大增量吸收进随机常数。
>
> 对任意两个二进有理点，选 $2^{-m-1}<|t-s|\le2^{-m}$，将它们逐级连接到第 $m$ 级附近网格点。每级至多需要固定个数的相邻增量，所以由几何级数 $\sum_{n\ge m}2^{-n\alpha}$ 得到 $d(X_s,X_t)\le K|t-s|^\alpha$。完备性使该映射从稠密二进点集唯一延拓到整个区间。
>
> 对固定 $t$，取二进点 $t_n\to t$。原矩估计给出 $X_{t_n}\to X_t$ 依概率，延拓构造给出 $X_{t_n}\to\widetilde X_t$ 几乎必然；概率极限唯一，故 $P(X_t=\widetilde X_t)=1$。取可数个 $\alpha_j\uparrow\varepsilon/p$，利用连续修改间不可区分性，得到一个修改同时具有全部严格较小阶数的正则性。

## Brownian 阶数

Brownian 增量满足 $p$ 阶矩为 $c_p|t-s|^{p/2}$，所以 $\varepsilon=p/2-1$，可得任意 $\alpha<1/2-1/p$。让 $p$ 取任意大的整数，得到所有 $\alpha<1/2$；不能把严格不等式端点自动补成 $1/2$。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，Theorem 2.9、Corollary 2.11。

[^2]: Russell Lyons，*Stochastic Calculus: Lecture notes based on the book by J.-F. Le Gall*，课程讲义，2025年8月10日，Theorem 2.9。
