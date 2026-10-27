---
title: "限制测度（Restricted measure）"
aliases:
  - "限制测度"
  - "Restricted measure"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



限制测度（restricted measure）只保留原测度在一个可测区域中的质量。它既可作为原空间上的新测度，也可作为该区域自身的测度。

## 定义

设 $(X,\mathcal A,\mu)$ 是测度空间，$A\in\mathcal A$。在原空间上定义
$$
(\mu|_A)(E)=\mu(E\cap A),\qquad E\in\mathcal A.
$$
此处 $\mu|_A:\mathcal A\to[0,\infty]$ 仍定义在原空间 $(X,\mathcal A)$ 上。交运算保持不交可数并，因此它是测度。在子空间 $(A,\mathcal A|_A)$ 上，也可写 $\mu|_A(B)=\mu(B)$，其中 $B\in\mathcal A|_A=\{E\cap A:E\in\mathcal A\}$。$\mathcal A|_A$ 称为迹 σ-代数（trace sigma-algebra），见[可测空间（Measurable space）](Measurable-space.md)；在这一解释下，限制测度的定义域是 $\mathcal A|_A$。由于 $A$ 可测，每个这样的 $B$ 都在原测度定义域内。[^1][^2]

## 积分关系

对非负可测函数，或满足相应可积条件的函数，
$$
\int_X f\,d(\mu|_A)=\int_X f\mathbf1_A\,d\mu=\int_A f\,d\mu.
$$
其中 $\mathbf1_A$ 是 $A$ 的[指示函数（indicator function）](Measurable-function.md)。在原空间的解释下，也可写 $\mu|_A=\mathbf1_A\mu$，这是[由密度定义的测度（measure defined by a density）](Weighted-measure.md)的特例。若 $\mu(A)<\infty$，限制测度有限；若 $0<\mu(A)<\infty$，再除以 $\mu(A)$ 可得到集中在 $A$ 中的概率测度。这里“集中在 $A$”指该新测度对 $X\setminus A$ 赋值为零，见[测度的集中与支撑（concentration and support of a measure）](Support-of-a-measure.md)；除以总质量的操作称为[归一化（normalization）](Probability-measure.md)。

## 例

把实直线的 Lebesgue 测度限制到 $[0,1]$，就是区间上的[均匀概率（uniform probability）](Law-of-a-random-variable.md)。把 [Dirac 测度（Dirac measure）](Dirac-measure.md) $\delta_a$ 限制到 $A$，若 $a\in A$ 得到原点质量；若 $a\notin A$ 得到零测度。

## 区域限制与定义域限制

**注**：可测结构的迹 $\mathcal A|_S$ 对任意子集 $S$ 都能定义，但当 $S$ 不可测时，$\mu(E\cap S)$ 未必有意义。另一个常见操作是把测度限制到更小的 $\sigma$-代数 $\mathcal G\subseteq\mathcal A$，定义 $\mu|_{\mathcal G}:\mathcal G\to[0,\infty]$ 为 $(\mu|_{\mathcal G})(E)=\mu(E)$。这时底层点集仍是 $X$，只缩小可测事件范围，与区域限制 $\mu|_A$ 的交集公式不同。任何子 $\sigma$-代数都允许这种限制，但原测度的 $\sigma$-有限性未必保留，因为原来的有限可测覆盖可能不属于 $\mathcal G$。

## 相关词条

[可测空间（Measurable space）](Measurable-space.md) · [有限测度（Finite measure）](Finite-measure.md) · [概率测度（Probability measure）](Probability-measure.md) · [Lebesgue 积分（Lebesgue integral）](Lebesgue-integral.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Chen Wang，*Notes on Real Analysis*，个人笔记，Example 1.12；式 (1.3)–(1.4)（Exercise 1.36）。

[^2]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Exercises 3.6、11.2。
