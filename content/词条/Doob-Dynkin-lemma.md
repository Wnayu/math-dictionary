---
title: "Doob–Dynkin 引理（Doob–Dynkin lemma）"
aliases: ["Doob-Dynkin lemma", "因子分解引理"]
tags: [measure-theory]
type: theorem
draft: false
publish: true
status: needs-review
verified: false
---



Doob–Dynkin 引理把“只依赖于随机变量 $X$ 提供的信息”表达为“是 $X$ 的某个可测函数”。它说明了[生成 σ-代数（Generated sigma-algebra）](Generated-sigma-algebra.md)的具体含义。[^1]

## 定理

设 $X:\Omega\to\mathbb R^d$，$Y:\Omega\to\mathbb R$。则 $Y$ 对 $\sigma(X)$ 可测，当且仅当存在 Borel 函数 $g:\mathbb R^d\to\mathbb R$ 使 $Y=g\circ X$。

这里 $\sigma(X)=\{X^{-1}(B):B\in\mathcal B(\mathbb R^d)\}$ 是 $X$ 的[生成 σ-代数（Generated sigma-algebra）](Generated-sigma-algebra.md)，$\mathcal B(\mathbb R^d)$ 为 [Borel σ-代数（Borel sigma-algebra）](Borel-sigma-algebra.md)；$X^{-1}(B)$ 是原像，$(g\circ X)(\omega)=g(X(\omega))$ 为复合，记号见[可测函数（Measurable function）](Measurable-function.md)。

**注**：这里是逐点等式，使用的是实际的 $\sigma(X)$。

> [!proof]- 证明
> 以下 $1_A$ 表示集合 $A$ 的[指示函数（Indicator function）](Measurable-function.md)。反向由可测映射的复合立即成立。正向对指示函数先证明：$\{X^{-1}(B):B\text{ Borel}\}$ 本身为 σ-代数，故若 $Y=1_A$，$A\in\sigma(X)$，就有 $A=X^{-1}(B)$，于是 $Y=1_B(X)$。对简单函数线性组合，再对非负函数取递增简单逼近 $Y_n=g_n(X)$。令 $g$ 在 $g_n$ 有有限极限的点取该极限，其余点取零；该集合为 Borel，且在 $X(\Omega)$ 上极限等于 $Y$。一般实函数分解正负部。向量值版本逐坐标进行。

## 条件期望中的应用

在概率空间上，若 $Y$ 可积，$\mathbb E[Y\mid X]$ 是[条件期望（Conditional expectation）](Conditional-expectation.md) $\mathbb E[Y\mid\sigma(X)]$ 的简写。取一个 $\sigma(X)$-可测[版本（Version）](Almost-everywhere.md)后，可表示为 $g(X)$。

**注**：若只知道对完备化后的 σ-代数可测，通常得到的是几乎必然等于某个 $g(X)$，不能无条件要求逐点相等。

例如 $X$ 只取两值，则任何 $\sigma(X)$-可测实函数在两个纤维上分别为常数；纤维（fiber）是单点的原像，具体为 $X^{-1}(\{a\})=\{\omega:X(\omega)=a\}$，其中 $a$ 遍历 $X$ 的两个取值。一般定义见[可测函数（Measurable function）](Measurable-function.md)。这与[简单函数（Simple function）](Simple-function.md)和分割条件期望的公式一致。

## 参考文献

[^1]: Chen Wang, Notes on Lévy Processes and Stochastic Calculus，个人笔记，附录 Review of measure and probability。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
