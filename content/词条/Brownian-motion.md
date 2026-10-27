---
title: "Brownian 运动（Brownian motion）"
aliases: ["Brownian 运动", "Brownian motion", "布朗运动", "Wiener过程", "Wiener process", "Wiener测度", "Wiener measure"]
type: concept
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



Brownian 运动是具有连续路径和独立平稳高斯增量的随机过程，也是连续时间随机积分的基本驱动过程。[^L][^D][^Y]

## 定义

一维标准 Brownian 运动 $B=(B_t)_{t\ge0}$ 满足 $B_0=0$ 几乎必然、路径连续，并且对 $0=t_0<t_1<\cdots<t_n$，增量 $B_{t_j}-B_{t_{j-1}}$ 相互独立，分布为 $N(0,t_j-t_{j-1})$。

等价地，它是均值零、协方差 $\mathbb E[B_sB_t]=\min(s,t)$ 的连续[高斯过程（Gaussian process）](Gaussian-process.md)。$d$ 维标准 Brownian 运动由 $d$ 个独立一维标准 Brownian 运动组成，其增量协方差为 $(t-s)I_d$，其中 $I_d$ 为 $d$ 阶单位矩阵。

若指定滤过，还要求 $B$ 适应，且 $B_t-B_s$ 独立于 $\mathcal F_s$。自然滤过及其通常增广可使用；任意扩大滤过未必保持该性质。连续路径空间 $C([0,\infty),\mathbb R^d)$ 配备紧区间上一致收敛的拓扑及其 Borel $\sigma$-代数，Brownian 运动在这个空间上的分布称 Wiener 测度（Wiener measure）。

## 存在与缩放

协方差 $\min(s,t)$ 正半定，例如它等于 $L^2([0,\infty))$ 中 $1_{[0,s]}$ 与 $1_{[0,t]}$ 的内积。因此先由扩张定理构造高斯有限维分布。再利用
$$
\mathbb E|B_t-B_s|^p=c_p|t-s|^{p/2},\qquad c_p=\mathbb E|N(0,1)|^p,
$$
取 $p>2$ 并应用[Kolmogorov 连续性定理（Kolmogorov continuity theorem）](Kolmogorov-continuity-theorem.md)，得到连续修改。

对 $c>0$，$(c^{-1/2}B_{ct})_{t\ge0}$ 仍为标准 Brownian 运动：高斯、中心性、连续性保留，协方差为 $c^{-1}\min(cs,ct)=\min(s,t)$，故有限维分布相同。$-B$ 也同分布。

## 基本性质的归属

$B_t$ 与 $B_t^2-t$ 是鞅；对 $\theta\in\mathbb R$，$\exp(\theta B_t-\theta^2t/2)$ 是鞅。逐项验证只需条件于 $\mathcal F_s$ 后计算独立高斯增量的前两矩与指数矩。

路径在每个紧区间上几乎必然对任意 $\alpha<1/2$ Hölder 连续，但几乎必然处处不可微，且非退化区间上的总变差无穷。Hölder 结论由前述矩估计得到；不可微性完整证明见 Le Gall §2.3。沿二分网格的平方增量和趋于区间长度，见[二次变差（Quadratic variation）](Quadratic-variation.md)。

[强 Markov 性（Strong Markov property）](Strong-Markov-property.md)、[反射原理（Reflection principle）](Reflection-principle.md)、[Brownian 首达时刻（Brownian hitting times）](Brownian-hitting-times.md)及[Brownian 桥（Brownian bridge）](Brownian-bridge.md)分别承担这些性质的详细论证。

**注**：无穷总变差使普通路径意义的有限变差积分不适用；Brownian 驱动的积分由[随机积分（Stochastic integral）](Stochastic-integral.md)另行构造。


Brownian 路径加上一个确定性函数后，其概率律何时与原来的 Wiener 测度等价，见[Cameron–Martin 定理（Cameron–Martin theorem）](Cameron-Martin-theorem.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^L]: Jean-François Le Gall, Brownian Motion, Martingales, and Stochastic Calculus, Graduate Texts in Mathematics 274, Springer, 2016. §§2.1–2.4。

[^D]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §§7.1–7.5。

[^Y]: Russell Lyons, Stochastic Calculus: Lecture notes based on the book by J.-F. Le Gall, August 10, 2025，课程讲义。 第2章。
