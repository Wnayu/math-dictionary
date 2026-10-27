---
title: "Lindeberg–Feller 定理（Lindeberg–Feller theorem）"
aliases: ["Lindeberg–Feller 定理", "Lindeberg–Feller theorem", "Lindeberg条件", "Lindeberg condition", "Lyapunov条件", "Lyapunov condition"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



Lindeberg 条件排除单个大跳跃对归一化总波动的显著贡献，从而允许独立但不同分布的三角阵列出现高斯极限。[^1]

## 定理

对每个 $n$，设 $X_{n1},\ldots,X_{nk_n}$ 相互独立、均值为零、方差有限，$s_n^2=\sum_{j\le k_n}\mathbb EX_{nj}^2>0$。若对每个 $\varepsilon>0$，
$$
L_n(\varepsilon)=\frac1{s_n^2}\sum_{j\le k_n}\mathbb E[X_{nj}^2 1_{\{|X_{nj}|>\varepsilon s_n\}}]\to0,
$$
则 $s_n^{-1}\sum_jX_{nj}\Rightarrow N(0,1)$。不同行之间不要求独立。

> [!proof]- 证明
> 写 $Y_{nj}=X_{nj}/s_n$，总方差为 $1$。先有
> $$
> \limsup_{n\to\infty}\max_j\mathbb EY_{nj}^2\le\varepsilon^2.
> $$
> 令 $\varepsilon\downarrow0$，即得最大单项方差趋零。对固定 $t$，用 $e^{iu}=1+iu-u^2/2+r(u)$，其中 $|r(u)|\le C|u|^2\min(|u|,1)$。按 $|Y_{nj}|\le\varepsilon$ 与补集分开，得到
> $$
> \sum_j|\mathbb Er(tY_{nj})|\le C_t\varepsilon+C_tL_n(\varepsilon).
> $$
> 先令 $n\to\infty$，再令 $\varepsilon\downarrow0$，可知左侧趋零。于是 $\sum_j(\varphi_{Y_{nj}}(t)-1)\to-t^2/2$，并且 $\max_j|\varphi_{Y_{nj}}(t)-1|\to0$。由 $|e^{iu}-1-iu|\le u^2/2$，这些差的绝对值之和有界，故其平方和趋零。使用零附近的 $\log(1+z)=z+O(|z|^2)$，独立性给出
> $$
> \log\prod_j\varphi_{Y_{nj}}(t)\to-t^2/2.
> $$
> 最后用 [Lévy 连续性定理（Lévy continuity theorem）](Levy-continuity-theorem.md)。

## Lyapunov 条件

若存在 $\delta>0$，使
$$
s_n^{-2-\delta}\sum_j\mathbb E|X_{nj}|^{2+\delta}\to0,
$$
则 $L_n(\varepsilon)\le\varepsilon^{-\delta}s_n^{-2-\delta}\sum_j\mathbb E|X_{nj}|^{2+\delta}\to0$。这是较强但常便于验证的 Lyapunov 条件（Lyapunov condition）。

**注**：总方差归一化是陈述的一部分。仅有各项趋于零或方差总和有限，并不足以替代 Lindeberg 条件。一个方差始终占全部方差的非高斯项就能破坏高斯极限。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Theorem 3.4.10；Exercise 3.4.12。
