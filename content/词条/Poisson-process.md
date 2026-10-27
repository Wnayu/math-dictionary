---
title: "Poisson 过程（Poisson process）"
aliases: ["Poisson过程", "Poisson process", "泊松过程", "到达时间", "Arrival time"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



Poisson 过程描述以恒定速率出现、具有独立增量的单位事件计数。其“强度”是单位时间平均事件数。

## 定义

参数 $\lambda\ge0$ 的 Poisson 过程是从 $N_0=0$ 出发、具有右连续且有左极限的非降整数值路径的过程，具有独立增量，且
$$
N_t-N_s\sim\operatorname{Poisson}(\lambda(t-s)),\qquad 0\le s<t.
$$
这里分布的概率质量函数见[常用概率分布（Common probability distributions）](Common-probability-distributions.md)，路径术语见[随机过程（Stochastic process）](Stochastic-process.md)。它是特殊的[Lévy 过程（Lévy process）](Levy-process.md)。[^1]

## 等待时间构造

设 $\lambda>0$，$E_1,E_2,\ldots$ 独立同分布为参数 $\lambda$ 的指数分布，令 $T_n=\sum_{j=1}^nE_j$，$N_t=\sum_{n\ge1}1_{\{T_n\le t\}}$。则 $T_n\to\infty$ 几乎必然，且 $N$ 为上述 Poisson 过程。$T_n$ 称第 $n$ 次到达时间，$E_n$ 称相邻到达的等待时间。

> [!proof]- 计数分布与独立增量
> $P(E_1>u+v\mid E_1>u)=e^{-\lambda v}$ 给出无记忆性。给定时刻 $s$ 之前的到达历史，下一次到达的剩余等待时间仍为指数分布，且与之后的独立等待时间共同生成与过去独立的新计数过程。因而增量独立且平稳。又 $T_n$ 的密度为 $\lambda^n t^{n-1}e^{-\lambda t}/(n-1)!$，由卷积归纳得到。于是 $P(N_t=n)=P(T_n\le t<T_{n+1})=e^{-\lambda t}(\lambda t)^n/n!$；$n=0$ 直接用指数尾概率。强大数定律给 $T_n/n\to1/\lambda$，故有限时间内到达数有限。

## 补偿与二阶性质

$\mathbb EN_t=\operatorname{Var}(N_t)=\lambda t$。相对于自然滤过，$M_t=N_t-\lambda t$ 是平方可积[鞅（Martingale）](Martingale.md)，因为 $\mathbb E[N_t-N_s\mid\mathcal F_s]=\lambda(t-s)$。其二次变差为 $[M]_t=N_t$，可预测二次变差为 $\langle M\rangle_t=\lambda t$，两者含义见[可预测二次变差（Predictable quadratic variation）](Predictable-quadratic-variation.md)。[^2]

## 稀疏化与叠加

独立的强度 $\lambda_1,\lambda_2$ 的 Poisson 过程相加仍为 Poisson 过程，强度为两者之和。若每次到达独立地以概率 $p$ 保留，保留计数与删除计数是独立 Poisson 过程，强度分别为 $p\lambda,(1-p)\lambda$。

> [!proof]- 稀疏化的联合生成函数
> 固定长度 $t$ 的区间，给定总计数 $N$ 后，各次独立分类，故保留数 $K$ 与删除数 $R$ 满足 $E[z^Kw^R\mid N]=(pz+(1-p)w)^N$。对 Poisson 分布求和得到 $E[z^Kw^R]=\exp(\lambda tp(z-1))\exp(\lambda t(1-p)(w-1))$。它分解为两个 Poisson 生成函数；不相交时间区间使用独立增量，得到整个过程结论。

**注**：确定性变速率的非齐次 Poisson 过程一般不具有平稳增量。只知道每个时刻的计数边缘分布，并不足以给出本定义中的过程独立性。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett，*Probability: Theory and Examples*，Version 5，2019年1月11日，第175–176页；Theorem 3.7.4。

[^2]: David Applebaum，*Lévy Processes and Stochastic Calculus*，第2版，Cambridge Studies in Advanced Mathematics 116，Cambridge University Press，2009，Example 1.3.9、Exercise 2.1.4；式 (4.15)。
