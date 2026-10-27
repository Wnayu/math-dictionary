---
title: "Lévy 过程（Lévy process）"
aliases: ["Lévy过程", "Lévy process", "独立平稳增量", "Stationary independent increments"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



Lévy 过程以独立、平稳的增量推广 Brownian 运动与 Poisson 过程。它把[无限可分分布（Infinitely divisible distribution）](Infinitely-divisible-distribution.md)组织成连续时间的随机过程。

## 定义

本条采用 càdlàg 版本：$\mathbb R^d$ 值过程 $L=(L_t)_{t\ge0}$ 满足 $L_0=0$ 几乎必然；对 $0\le t_0<\cdots<t_n$，增量 $L_{t_j}-L_{t_{j-1}}$ 相互独立；$L_{s+t}-L_s$ 与 $L_t$ 同分布；且 $L_t-L_s\to0$ 依概率当 $t\to s$。其路径右连续并有左极限，详见[随机过程（Stochastic process）](Stochastic-process.md)。[^1]

若只从独立平稳增量及随机连续性开始，可构造 càdlàg 修改；“有一个好版本”不是说原来任意逐时刻定义的版本都自动有好路径。

## 特征指数与分布半群

令 $\mu_t=\mathcal L(L_t)$，则 $\mu_{s+t}=\mu_s*\mu_t$、$\mu_0=\delta_0$ 且 $\mu_t\Rightarrow\delta_0$ 当 $t\downarrow0$，构成[卷积半群（Convolution semigroup）](Convolution-semigroup.md)。每个 $\mu_t$ 无限可分，且
$$
E e^{iu^TL_t}=e^{t\psi(u)},
$$
其中 $\psi$ 是[Lévy–Khintchine 公式（Lévy–Khintchine formula）](Levy-Khintchine-formula.md)中固定截断约定下的指数。

> [!proof]- 半群与无限可分性
> $L_{s+t}=L_s+(L_{s+t}-L_s)$ 是两个独立变量之和，第二项分布为 $\mu_t$，所以其分布为卷积。把 $[0,t]$ 等分为 $n$ 段，同理得到 $\mu_t=\mu_{t/n}^{*n}$。随机连续性给零时刻的弱收敛。固定 $u$ 后，特征函数关于时间满足连续乘法半群方程，值在零时刻为 $1$，因此为指数形式；其空间参数的具体表达由上述公式刻画。

## 例与分类

确定性漂移 $bt$、[Brownian 运动（Brownian motion）](Brownian-motion.md)、[Poisson 过程（Poisson process）](Poisson-process.md)、[复合 Poisson 过程（Compound Poisson process）](Compound-Poisson-process.md)及[稳定分布（Stable distribution）](Stable-distribution.md)对应的稳定 Lévy 过程都是实例。不同时间的 $L_s,L_t$ 通常不独立；定义要求的是不交时间段的增量独立。

跳幅及到达强度由[Lévy 测度（Lévy measure）](Levy-measure.md)控制，路径分解见[Lévy–Itô 分解（Lévy–Itô decomposition）](Levy-Ito-decomposition.md)。是否有限变差与是否有限跳跃活动是两个不同问题，见[Lévy 过程的路径变差（Path variation of Lévy processes）](Levy-path-variation.md)。

## 滤过条件

相对于一个滤过称 $L$ 为 Lévy 过程时，还要求 $L$ 适应，且 $L_t-L_s$ 独立于 $\mathcal F_s$。在自然滤过的通常增广下可保留这一性质；任意加入未来信息则不保证。随机积分、Markov 性及鞅论证使用的正是这种与滤过相容的增量条件。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: David Applebaum，*Lévy Processes and Stochastic Calculus*，第2版，Cambridge Studies in Advanced Mathematics 116，Cambridge University Press，2009，第43页；Proposition 1.3.1、Theorem 1.3.3、Proposition 1.4.4、Theorems 2.1.8、2.1.10。
