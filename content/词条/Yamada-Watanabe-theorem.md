---
title: "Yamada–Watanabe 定理（Yamada–Watanabe theorem）"
aliases:
  - "Yamada–Watanabe 定理"
  - "Yamada–Watanabe theorem"
type: theorem
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



Yamada–Watanabe 定理把弱解的存在与路径唯一性结合起来，从而得到强解和依分布唯一性。它允许把“先构造某个概率空间上的解”与“在同一噪声下比较解”分开处理。

## 陈述

对有限维 Brownian 驱动的 [Itô SDE（Itô stochastic differential equation）](Stochastic-differential-equation.md)，在通常的 Borel 可测系数框架下，固定初值 $x$。若弱解存在，并且路径唯一性成立，则依分布唯一性成立；对任意给定的 Brownian 运动，存在适应其完备自然滤过的强解。解的含义与可积要求按[强解与弱解（Strong and weak solutions）](Strong-and-weak-solutions.md)及 SDE 定义理解。[^1]

## 证明的组织

> [!proof]- 证明思路
> 把弱解的联合分布放到初值、Brownian 路径、解路径组成的标准路径空间。对给定 Brownian 路径取解的正则条件分布，并用这个条件分布构造两个条件独立的解副本。构造必须保留“过去不依赖未来 Brownian 增量”的适应性，才能让两个副本在同一合法噪声下成为解。路径唯一性随后迫使两个副本相等，因而条件分布集中在一个路径上。这个路径作为噪声的可测、非预知函数给出强解；比较任意弱解得到依分布唯一性。此处仅说明条件分布与耦合的关键机制，未展开保持适应性和可测选择的完整论证。

Le Gall 在 §8.1 陈述本定理并明确省略证明；本条依据该陈述，不把其转引的原论文说成已核读。Lipschitz 情形可直接用 [Picard 存在唯一性证明（Existence and uniqueness of SDEs）](Existence-and-uniqueness-of-SDEs.md)，不必依赖本定理的完整一般证明。

## 两个假设各自的作用

仅有路径唯一性不提供任何解；仅有弱存在与依分布唯一，也不提供同一噪声下的唯一性。Tanaka 方程 $dX=\operatorname{sgn}_{-}(X)dB$ 的弱唯一而路径不唯一现象见[强解与弱解（Strong and weak solutions）](Strong-and-weak-solutions.md)。因此这几个结论不能互相替代。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall, Brownian Motion, Martingales, and Stochastic Calculus, Graduate Texts in Mathematics 274, Springer, 2016. §8.1，未编号的 Yamada–Watanabe 定理，印刷页212；原书此处明确省略证明。
