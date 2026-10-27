---
title: "条件独立（Conditional independence）"
aliases: ["条件独立", "Conditional independence"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



条件独立表示在给定信息以后联合条件概率可以分解。增加信息可能创造或破坏独立性。

## 定义

设 $\mathcal A,\mathcal B,\mathcal G$ 为同一概率空间的子 σ-代数。称 $\mathcal A$ 与 $\mathcal B$ 在给定 $\mathcal G$ 下条件独立，记 $\mathcal A\perp\!\!\!\perp\mathcal B\mid\mathcal G$，若对每个 $A\in\mathcal A,B\in\mathcal B$，
$$
\mathbb E[1_A1_B\mid\mathcal G]=\mathbb E[1_A\mid\mathcal G]\mathbb E[1_B\mid\mathcal G]\quad\text{a.s.}
$$
随机变量 $X,Y$ 条件独立指 $\sigma(X),\sigma(Y)$ 满足此条件。这里每个固定 $(A,B)$ 的等式都是几乎必然等式，不先假定存在对所有集合共同适用的逐点版本。[^1]

## 等价积分判据

上述条件等价于对所有有界 $\mathcal A$-可测 $U$ 和有界 $\mathcal B$-可测 $V$，
$$
\mathbb E[UV\mid\mathcal G]=\mathbb E[U\mid\mathcal G]\mathbb E[V\mid\mathcal G].
$$

> [!proof]- 证明
> 定义先给出指示函数的等式。固定一个指示函数后，用线性性推广另一个变量的简单函数，再以一致有界的简单函数逐点逼近，并用[条件期望（Conditional expectation）](Conditional-expectation.md)的控制收敛性质取极限。对另一个变量重复此过程。反方向直接取 $U=1_A,V=1_B$。

## 条件化可以破坏独立性

令 $X,Y$ 独立且各以概率 $1/2$ 取 $0,1$，令 $Z=(X+Y)\bmod2$。给定 $Z=0$ 时，$X=Y$，并且
$$
P(X=0,Y=0\mid Z=0)=\tfrac12\ne\tfrac14=P(X=0\mid Z=0)P(Y=0\mid Z=0).
$$
故无条件独立不推出给定 $Z$ 后独立。

反方向也失败：设 $X=Y=Z$ 为非退化 Bernoulli 变量。给定 $\sigma(Z)$ 后，所有有关 $X,Y$ 的事件已知，条件期望中的指标乘法自动分解；但 $X,Y$ 无条件不独立。

## 与 Markov 性的关系

[Markov 性（Markov property）](Markov-process.md)把“给定现在以后，未来不再需要过去的信息”写成条件期望恒等式。条件独立给这种陈述一个精确的可测结构解释；应用时仍要明确过去、现在和未来各自生成的 σ-代数。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §4.1的条件期望方法与§5.2的Markov条件化；本条定义、等价判据及两个有限样本反例据这些方法展开，不归为书中某个同名定理。
