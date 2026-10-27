---
title: "平稳过程（Stationary process）"
aliases: ["平稳过程", "Stationary process", "严格平稳", "Strict stationarity", "弱平稳", "Weak stationarity", "遍历性", "Ergodicity", "保测变换", "Measure-preserving transformation", "不变σ代数"]
type: concept
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



平稳性要求时间平移保持分布结构；它不包含独立性，也不自动给出时间平均等于总体均值。[^D]

## 定义

过程 $(X_t)$ 严格平稳（strictly stationary），指对任意有限时刻 $t_1,\ldots,t_n$ 及允许的平移 $h$，
$$
\mathcal L(X_{t_1+h},\ldots,X_{t_n+h})
=\mathcal L(X_{t_1},\ldots,X_{t_n}).
$$
若每个变量有有限二阶矩，仅要求均值不随时间改变、协方差依赖时间差，则称弱平稳或二阶平稳（weakly stationary / second-order stationary）。严格平稳不保证矩存在；具有二阶矩的严格平稳过程必然弱平稳。高斯过程因均值与协方差决定有限维分布，弱平稳即推出严格平稳。

## 移位表示与遍历性

在序列路径空间上定义移位 $\theta(x_0,x_1,\ldots)=(x_1,x_2,\ldots)$。严格平稳的路径分布 $P$ 满足 $P\circ\theta^{-1}=P$，称 $\theta$ 保持测度（measure preserving）。不变 $\sigma$-代数为
$$
\mathcal I=\{A:P(A\triangle\theta^{-1}A)=0\},
$$
在完备化意义下理解。若每个 $A\in\mathcal I$ 的概率都是 $0$ 或 $1$，称过程遍历（ergodic）。

## 平稳但不遍历的例子

令 $Z$ 为非退化 Bernoulli 变量，$X_n=Z$ 对所有 $n$。整个序列平移不变，因而严格平稳；但事件 $\{Z=1\}$ 不变且概率严格介于 $0$ 与 $1$，所以不遍历。时间平均恒等于 $Z$，不会趋于常数 $\mathbb EZ$。

平稳独立同分布序列是遍历的，因为不变事件可与任意有限初始段渐近分离，并用独立性及逼近得到其与自身独立。一般平稳过程的时间平均由[遍历定理（Ergodic theorem）](Ergodic-theorem.md)给出条件期望 $\mathbb E[X_0\mid\mathcal I]$。

[概率论导航](../概率论导航.md)

## 参考文献

[^D]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §§6.1–6.2。
