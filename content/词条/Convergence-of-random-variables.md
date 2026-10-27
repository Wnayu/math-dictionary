---
title: "随机变量的收敛（Convergence of random variables）"
aliases: ["随机变量的收敛", "Convergence of random variables"]
type: concept
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



随机变量可以按样本路径、概率、积分或分布收敛。判断一个极限定理时，必须同时指出收敛方式、极限对象和是否要求共同概率空间。[^1][^2]

## 定义

设 $X_n,X$ 为同一概率空间上的实值随机变量。

| 收敛方式 | 判定条件 |
|---|---|
| 几乎必然收敛（almost sure convergence），$X_n\to X$ a.s. | $P(\lim_nX_n=X)=1$ |
| 依概率收敛（convergence in probability），$X_n\xrightarrow PX$ | 对每个 $\varepsilon>0$，$P(|X_n-X|>\varepsilon)\to0$ |
| $L^p$ 收敛（convergence in $L^p$），$p>0$ | $\mathbb E|X_n-X|^p\to0$；若作为 $L^p$ 空间元素讨论，另要求各变量的 $p$ 阶矩有限 |
| 依分布收敛（convergence in distribution），$X_n\Rightarrow X$ | $P_{X_n}\Rightarrow P_X$，即[概率测度弱收敛（Weak convergence of measures）](Weak-convergence-of-measures.md) |

最后一种只比较各变量的分布，不要求变量定义在同一概率空间。前三种则依赖变量之间的共同实现。

## 蕴含关系

几乎必然收敛推出依概率收敛；$L^p$ 收敛由 Markov 不等式推出依概率收敛；依概率收敛推出依分布收敛。前两者一般互不推出。相关积分收敛的条件见[一致可积性（Uniform integrability）](Uniform-integrability.md)与[Vitali 收敛定理（Vitali convergence theorem）](Vitali-convergence-theorem.md)。

> [!proof]- 证明
> 几乎必然收敛时，对固定 $\varepsilon>0$，$1_{\{|X_n-X|>\varepsilon\}}\to0$ 几乎必然，由控制收敛得其期望趋零。$L^p$ 收敛时，$P(|X_n-X|>\varepsilon)\le\varepsilon^{-p}\mathbb E|X_n-X|^p$。依概率到依分布的证明是：任意子列可再取几乎必然收敛子列，对每个有界连续 $f$ 应用控制收敛；子列原则迫使全列 $\mathbb Ef(X_n)\to\mathbb Ef(X)$。

## 逆命题及常数极限

独立事件 $A_n$ 满足 $P(A_n)=1/n$ 时，$1_{A_n}\xrightarrow P0$，但由 Borel–Cantelli 引理不几乎必然趋零。均匀概率空间 $(0,1)$ 上，$X_n=n1_{(0,1/n)}$ 几乎必然趋零，而 $\mathbb EX_n=1$，故不在 $L^1$ 中趋零。

若 $X$ 为对称非退化随机变量，$X_n=-X$ 与 $X$ 同分布，但一般不依概率趋于 $X$。然而，当依分布极限是常数 $c$ 时，$X_n\Rightarrow c$ 等价于 $X_n\xrightarrow Pc$：用 [Portmanteau 定理（Portmanteau theorem）](Portmanteau-theorem.md)控制闭集 $\{|x-c|\ge\varepsilon\}$ 即得。

依概率收敛的子列判据见[子列原则（Subsequence principle）](Subsequence-principle.md)。


把随机变量送入函数后是否保留收敛，见[连续映射定理（Continuous mapping theorem）](Continuous-mapping-theorem.md)；连续性须针对极限分布说明。度量化这些收敛方式的具体定义见[概率度量（Probability metrics）](Probability-metrics.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，第 67、116 页；Lemma 2.2.2；Theorem 2.3.2。

[^2]: Bing-Yi Jing, *Advanced Probability Theory*, lecture notes, July 2012，第 110–111 页；Theorems 6.3.1、6.4.1。


