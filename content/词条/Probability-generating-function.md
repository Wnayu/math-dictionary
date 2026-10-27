---
title: "概率生成函数（Probability generating function）"
aliases: ["概率生成函数", "Probability generating function", "PGF"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



概率生成函数把非负整数分布写成幂级数，适合处理计数、独立和及分枝过程。

## 定义

若 $N$ 取值于 $\{0,1,\ldots\}$，定义 $G_N(z)=Ez^N=\sum_{k=0}^\infty P(N=k)z^k$，至少在复数 $|z|\le1$ 绝对收敛；在 $z=0,N=0$ 的项按常数项 $1$ 解释。系数确定分布：$P(N=k)=G_N^{(k)}(0)/k!$。[^1]

## 独立和与随机和

若 $N_1,N_2$ 独立，则 $G_{N_1+N_2}=G_{N_1}G_{N_2}$。若 $M$ 为非负整数值随机变量，且与整个独立同分布序列 $(N_j)$ 独立，则对 $0\le z\le1$，随机和 $S=\sum_{j=1}^MN_j$ 满足 $G_S(z)=G_M(G_{N_1}(z))$；给定 $M=m$ 后乘积为 $G_{N_1}(z)^m$，再取期望即可。

## 阶乘矩

阶乘矩（factorial moment）使用相邻递减整数的乘积。对正整数 $r\ge1$，从左侧趋向 $1$ 时，$G_N^{(r)}(1-)=E[N(N-1)\cdots(N-r+1)]$，允许为无穷。

> [!proof]- 证明
> 在 $0<z<1$ 内逐项求导得到非负级数 $\sum_{k\ge r}k(k-1)\cdots(k-r+1)P(N=k)z^{k-r}$。令 $z\uparrow1$，由单调收敛得到结论。导数在端点有限与否必须由这个阶乘矩条件判断。

## 例

Bernoulli 分布有 $G(z)=1-p+pz$，二项分布有 $G(z)=(1-p+pz)^n$，Poisson 分布有 $G(z)=e^{\lambda(z-1)}$；参数和质量函数见[常用概率分布（Common probability distributions）](Common-probability-distributions.md)。[分枝过程（Branching process）](Branching-process.md)的灭绝概率满足后代生成函数的不动点方程，其最小解而非任意解才对应从一个祖先出发的灭绝概率。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §3.7与§4.3.4；生成函数系数与阶乘矩由幂级数展开。
