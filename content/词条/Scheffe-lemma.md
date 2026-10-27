---
title: "Scheffé 引理（Scheffé lemma）"
aliases: ["Scheffe lemma", "Scheffé lemma", "谢费引理"]
tags: [measure-theory]
type: theorem
draft: false
publish: true
status: needs-review
verified: false
---



Scheffé 引理指出：对非负函数，几乎处处收敛再加总积分收敛，足以得到 [L1 收敛（Convergence in L1）](Convergence-in-L1.md)。这尤其适合概率密度。[^1]

## 定理

设 $f_n,f\ge0$ 可测，$f_n\to f$ 几乎处处，且 $\int f_n\,d\mu\to\int f\,d\mu<\infty$。则
$$
\int|f_n-f|\,d\mu\longrightarrow0.
$$

**注**：无需假设底层空间有限测度。

> [!proof]- 证明
> 利用恒等式 $|f_n-f|=f_n+f-2\min(f_n,f)$。因为 $\min(f_n,f)\to f$ 几乎处处且被可积函数 $f$ 控制，[控制收敛（Dominated convergence theorem）](Dominated-convergence-theorem.md)给出其积分趋于 $\int f$。代入恒等式即得结论。

## 实值与复值函数的版本

以下 $L^1=L^1(\mu)$ 是相对于同一参考测度 $\mu$ 的[可积函数空间（space of integrable functions）](Lp-space.md)，省略测度的积分均对 $\mu$ 计算。若 $f_n,f\in L^1$，$f_n\to f$ 几乎处处，且 $\int|f_n|\to\int|f|$，则 $f_n\to f$ 于 $L^1$。[^1]

> [!proof]- 证明
> 令 $h_n=|f_n|+|f|-|f_n-f|$。由三角不等式，$0\le h_n\le2|f|$，且 $h_n\to2|f|$ 几乎处处。控制收敛定理给出 $\int h_n\to2\int|f|$。于是
> $$
> \int|f_n-f|=\int|f_n|+\int|f|-\int h_n\to0.
> $$

## 概率密度

若每个 $f_n$ 及 $f$ 都是同一参考测度下的[概率密度（probability density）](Probability-measure.md)，积分均为 $1$，所以几乎处处收敛自动升级为 L1 收敛，并有对任意可测 $A$ 的一致估计
$$
\left|\int_Af_n\,d\mu-\int_Af\,d\mu\right|\le\int|f_n-f|\,d\mu.
$$

**注**：但只知道 $\int f_n=1$ 且 $f_n\to f$ 几乎处处，不能推断 $\int f=1$。例如在实直线的 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)下，记 $1_E$ 为[指示函数（indicator function）](Measurable-function.md)，则 $f_n=n1_{(0,1/n)}$ 几乎处处趋于零，积分始终为1；具体地，越来越小的集合 $(0,1/n)$ 承载了全部积分 $1$，而极限函数的积分为 $0$；这就是本例“质量集中”的含义，并使总积分收敛假设失败。这个例子也出现在[一致可积性（Uniform integrability）](Uniform-integrability.md)的讨论中。

## 积分收敛与 L1 收敛

**注**：反之，单独的积分值收敛并不够：$f_n=(-1)^n1_{(0,1)}+(-1)^{n+1}1_{(1,2)}$ 每项积分为零，却不在 $L^1$ 中趋于零。

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. 控制收敛定理7.9；§7.5，习题7.10（印刷 p.64）给出模长积分判据，习题7.9给出相关的非负函数逐集积分收敛结论。本条分别列出非负版本以及同时适用于实值、复值函数的模长判据证明。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
