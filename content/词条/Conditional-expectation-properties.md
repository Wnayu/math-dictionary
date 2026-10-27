---
title: "条件期望的性质（Properties of conditional expectation）"
aliases: ["条件期望的性质", "Properties of conditional expectation", "塔式性质", "Tower property", "条件Jensen不等式", "Conditional Jensen inequality"]
type: "theorem"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



本条集中说明条件期望的运算、收敛与投影性质。[条件期望（Conditional expectation）](Conditional-expectation.md)总览保留定义和结论概要；下面的等式均按几乎必然意义理解。

## 线性、保序与已知因子的提出

设 $X,Y$ 可积，$\mathcal G\subseteq\mathcal F$。则对常数 $a,b$，$E[aX+bY\mid\mathcal G]=aE[X\mid\mathcal G]+bE[Y\mid\mathcal G]$；若 $X\le Y$ 几乎必然，则相应条件期望保序。若 $Z$ 为 $\mathcal G$-可测且有界，则
$$
E[ZX\mid\mathcal G]=Z E[X\mid\mathcal G].
$$
对不有界 $Z$，只要 $X$ 和 $ZX$ 均可积，等式仍成立，且右侧可积。[^1]

> [!proof]- 证明
> 线性由对任意 $G\in\mathcal G$ 的积分恒等式及唯一性得到。保序先对 $Y-X\ge0$：若其条件期望为负的集合有正概率，则可在某个 $\{E[Y-X\mid\mathcal G]\le-1/n\}$ 上得到负积分，与非负原变量矛盾。因子提出先对 $Z=1_A$、$A\in\mathcal G$ 核对积分，再线性推广至简单函数、有界逼近推广至有界 $Z$。对一般 $Z$，截断 $Z_n=Z1_{\{|Z|\le n\}}$，先由非负变量的版本得到 $E[|ZX|\mid\mathcal G]=|Z|E[|X|\mid\mathcal G]$，再以此作为可积控制取极限。

## 塔式性质

若 $\mathcal H\subseteq\mathcal G$，则
$$
E[E[X\mid\mathcal G]\mid\mathcal H]=E[X\mid\mathcal H],\qquad
E[E[X\mid\mathcal H]\mid\mathcal G]=E[X\mid\mathcal H].
$$

> [!proof]- 证明
> 第一式左侧 $\mathcal H$-可测；对 $H\in\mathcal H\subseteq\mathcal G$，两次条件期望的积分等于 $\int_HX\,dP$，故由唯一性得到。第二式因为 $E[X\mid\mathcal H]$ 已是 $\mathcal G$-可测。若两个 σ-代数不包含，不能无条件交换两次条件化的顺序。

## 条件 Jensen 与收缩

若 $\varphi:\mathbb R\to\mathbb R$ 有限凸，$X,\varphi(X)$ 可积，则 $\varphi(E[X\mid\mathcal G])\le E[\varphi(X)\mid\mathcal G]$。因此对 $1\le p\le\infty$，$X\in L^p$ 时 $\|E[X\mid\mathcal G]\|_p\le\|X\|_p$。

> [!proof]- 条件 Jensen 的支撑直线证明
> 有限凸函数可写成可数条仿射下支撑函数的上确界 $\varphi(x)=\sup_n(a_nx+b_n)$，例如在稠密可数点上选支撑斜率。因为 $\varphi(X)\ge a_nX+b_n$，保序和线性给 $E[\varphi(X)\mid\mathcal G]\ge a_nE[X\mid\mathcal G]+b_n$。对可数个 $n$ 取共同满测集后再取上确界。$p<\infty$ 取 $\varphi(x)=|x|^p$ 并取期望；$p=\infty$ 由 $-|X|\le X\le|X|$ 及本质上界直接得到。复值情形先使用 $|E[X\mid\mathcal G]|\le E[|X|\mid\mathcal G]$，再应用实非负函数的结论。

## 条件收敛

非负 $X_n\uparrow X$ 时，$E[X_n\mid\mathcal G]\uparrow E[X\mid\mathcal G]$，允许 $+\infty$；这是通过对每个 $G\in\mathcal G$ 用单调收敛验证积分恒等式。若 $X_n\to X$ 几乎必然且 $|X_n|\le Y$、$EY<\infty$，则条件期望几乎必然且在 $L^1$ 收敛。

> [!proof]- 条件控制收敛
> $Z_n=\sup_{k\ge n}|X_k-X|$ 递减到零且 $Z_n\le2Y$。条件单调收敛应用于 $2Y-Z_n$ 得 $E[Z_n\mid\mathcal G]\downarrow0$。又 $|E[X_n-X\mid\mathcal G]|\le E[Z_n\mid\mathcal G]$，得几乎必然收敛；$L^1$ 收敛由收缩性及普通控制收敛得到。

## 正交投影

若 $X\in L^2$，令 $Y=E[X\mid\mathcal G]$。对每个 $Z\in L^2(\mathcal G)$，$E[(X-Y)\overline Z]=0$；有界 $Z$ 由提出因子得到，一般 $Z$ 用 $L^2$ 截断逼近。因此对任何 $Z\in L^2(\mathcal G)$，
$$
E|X-Z|^2=E|X-Y|^2+E|Y-Z|^2.
$$
这给出均方意义下的最佳预测及其唯一性，参见[内积空间（Inner product space）](Inner-product-space.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §4.1.2；Chen Wang, Lecture Notes on Stochastic Processes，个人笔记，第1章。
