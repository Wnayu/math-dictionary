---
title: "乘积测度（Product measure）"
aliases:
  - "乘积测度"
  - "Product measure"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



乘积测度把矩形的面积公式推广到一般测度空间：一个坐标方向的测度与另一个坐标方向的测度相乘。它提供多重积分以及[概率独立性（independence）](Independence.md)的自然空间。

## 存在与唯一性

设 $(X,\mathcal A,\mu)$、$(Y,\mathcal B,\nu)$ 都是 σ-有限测度空间。以 $\mathcal A\otimes\mathcal B$ 表示 $X\times Y$ 上的[乘积 σ-代数（Product sigma-algebra）](Product-sigma-algebra.md)。则存在唯一测度 $\mu\otimes\nu:\mathcal A\otimes\mathcal B\to[0,\infty]$ 满足
$$
(\mu\otimes\nu)(A\times B)=\mu(A)\nu(B),
\qquad A\in\mathcal A,\ B\in\mathcal B,
$$
其中 $0\cdot\infty=0$。所得乘积测度仍是 σ-有限的。[^1][^2]

## 构造

对 $E\in\mathcal A\otimes\mathcal B$，定义[截面（section of a set）](Section-of-a-set.md) $E_x=\{y\in Y:(x,y)\in E\}$。可证明 $x\mapsto\nu(E_x)$ 可测，并令
$$
(\mu\otimes\nu)(E)=\int_X\nu(E_x)\,d\mu(x).
$$
用[简单函数逼近（simple function approximation）](Simple-function-approximation.md)和[单调收敛（monotone convergence）](Monotone-convergence-theorem.md)，进一步得到[Tonelli 定理（Tonelli theorem）](Tonelli-theorem.md)。另一条构造路线是在有限个两两不交矩形的并上定义[前测度（premeasure）](Premeasure.md)，再用 [Carathéodory 扩张（Carathéodory extension）](Caratheodory-extension-theorem.md)。

> [!proof]- σ-有限性与唯一性说明
> 取 $X=\bigcup_iX_i$、$Y=\bigcup_jY_j$，其中各项测度有限。矩形 $X_i\times Y_j$ 给出乘积空间的可数有限测度覆盖。在每个这样的有限测度矩形内，用矩形构成的 [π-系（pi-system）](Pi-lambda-theorem.md)和[测度唯一性定理（uniqueness theorem for measures）](Uniqueness-of-measures.md)确定测度，再令覆盖递增到整个空间。

## 例

自然数上两个计数测度的乘积是 $\mathbb N^2$ 上的计数测度；两个 [Dirac 测度（Dirac measures）](Dirac-measure.md)的乘积满足 $\delta_a\otimes\delta_b=\delta_{(a,b)}$，右边为点 $(a,b)$ 处的单位点质量。一维 Borel Lebesgue 测度的有限乘积为高维 Borel Lebesgue 测度。

**注**：即使两个因子都完备，未经完备化的乘积也可能不完备。矩形公式与完备化是两个不同步骤。没有 σ-有限性时，不能直接引用本条的唯一性或交换积分结论。

## 相关词条

[乘积σ-代数（Product sigma-algebra）](Product-sigma-algebra.md) · [测度唯一性（Uniqueness of measures）](Uniqueness-of-measures.md) · [完备化乘积测度（Completed product measure）](Completed-product-measure.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，式 (11.2)–(11.3)（Proposition 11.2）；第93页。

[^2]: Chen Wang，*Notes on Real Analysis*，个人笔记，Theorem 1.27。
