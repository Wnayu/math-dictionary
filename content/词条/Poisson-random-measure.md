---
title: "Poisson 随机测度（Poisson random measure）"
aliases: ["Poisson随机测度", "Poisson random measure", "强度测度", "Intensity measure", "Poisson点过程", "Poisson point process"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



Poisson 随机测度同时记录事件发生的位置和数目。时间与跳幅作为联合坐标时，它是构造跳跃过程和跳跃随机积分的基础。

## 定义

设 $(E,\mathcal E)$ 配非负 σ-有限测度 $m$。本条中的 Poisson 随机测度 $N$ 是随机的计数测度：对每个 $\omega$，$N(\omega,\cdot)$ 可列可加、取值于 $\{0,1,\ldots,\infty\}$；对每个 $A\in\mathcal E$，$N(A)$ 可测。还要求当 $m(A)<\infty$ 时 $N(A)\sim\operatorname{Poisson}(m(A))$，且互不相交的有限测度集合上的计数相互独立。$m(A)=EN(A)$ 称强度测度（intensity measure）。[^1]

在本文所用的标准 Borel 空间与 σ-有限强度下，这种随机测度可构造。每块有限强度空间先抽取 Poisson 点数，再按归一化强度独立选点；对可数不交的有限强度分块作独立叠加即得。允许点重合，故强度有原子时不必是每点至多一个的简单点过程。

## Campbell 公式与 Laplace 泛函

对非负可测 $f$，$\int f\,dN$ 是随机测度积分，等于各点上函数值按重数相加。它满足
$$
E\int_E f\,dN=\int_E f\,dm,\qquad
E\exp\left(-\int_E f\,dN\right)=\exp\left(-\int_E(1-e^{-f})\,dm\right).
$$
右侧允许 $+\infty$ 的积分，约定 $e^{-\infty}=0$。

> [!proof]- 证明
> 对有限强度的不交集合 $A_j$ 与 $f=\sum_j c_j1_{A_j}$，第一个等式来自 $EN(A_j)=m(A_j)$。第二个等式用独立性及 Poisson 分布的恒等式 $Ee^{-cN(A)}=\exp(m(A)(e^{-c}-1))$。一般非负 $f$ 通过有限强度集合上的简单函数递增逼近；第一式用单调收敛，第二式左侧用有界收敛，右侧用单调收敛。

## 时间与标记

在 $E=(0,\infty)\times(\mathbb R^d\setminus\{0\})$ 上取 $m(ds,dz)=ds\nu(dz)$。则 $N((0,t]\times B)$ 记录时刻 $t$ 以前、跳幅在 $B$ 内的事件数；当 $\nu(B)<\infty$ 时，它是速率 $\nu(B)$ 的[Poisson 过程（Poisson process）](Poisson-process.md)。对 Lévy 过程，其跳跃随机测度为
$$
N((0,t]\times B)=\sum_{0<s\le t}1_B(\Delta X_s),\qquad\Delta X_s=X_s-X_{s-}.
$$
这里使用[随机过程的左极限（Left limits of a stochastic process）](Stochastic-process.md)。过程构造和高斯部分的独立性见[Lévy–Itô 分解（Lévy–Itô decomposition）](Levy-Ito-decomposition.md)。

**注**：强度 $m$ 是确定性测度，$N$ 是随机测度；二者不能都简称“测度”而在同一公式中省略区别。$N-m$ 只在两项均有限的集合上直接相减；无限强度上的补偿通过积分极限定义。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: David Applebaum, Lévy Processes and Stochastic Calculus, 2nd ed., Cambridge Studies in Advanced Mathematics 116, Cambridge University Press, 2009. §2.3，尤其定理2.3.6；Campbell与Laplace等式为本条按Poisson计数性质展开。
