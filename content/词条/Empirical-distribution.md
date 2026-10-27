---
title: "经验分布（Empirical distribution）"
aliases: ["经验分布", "Empirical distribution", "经验分布函数", "Empirical distribution function", "经验测度", "Empirical measure", "经验过程", "Empirical process", "Glivenko–Cantelli定理", "Glivenko–Cantelli theorem", "Kolmogorov–Smirnov统计量"]
type: concept
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



经验分布把每个观测值赋予相同的质量，用有限样本近似其公共分布。经验分布函数的一致收敛比逐点频率收敛更强，并且不要求真实分布连续。[^1]

## 定义

设实值随机变量 $X_1,X_2,\ldots$ 独立同分布，公共分布为 $\mu$，分布函数为 $F(x)=P(X_1\le x)$。经验测度（empirical measure）及经验分布函数（empirical distribution function）定义为
$$
\widehat\mu_n=\frac1n\sum_{k=1}^n\delta_{X_k},\qquad
\widehat F_n(x)=\widehat\mu_n(( -\infty,x])
=\frac1n\sum_{k=1}^n1_{\{X_k\le x\}}.
$$
$\delta_a$ 是质量集中在 $a$ 的[Dirac 测度（Dirac measure）](Dirac-measure.md)。$\widehat\mu_n$ 是随样本变化的概率测度，$\widehat F_n$ 是右连续阶梯函数；重复观测会使某处跳跃大于 $1/n$。分布函数与分布的关系见[随机变量的分布（Law of a random variable）](Law-of-a-random-variable.md)。

## Glivenko–Cantelli 定理

不论 $F$ 是否有原子，都有
$$
\sup_{x\in\mathbb R}|\widehat F_n(x)-F(x)|\longrightarrow0
\quad\text{几乎必然}.
$$
上确界定义了可测随机变量：因为两函数均右连续，对所有实数的上确界等于对有理数的上确界。因而此结论在一个共同的满概率事件上同时控制全部阈值，不能只凭对每个固定 $x$ 分别使用大数定律便结束证明。

> [!proof]- 证明
> 对每个固定 $x$，[强大数定律（Strong law of large numbers）](Strong-law-of-large-numbers.md)分别应用于 $1_{\{X_k\le x\}}$ 和 $1_{\{X_k<x\}}$，给出
> $$
> \widehat F_n(x)\to F(x),\qquad
> \widehat F_n(x-)\to F(x-)
> \quad\text{几乎必然},
> $$
> 其中 $F(x-)=P(X_1<x)$ 是左极限，经验函数的左极限相应只计数严格小于 $x$ 的观测。
>
> 对整数 $m\ge2$，取分位网格 $q_{j,m}=\inf\{x:F(x)\ge j/m\}$，$1\le j<m$，另设 $q_{0,m}=-\infty$、$q_{m,m}=+\infty$。有限网格点可能重复，这正是跳跃跨越多个分位水平时的情况。对每个 $m$ 的所有有限网格点同时取左右两侧的收敛事件，再对可数个 $m$ 取交，得到一个满概率事件。
>
> 在此事件上固定 $m$。记 $e_{n,m}$ 为全部有限网格点处 $|\widehat F_n(q)-F(q)|$ 与 $|\widehat F_n(q-)-F(q-)|$ 的最大值，则 $e_{n,m}\to0$。端点 $-\infty,+\infty$ 的函数值约定为 $0,1$，相应误差为零。
>
> 若 $x$ 是网格点，其误差不超过 $e_{n,m}$。若不是，可选相邻且不同的网格点使 $q_{j-1,m}<x<q_{j,m}$。分位定义给出
> $$
> F(q_{j,m}-)-F(q_{j-1,m})\le\frac1m.
> $$
> 利用两函数的单调性与左右端点估计，
> $$
> \begin{aligned}
> \widehat F_n(x)-F(x)
> &\le\widehat F_n(q_{j,m}-)-F(q_{j-1,m})\le e_{n,m}+1/m,\\
> F(x)-\widehat F_n(x)
> &\le F(q_{j,m}-)-\widehat F_n(q_{j-1,m})\le e_{n,m}+1/m.
> \end{aligned}
> $$
> 故全实轴上确界不超过 $e_{n,m}+1/m$。先令 $n\to\infty$，再令 $m\to\infty$，即得一致几乎必然收敛。左极限控制避免把某个大原子的跳跃错误地当作小网格误差。

## 经验过程与 Brownian 桥

经验过程（empirical process）是中心化放大的函数族
$$
\alpha_n(x)=\sqrt n\,[\widehat F_n(x)-F(x)],\qquad x\in\mathbb R.
$$
对任意有限阈值 $x_1,\ldots,x_r$，向量中心极限定理给出 $(\alpha_n(x_1),\ldots,\alpha_n(x_r))$ 收敛到中心高斯向量，其协方差为
$$
F(\min(x_i,x_j))-F(x_i)F(x_j).
$$
这是[Brownian 桥（Brownian bridge）](Brownian-bridge.md) $\beta$ 经 $x\mapsto F(x)$ 换时后的有限维协方差。因此
$$
(\alpha_n(x_1),\ldots,\alpha_n(x_r))\Rightarrow
(\beta_{F(x_1)},\ldots,\beta_{F(x_r)}).
$$
此处只陈述有限维分布结论；推导是对有界独立同分布指标向量使用[向量中心极限定理（Multivariate central limit theorem）](Central-limit-theorem.md)，协方差来自 $1_{\{X\le x_i\}}1_{\{X\le x_j\}}=1_{\{X\le\min(x_i,x_j)\}}$。

若进一步假设 $F$ 连续，Durrett Theorem 8.4.3 给出 Kolmogorov–Smirnov 统计量（Kolmogorov–Smirnov statistic）的极限
$$
\sqrt n\,\sup_x|\widehat F_n(x)-F(x)|
\Rightarrow\sup_{0\le t\le1}|\beta_t|.
$$
这是实值统计量的依分布收敛。教材先用连续 $F$ 化为均匀样本，再把次序统计量表示为指数变量部分和的比值，应用[Donsker 定理（Donsker theorem）](Donsker-theorem.md)在 $C([0,1])$ 一致拓扑中的线性插值版本；最后使用连续泛函 $f\mapsto\sup_t|f(t)-tf(1)|$。其详细论证见 §8.4。原经验函数有跳跃，不能直接把 $\alpha_n$ 作为 $C([0,1])$ 中的随机元素而宣称路径弱收敛。

**注**：连续性假设用于上述统一的 Kolmogorov–Smirnov 极限，未用于 Glivenko–Cantelli 定理。有原子时，$F(X_1)$ 一般不是均匀分布；不能在未核对条件时使用这个概率积分变换。

## 与其他分布收敛的关系

Glivenko–Cantelli 给出几乎每个样本上 $\widehat\mu_n\Rightarrow\mu$，即[概率测度的弱收敛（Weak convergence of probability measures）](Weak-convergence-of-measures.md)。它并不保证对所有 Borel 集的质量误差一致趋零：若 $\mu$ 无原子，有限观测集 $A_n=\{X_1,\ldots,X_n\}$ 满足 $\widehat\mu_n(A_n)=1$、$\mu(A_n)=0$，所以每个 $n$ 都有 $\sup_{A\in\mathcal B(\mathbb R)}|\widehat\mu_n(A)-\mu(A)|=1$。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §2.4，Example 2.4.8、Theorem 2.4.9；§8.4，Theorems 8.4.1、8.4.3。有限维经验过程极限与末段的集合误差比较为本条展开。
