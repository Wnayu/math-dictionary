---
title: "随机过程（Stochastic process）"
aliases: ["随机过程", "Stochastic process", "样本路径", "Sample path", "有限维分布", "Finite-dimensional distribution", "随机过程的修改", "不可区分", "Indistinguishable", "Càdlàg"]
type: concept
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



随机过程把一族随机变量按时间或其他参数组织起来；有限维分布描述有限次观察，样本路径描述整个参数上的行为。[^1][^2]

## 定义

给定[概率空间（Probability space）](Probability-measure.md)、参数集 $T$ 与可测空间 $(E,\mathcal E)$，随机过程是同一概率空间上的 $E$ 值[随机变量（Random variable）](Random-variable.md)族 $X=(X_t)_{t\in T}$。固定 $\omega$ 得到函数 $t\mapsto X_t(\omega)$，称为样本路径（sample path）。任意有限参数组对应的联合分布 $\mathcal L(X_{t_1},\ldots,X_{t_n})$ 称有限维分布（finite-dimensional distribution）。

当 $T=[0,\infty)$，称 $X$ 联合可测，如果 $(t,\omega)\mapsto X_t(\omega)$ 对 $\mathcal B([0,\infty))\otimes\mathcal F$ 可测。逐个 $t$ 的随机变量可测性本身不保证联合可测。适应性还涉及[滤过（Filtration）](Filtration.md)，是另一项条件。

## 路径正则性

对度量状态空间，连续路径指每个时刻连续；càdlàg 路径指右连续且每个 $t>0$ 存在有限左极限 $X_{t-}$；càglàd 路径指左连续且存在右极限。断言“几乎必然具有某种路径性质”，是指存在一个可测零集，零集外的整条路径具有该性质。$C([0,T],E)$ 和 $D([0,T],E)$ 分别表示连续路径与 càdlàg 路径的集合，讨论它们上的分布时还须指定所用的可测结构或拓扑。

## 修改与不可区分

同一概率空间上的 $X,Y$ 互为修改（modification），指对每个固定 $t$，$P(X_t=Y_t)=1$；不可区分（indistinguishable）指存在同一个可测零集 $N$，使每个 $\omega\notin N$、每个 $t$ 都有 $X_t(\omega)=Y_t(\omega)$。单个随机变量的版本见[几乎处处（Almost everywhere）](Almost-everywhere.md)。

例如令 $U$ 在 $[0,1]$ 上均匀分布，$X_t=0$、$Y_t=1_{\{U=t\}}$。每个固定 $t$ 都有 $X_t=Y_t$ 几乎必然，但每条 $Y$ 路径都在 $U$ 处取值 $1$，因此不满足不可区分性。它们甚至具有相同的所有有限维分布。

若两个互为修改的过程都在同一个余零集上右连续，且参数为 $[0,\infty)$，则不可区分。

> [!proof]- 证明
> 对所有非负有理数 $q$ 的等式 $X_q=Y_q$ 取可数交，再交上两过程的右连续路径事件，仍得概率 $1$ 的事件。在该事件上，任取 $t$，选有理数 $q_n\downarrow t$，由右连续性得 $X_t=\lim_nX_{q_n}=\lim_nY_{q_n}=Y_t$。

**注**：有限维分布相同只比较分布，互为修改还要求在同一概率空间上逐时几乎必然相等。这两种说法不能互换。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，Definitions 1.5、2.6–2.8、3.2；第54页。

[^2]: Russell Lyons，*Stochastic Calculus: Lecture notes based on the book by J.-F. Le Gall*，课程讲义，2025年8月10日，Definitions 1.5、2.6–2.8、3.2。
