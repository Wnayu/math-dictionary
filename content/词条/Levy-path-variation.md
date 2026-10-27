---
title: "Lévy 过程的路径变差（Path variation of Lévy processes）"
aliases: ["Lévy过程的路径变差", "Path variation of Lévy processes", "有限活动", "Finite activity", "无限活动", "Infinite activity"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



Lévy 过程的跳跃次数、路径总变差和随机变量的矩是三个不同层次。它们分别由 Lévy 测度的总质量、小跳一阶可积性和大跳尾部控制。

## 跳跃活动

对[Lévy 过程（Lévy process）](Levy-process.md)，若 $\nu(\mathbb R^d\setminus\{0\})<\infty$，称跳跃为有限活动（finite activity）；此时每个有限时间区间内跳跃数几乎必然有限。若该总质量为无穷，则为无限活动，在任意正长度时间区间内有无穷多次跳跃。[^1]

后一个结论可由递增的有限强度截断计数说明：截断计数的 Poisson 参数趋于无穷，所以对任意固定 $K$，整个计数不超过 $K$ 的概率为零。可数取所有有理端点区间，得到同时适用的路径陈述。

## 有限变差判据

三元组为 $(b,A,\nu)$ 的 Lévy 过程在紧时间区间上具有有限总变差，当且仅当
$$
A=0,\qquad\int_{0<|z|<1}|z|\nu(dz)<\infty.
$$
此时可写成
$$
L_t=\gamma t+\int_{(0,t]\times\{z\ne0\}}zN(ds,dz),\qquad
\gamma=b-\int_{0<|z|<1}z\nu(dz).
$$
总变差定义见[有界变差函数（Functions of bounded variation）](Bounded-variation.md)。

> [!proof]- 充分性及必要性的归属
> 小跳总绝对幅度的期望为 $T\int_{|z|<1}|z|\nu(dz)<\infty$，由[Poisson 随机测度的 Campbell 公式（Campbell formula for Poisson random measures）](Poisson-random-measure.md)可知其几乎必然有限。大跳是有限项和，漂移变差有限，故全路径有限变差。必要性还需排除高斯部分及证明无限小跳绝对幅度的发散；其完整论证引用 Applebaum §2.4 的路径变差讨论，不以充分性替代等价命题的全部证明。

## 无限活动但有限变差的例

取 $0<\alpha<1$，$\nu(dz)=c1_{\{z>0\}}z^{-1-\alpha}dz$。它在零点附近总质量无穷，但 $\int_0^1z\nu(dz)=c/(1-\alpha)<\infty$。对应的[次协调子（Subordinator）](Subordinator.md)有无穷多次小跳而路径单调、有限变差。

若 $1\le\alpha<2$，小跳二阶积分仍有限而一阶积分发散，对应纯跳过程不能按有限变差小跳和处理。另一方面，有非零 Gaussian 部分的连续 Lévy 过程虽没有任何跳跃，路径仍非有限变差。

**注**：有限变差是逐路径性质；复合 Poisson 过程可以有重尾跳幅和无限一阶绝对矩，同时每条紧区间路径仍有有限变差。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: David Applebaum, Lévy Processes and Stochastic Calculus, 2nd ed., Cambridge Studies in Advanced Mathematics 116, Cambridge University Press, 2009. §2.4中Lévy–Itô分解后的路径性质及次协调子判据；充分性和例为本条展开。
