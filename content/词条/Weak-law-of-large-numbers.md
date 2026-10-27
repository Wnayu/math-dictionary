---
title: "弱大数定律（Weak law of large numbers）"
aliases: ["弱大数定律", "Weak law of large numbers"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



弱大数定律说明样本平均在依概率意义下接近总体均值；它不自动给出单条无限样本路径的收敛。[^1]

## 独立同分布可积版本

设 $X_1,X_2,\ldots$ 独立同分布，$\mathbb E|X_1|<\infty$，$\mu=\mathbb EX_1$。则
$$
\overline X_n=\frac1n\sum_{k=1}^nX_k\xrightarrow{P}\mu.
$$
记号 $\xrightarrow P$ 表示[依概率收敛（Convergence in probability）](Convergence-of-random-variables.md)。不要求有限方差。

> [!proof]- 证明
> 固定 $K>0$，令 $Y_k=X_k1_{\{|X_k|\le K\}}$、$R_k=X_k-Y_k$。有界独立变量满足
> $$
> P\left(\left|\frac1n\sum_{k=1}^n(Y_k-\mathbb EY_k)\right|>\varepsilon\right)
> \le\frac{\operatorname{Var}(Y_1)}{n\varepsilon^2}\to0.
> $$
> 另一方面，Markov 不等式给出
> $$
> P\left(\frac1n\sum_{k=1}^n|R_k|>\varepsilon\right)
> \le\frac{\mathbb E(|X_1|1_{\{|X_1|>K\}})}\varepsilon,
> $$
> 而 $|\mu-\mathbb EY_1|$ 也不超过同一尾部期望。可积性使其随 $K\to\infty$ 趋零。先选 $K$ 控制尾项，再令 $n\to\infty$，由三角不等式得到结论。

## 方差判据

若 $X_k$ 两两不相关、二阶可积，且 $n^{-2}\sum_{k\le n}\operatorname{Var}(X_k)\to0$，则
$$
\frac1n\sum_{k=1}^n(X_k-\mathbb EX_k)\xrightarrow P0.
$$
直接对部分和使用 [Chebyshev 不等式（Chebyshev inequality）](Markov-inequality.md)即可；这里不需要同分布或相互独立。

## 与强大数定律的关系

[强大数定律（Strong law of large numbers）](Strong-law-of-large-numbers.md)给出更强的几乎必然收敛。上述独立同分布可积假设事实上也保证强大数定律，但弱大数定律还存在不可积的其他版本；因此不能把“均值有限”说成所有弱大数定律的必要条件。若 $X_k$ 是标准 Cauchy 独立变量，则其平均仍有标准 Cauchy 分布，不集中于任何常数；这一例子说明可积性不能直接从上述陈述中删去。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Theorems 2.2.6、2.2.14；Example 2.2.15。
