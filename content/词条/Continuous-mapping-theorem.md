---
title: "连续映射定理（Continuous mapping theorem）"
aliases: ["连续映射定理", "Continuous mapping theorem"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



连续映射定理说明随机变量的极限可以通过在极限值处连续的函数传递。函数不必处处连续，但其不连续点不能被极限分布赋予正概率。[^1]

## 依分布版本

设实值随机变量 $X_n\Rightarrow X$，$g:\mathbb R\to\mathbb R$ 为 Borel 可测函数，$D_g$ 为其不连续点集。若 $P(X\in D_g)=0$，则 $g(X_n)\Rightarrow g(X)$；若 $g$ 另有界，则 $\mathbb Eg(X_n)\to\mathbb Eg(X)$。

> [!proof]- 证明
> 由 [Skorohod 表示定理（Skorohod representation theorem）](Skorohod-representation-theorem.md)，可选同分布副本 $Y_n\to Y$ 几乎必然。除去概率零的集合后，$g$ 在 $Y$ 处连续，故 $g(Y_n)\to g(Y)$ 几乎必然。于是对任意有界连续 $h$，控制收敛给出 $\mathbb Eh(g(Y_n))\to\mathbb Eh(g(Y))$，由同分布得到所需弱收敛。若 $g$ 有界，直接对 $g(Y_n)$ 用控制收敛即可。

## 其他收敛方式

若 $X_n\to X$ 几乎必然且 $g$ 在 $X$ 处几乎必然连续，则逐路径得到 $g(X_n)\to g(X)$ 几乎必然。若 $X_n\xrightarrow PX$，可用[子列原则（Subsequence principle）](Subsequence-principle.md)得到依概率版本。

## 不连续点的影响

令 $X_n=1/n$、$X=0$，$g(x)=1_{(0,\infty)}(x)$。虽然 $X_n\to0$，但 $g(X_n)=1$、$g(X)=0$，结论失败。问题正出在极限集中于不连续点。另一方面，若 $X$ 无原子，则对阈值函数 $g(x)=1_{(-\infty,a]}(x)$，条件 $P(X=a)=0$ 成立，因而可传递极限。

## 度量空间版本

若 $X_n,X$ 取值于度量空间 $S$，$X_n\Rightarrow X$，且 $g:S\to T$ 是到另一度量空间的 Borel 可测映射，满足 $P(X\in D_g)=0$，则仍有 $g(X_n)\Rightarrow g(X)$。这里弱收敛使用有界连续测试函数；向量版本取 $S=\mathbb R^d$、$T=\mathbb R^m$。以下由[Portmanteau 定理（Portmanteau theorem）](Portmanteau-theorem.md)给出该推广的证明。

> [!proof]- 证明
> 对 $T$ 中任一闭集 $C$，令 $A=g^{-1}(C)$。若 $x\in\overline A$ 且 $g$ 在 $x$ 连续，则存在 $x_k\in A$ 趋于 $x$，所以 $g(x)\in C$。故 $\overline A\subseteq A\cup D_g$。记 $\mu_n,\mu$ 为 $X_n,X$ 的分布，闭集版 Portmanteau 定理给出
> $$
> \limsup_nP(g(X_n)\in C)\le\limsup_n\mu_n(\overline A)
> \le\mu(\overline A)\le\mu(A)=P(g(X)\in C).
> $$
> 再用同一定理的逆向即得结论。

加法、乘法和除法的常见应用见[Slutsky 定理（Slutsky theorem）](Slutsky-theorem.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §3.2，Theorem 3.2.10；度量空间版本由本条给出的 Portmanteau 论证补充。
