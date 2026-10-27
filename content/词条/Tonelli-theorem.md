---
title: "Tonelli 定理（Tonelli theorem）"
aliases:
  - "Tonelli 定理"
  - "Tonelli theorem"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Tonelli 定理允许非负函数自由交换积分次序，即使积分值无穷。它也是检查一般函数是否绝对可积的常用方法。

## 定理

设 $(X,\mathcal A,\mu)$、$(Y,\mathcal B,\nu)$ 都 σ-有限，$f:X\times Y\to[0,\infty]$ 对[乘积 σ-代数（Product sigma-algebra）](Product-sigma-algebra.md) $\mathcal A\otimes\mathcal B$ 可测。记 $\mu\otimes\nu$ 为[乘积测度（Product measure）](Product-measure.md)。则[函数截面（sections of functions）](Section-of-a-set.md)及其非负积分可测，且
$$
\int_{X\times Y}f\,d(\mu\otimes\nu)
=\int_X\left(\int_Yf(x,y)\,d\nu(y)\right)d\mu(x)
=\int_Y\left(\int_Xf(x,y)\,d\mu(x)\right)d\nu(y).
$$
三者允许同为 $+\infty$。[^1][^2]

> [!proof]- 从集合到函数
> 指示函数的结论是乘积测度的截面公式。有限非负线性组合给出简单函数的结论；再取非负简单函数 $s_n\uparrow f$，对内外积分分别使用单调收敛，便得到一般情形。

## 应用

取 $Y=\mathbb N$ 并配备计数测度，可得到非负函数级数的逐项积分。若 $f$ 有正负号，可以先对 $|f|$ 用本定理；一旦任意一个迭代的绝对积分有限，即可改用[Fubini 定理（Fubini theorem）](Fubini-theorem.md)。

## 迭代积分与 σ-有限性

在 $[0,1]^2$ 上，第一坐标取 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md) $m$，第二坐标取不可数集合上的[计数测度（Counting measure）](Counting-measure.md) $\#$。对角线 $D=\{(x,y)\in[0,1]^2:x=y\}$ 为 Borel 集，以 $1_D$ 表示其[指示函数（indicator function）](Measurable-function.md)，但
$$
\int_0^1\left(\int1_D(x,y)\,d\#(y)\right)dm(x)=1,
$$
$$
\int\left(\int_0^11_D(x,y)\,dm(x)\right)d\#(y)=0.
$$
计数测度在这里不 σ-有限，因此没有违反本定理。[^1]

## 相关词条

[乘积测度（Product measure）](Product-measure.md) · [单调收敛定理（Monotone convergence theorem）](Monotone-convergence-theorem.md) · [层蛋糕公式（Layer-cake formula）](Layer-cake-formula.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. 定理11.3的非负部分；习题11.10。

[^2]: Chen Wang, Notes on Real Analysis, 个人笔记。 §1.3，Fubini–Tonelli theorem。
