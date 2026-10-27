---
title: "Kolmogorov 扩张定理（Kolmogorov extension theorem）"
aliases: ["Kolmogorov 扩张定理", "Kolmogorov extension theorem", "Kolmogorov一致性定理", "Kolmogorov consistency theorem"]
type: theorem
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



Kolmogorov 扩张定理把彼此相容的有限维分布实现为一个随机过程。它首先解决概率测度的存在性，而非路径连续性。[^D][^L]

## 定义

设 $T$ 为任意参数集，$(E,\mathcal E)$ 为[标准 Borel 空间（Standard Borel space）](Standard-Borel-space.md)，即与某个完备可分度量空间的 Borel 子集在可测意义下同构。对每个有限集合 $F\subset T$ 给定 $E^F$ 上的概率测度 $\mu_F$。假设对 $F\subset G$，坐标投影 $\pi_{G,F}$ 满足
$$
(\pi_{G,F})_*\mu_G=\mu_F.
$$
则在 $E^T$ 的乘积 $\sigma$-代数上存在唯一概率测度 $P$，使各有限坐标投影的分布等于 $\mu_F$。坐标映射 $X_t(\omega)=\omega(t)$ 就是所需[随机过程（Stochastic process）](Stochastic-process.md)。

## 相容性与唯一性

按有序时刻给出分布时，还须保证重排坐标得到相同分布、删去坐标得到低维边缘。用有限集合表述已把排列问题包含在坐标标记中。

> [!proof]- 唯一性的证明
> 有限坐标柱集 $\pi_F^{-1}(A)$ 对有限交封闭，并生成乘积 $\sigma$-代数。两个满足要求的概率测度在这些柱集上一致，因此由[π–λ 定理（Pi-lambda theorem）](Pi-lambda-theorem.md)在整个乘积 $\sigma$-代数上一致。

存在性要证明柱集赋值可扩张为可列可加测度；一般可测状态空间并不自动满足要求。标准 Borel 条件下的构造见 Durrett §2.1 与 Le Gall §1.3；不能只凭有限可加性跳过这一步。

## 路径正则性的另一步

例如协方差 $\min(s,t)$ 的中心高斯有限维分布相容，因而先得到预 Brownian 过程；再用[Kolmogorov 连续性定理（Kolmogorov continuity theorem）](Kolmogorov-continuity-theorem.md)选择连续修改，才能得到通常意义的[Brownian 运动（Brownian motion）](Brownian-motion.md)。不可数参数下，连续路径事件本身还涉及所选路径空间的可测结构。

[概率论导航](../概率论导航.md)

## 参考文献

[^D]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §2.1，Theorems 2.1.21–2.1.22。

[^L]: Jean-François Le Gall, Brownian Motion, Martingales, and Stochastic Calculus, Graduate Texts in Mathematics 274, Springer, 2016. §1.3。
