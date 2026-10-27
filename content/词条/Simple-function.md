---
title: "简单函数（Simple function）"
aliases:
  - "简单函数"
  - "Simple function"
  - "阶梯函数"
  - "Step function"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



简单函数只取有限个值，因此它的积分可由有限次加法定义。一般的[非负积分（integral of a nonnegative function）](Lebesgue-integral.md)由简单函数从下逼近得到。

## 定义

可测空间 $(X,\mathcal A)$ 上的简单函数是有限值域的实值或复值[可测函数（Measurable function）](Measurable-function.md)。等价地，它可写为
$$
s=\sum_{j=1}^m a_j1_{E_j},\qquad E_j\in\mathcal A.
$$
这里 $1_{E_j}$ 是在 $E_j$ 上取 $1$、其余点取 $0$ 的[指示函数（indicator function）](Measurable-function.md)，也记作 $\mathbf1_{E_j}$；$m$ 是有限项数。规范表示取 $a_j$ 为不同函数值、$E_j=\{s=a_j\}$；此时各 $E_j$ 两两不交。[^1][^2]

**注**：本词条默认简单函数的系数有限。非负函数可以取 $+\infty$，但逼近它的简单函数仍可取有限值。

## 与阶梯函数的关系

实直线上，阶梯函数（step function）指存在有限个分割点，使函数在相邻分割点之间的每个开区间上为常数（若定义域为全实线，也包括两端的无界区间），分割点处可以单独赋有限值。它只有有限个函数值，故是简单函数；但一般简单函数的水平集 $\{x:s(x)=a\}$ 仅要求可测，不要求由这些区间和端点组成。因此简单函数不必是阶梯函数。区间分割及其上、下阶梯逼近见 [Riemann 与 Lebesgue 积分（Riemann and Lebesgue integrals）](Riemann-Lebesgue-comparison.md)。

## 积分

若 $a_j\ge0$，定义
$$
\int s\,d\mu=\sum_j a_j\mu(E_j),\qquad 0\cdot\infty:=0.
$$
例如在实直线的 Lebesgue 测度下，$s=2\,1_{[0,1]}+3\,1_{(1,2]}$ 的积分是 $5$。在[计数测度（Counting measure）](Counting-measure.md)下，积分就是函数值的求和。

> [!proof]- 表示无关性
> 对两个表示所用的有限集合族取共同的[有限可测分割（finite measurable partition）](Set-algebra.md)。在每个分割单元上，两种表示的系数和都等于同一个函数值。利用有限可加性把各项积分分拆到共同分割上，再求和，就得到相同结果。

**注**：简单不等于阶梯：$1_{\mathbb Q}$ 是简单函数，但它的水平集不是有限个区间。简单函数也未必可积：$1_{\mathbb R}$ 只有一个值，却在 Lebesgue 测度下有无穷积分。对于有限系数的简单函数，可积当且仅当每个非零水平集有有限测度。

## 相关词条

[简单函数逼近（approximation by simple functions）](Simple-function-approximation.md) · [可积函数（Integrable function）](Integrable-function.md) · [单调收敛定理（Monotone convergence theorem）](Monotone-convergence-theorem.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Definition 5.13；式 (6.1)、(6.5)；Exercise 6.2。

[^2]: Chen Wang，*Notes on Real Analysis*，个人笔记，Definition 1.29(1)。
