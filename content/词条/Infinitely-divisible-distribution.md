---
title: "无限可分分布（Infinitely divisible distribution）"
aliases: ["无限可分分布", "Infinitely divisible distribution", "无穷可分分布"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



无限可分性说的是：一个分布可以对每个正整数拆成若干独立同分布增量之和的分布。不同拆分层数可以使用不同的增量分布。

## 定义

$\mathbb R^d$ 上概率测度 $\mu$ 称无限可分，若对每个整数 $n\ge1$ 存在概率测度 $\mu_n$，使 $\mu=\mu_n^{*n}$。这里 $*$ 为[测度卷积（Convolution of measures）](Convolution-of-measures.md)。等价地，对每个 $n$ 可找到独立同分布向量 $X_{n,1},\ldots,X_{n,n}$，使其和的分布为 $\mu$。不要求不同 $n$ 的整张数组定义在原来的概率空间上。[^1]

## 例

高斯分布 $N(m,A)$ 的卷积 $n$ 次根可取 $N(m/n,A/n)$，允许 $A$ 半正定。Poisson 分布的参数按 $1/n$ 缩放；[复合 Poisson 分布（Compound Poisson distribution）](Compound-Poisson-process.md)也只需把到达强度除以 $n$。常数 $a$ 的点质量由 $n$ 个常数 $a/n$ 相加得到。

## 特征函数判别

无限可分分布的[特征函数（Characteristic function）](Characteristic-function.md)具有[Lévy–Khintchine 公式（Lévy–Khintchine formula）](Levy-Khintchine-formula.md)给出的指数形式，因而在整个 $\mathbb R^d$ 上没有零点。公平 Bernoulli 变量的特征函数 $(1+e^{iu})/2$ 在 $u=\pi$ 处为零，所以不是无限可分分布。

**注**：无零点是必要条件，不能仅据此推断无限可分。需要指数具有规定的漂移、高斯项和 Lévy 测度结构。

## 与 Lévy 过程的关系

若 $L$ 是[Lévy 过程（Lévy process）](Levy-process.md)，则固定 $t$ 时
$$
L_t=\sum_{k=1}^n(L_{kt/n}-L_{(k-1)t/n})
$$
给出独立同分布分解，所以 $L_t$ 的分布无限可分。反过来，每个无限可分分布都能作为某个 Lévy 过程在时刻 $1$ 的分布；其构造需同时安排所有时间增量及路径版本，详见[Lévy–Itô 分解（Lévy–Itô decomposition）](Levy-Ito-decomposition.md)，不能仅由各个 $n$ 的存在性跳过过程构造。

独立无限可分变量相加仍无限可分：取各自的 $n$ 次卷积根，再将这两个根卷积，所得的 $n$ 次卷积就是原来两分布的卷积。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: David Applebaum, Lévy Processes and Stochastic Calculus, 2nd ed., Cambridge Studies in Advanced Mathematics 116, Cambridge University Press, 2009. §1.2；Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §3.9。
