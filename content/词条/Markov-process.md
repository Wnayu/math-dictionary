---
title: "Markov 过程（Markov process）"
aliases: ["Markov 过程", "Markov process"]
type: concept
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



Markov 过程把 Markov 链推广到一般状态空间与连续时间；其核心是关于整个过去信息的条件分布公式。[^L][^Y][^G]

## 定义

给定可测空间 $(E,\mathcal E)$、滤过 $(\mathcal F_t)$ 及[转移半群（Transition semigroup）](Chapman-Kolmogorov-equations.md) $(P_t)$。适应过程 $X_t$ 称为具有该半群的时间齐次 Markov 过程，如果对所有有界可测 $f$、$s,t\ge0$，
$$
\mathbb E[f(X_{s+t})\mid\mathcal F_s]=P_tf(X_s)\quad\text{几乎必然}.
$$
取 $f=1_A$ 即为条件概率版本。若未指定滤过，使用[自然滤过（Natural filtration）](Filtration.md)。这里的“只依赖当前”由公式严格表达，不能只凭直观解释判定。

## 有限维分布

若 $X_0$ 的分布为 $\mu$，则对 $0=t_0<t_1<\cdots<t_n$，
$$
\begin{aligned}
&P(X_{t_0}\in A_0,\ldots,X_{t_n}\in A_n)\\
&=\int_{A_0}\mu(dx_0)\int_{A_1}P_{t_1}(x_0,dx_1)\cdots
\int_{A_n}P_{t_n-t_{n-1}}(x_{n-1},dx_n).
\end{aligned}
$$

> [!proof]- 证明
> 把联合事件的指标函数写成乘积。在 $\mathcal F_{t_{n-1}}$ 上取条件期望，用 Markov 性把最后一个指标函数替换为 $P_{t_n-t_{n-1}}1_{A_n}(X_{t_{n-1}})$。依次对倒数第二个、第三个时刻重复，最终留下初始分布上的积分。

在标准 Borel 状态空间上，这些一致的有限维分布可由[Kolmogorov 扩张定理（Kolmogorov extension theorem）](Kolmogorov-extension-theorem.md)实现。扩张本身不保证连续或 càdlàg 路径；[Feller 半群（Feller semigroup）](Feller-semigroup.md)与路径正则化需要另外的结构。

## 确定时刻与随机时刻

定义只断言确定 $s$ 时的条件关系。[强 Markov 性（Strong Markov property）](Strong-Markov-property.md)将 $s$ 替换为停时，是额外性质。Brownian 运动和适当正则的 Feller 过程具有它，不能对任意 Markov 过程不加条件地使用。

[概率论导航](../概率论导航.md)

## 参考文献

[^L]: Jean-François Le Gall, Brownian Motion, Martingales, and Stochastic Calculus, Graduate Texts in Mathematics 274, Springer, 2016. §6.1。

[^Y]: Russell Lyons, Stochastic Calculus: Lecture notes based on the book by J.-F. Le Gall, August 10, 2025，课程讲义。 §6.1。

[^G]: Chen Wang, Notes on GTM 274，个人笔记。 1.5，Markov过程定义与有限维分布公式。
