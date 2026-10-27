---
title: "大偏差（Large deviations）"
aliases: ["大偏差", "Large deviations", "大偏差原理", "Large deviation principle", "速率函数", "Rate function", "Cramér定理"]
type: concept
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



大偏差研究随机量远离典型值时的指数衰减速率，与只研究局部高斯波动的中心极限定理互补。

## 定义

设 $Z_n$ 为拓扑空间 $S$ 中的随机元素，$a_n\to\infty$ 为正数。若下半连续函数 $I:S\to[0,\infty]$ 满足：对任意开集 $G$ 和闭集 $F$，
$$
\liminf_n\frac1{a_n}\log P(Z_n\in G)\ge-\inf_{x\in G}I(x),
\qquad
\limsup_n\frac1{a_n}\log P(Z_n\in F)\le-\inf_{x\in F}I(x),
$$
则称 $Z_n$ 以速度 $a_n$、速率函数（rate function）$I$ 满足大偏差原理（large deviation principle）。约定 $\log0=-\infty$、$\inf\varnothing=\infty$。若 $\{x:I(x)\le c\}$ 对每个有限 $c$ 都紧，称 $I$ 为好速率函数（good rate function）。此定义用于区分完整的大偏差原理与下面的单侧尾部结论。

## Cramér 单侧尾部定理

设 $X_k$ 独立同分布，且不存在常数 $c$ 使 $P(X_1=c)=1$（即非退化）。记 $S_n=\sum_{k=1}^nX_k$，并假设 $M(t)=\mathbb Ee^{tX_1}<\infty$ 对所有 $t\in\mathbb R$ 成立。记 $K(t)=\log M(t)$、$\mu=\mathbb EX_1$，
$$
I(x)=\sup_{t\in\mathbb R}\{tx-K(t)\}.
$$
对 $\mu<a<\operatorname{ess\,sup}X_1$，有
$$
\lim_{n\to\infty}\frac1n\log P\left(\frac1n\sum_{k\le n}X_k\ge a\right)=-I(a).
$$
这里 $\operatorname{ess\,sup}$ 是[本质上确界（Essential supremum）](Essential-supremum.md)。全部实数上的指数矩假设是本卡选用的方便充分条件；仅在零附近有限的更一般版本见所引来源。[^1][^2]

> [!proof]- 证明
> 上界由指数 Markov 不等式：对 $t>0$，$P(S_n\ge na)\le\exp\{-n(ta-K(t))\}$，再对 $t$ 优化。由于 $K$ 严格凸，$a$ 在均值与支撑上端之间，存在唯一正数 $t_a$ 满足 $K'(t_a)=a$，它实现上确界。
>
> 为得下界，取 $a<b<\operatorname{ess\,sup}X_1$，选择 $t_b>0$ 使 $K'(t_b)=b$。定义倾斜后的单项分布 $dQ_b/dP=e^{t_bX_1-K(t_b)}$，并取其独立乘积。在 $Q_b$ 下各项均值为 $b$。若 $0<\varepsilon<b-a$，则
> $$
> \begin{aligned}
> P(S_n/n\ge a)
> &\ge P(|S_n/n-b|<\varepsilon)\\
> &\ge e^{-n[t_b(b+\varepsilon)-K(t_b)]}
> Q_b(|S_n/n-b|<\varepsilon).
> \end{aligned}
> $$
> [弱大数定律（Weak law of large numbers）](Weak-law-of-large-numbers.md)使最后的概率趋于 $1$。先取对数、除以 $n$，再令 $\varepsilon\downarrow0$、$b\downarrow a$，利用 $t_b\to t_a$ 得所需下界。

## Bernoulli 均值的速率

若 $X_k\sim\operatorname{Bernoulli}(p)$、$0<p<1$，则对 $0<x<1$，优化 $K(t)=\log(1-p+pe^t)$ 得
$$
I(x)=x\log\frac xp+(1-x)\log\frac{1-x}{1-p}.
$$
在 $x=p$ 取最小值零；在 $x>p$，它给出样本平均越过 $x$ 的指数衰减率。[Hoeffding 不等式（Hoeffding inequality）](Hoeffding-inequality.md)则给出更易用的非渐近上界，二者并非同一结论。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，式 (2.7.2)；Theorem 2.7.7。

[^2]: Bing-Yi Jing, *Advanced Probability Theory*, lecture notes, July 2012，Definition 11.6.1；Theorem 11.6.1。


