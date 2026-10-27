---
title: "Lebesgue 点（Lebesgue point）"
aliases:
  - "Lebesgue 点"
  - "Lebesgue point"
  - "Lebesgue密度定理"
  - "密度点"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Lebesgue 点是局部可积函数在平均意义下接近自身点值的位置。它把连续点的局部稳定性推广到一般可测函数；每个局部可积函数几乎每一点都是 Lebesgue 点。[^1]

## 定义

设 $f\in L^1_{\mathrm{loc}}(\mathbb R^d)$，即 $f$ [局部可积（locally integrable）](Lp-space.md)，并从其[几乎处处等价类（almost-everywhere equivalence class）](Almost-everywhere.md)中选定一个有限值[代表函数（representative function）](Equivalence-relation.md)。考察极限条件
$$
\lim_{r\downarrow0}\frac1{m(B(x,r))}
\int_{B(x,r)}|f(y)-f(x)|\,dy=0,
$$
这里 $m$、$dy$ 表示 $d$ 维 Lebesgue 测度，$B(x,r)$ 是欧氏开球，记号见[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)。满足上述极限条件时，称 $x$ 为 $f$ 的 Lebesgue 点。所有这样的点组成 Lebesgue 集 $L_f$。[^1]

每个连续点都是 Lebesgue 点，因为球上的平均绝对偏差不超过 $\sup_{y\in B(x,r)}|f(y)-f(x)|$，而连续性使此上确界在 $r\downarrow0$ 时趋零。更一般地，[Lebesgue 微分定理（Lebesgue differentiation theorem）](Lebesgue-differentiation-theorem.md)断言 $m(\mathbb R^d\setminus L_f)=0$。

## 与密度点的联系

对 Lebesgue 可测集 $E$，若极限 $D_E(x)=\lim_{r\downarrow0}m(E\cap B(x,r))/m(B(x,r))$ 存在，称它为 $E$ 在 $x$ 的 Lebesgue 密度（Lebesgue density）；$D_E(x)=1$ 的点称为密度点（density point）。此定义对任意 $x\in\mathbb R^d$ 使用，并不预先要求 $x\in E$。令 $f=1_E$ 为 $E$ 的[指示函数（indicator function）](Measurable-function.md)。如果 $x\in E$，Lebesgue 点条件等价于
$$
\lim_{r\downarrow0}\frac{m(E\cap B(x,r))}{m(B(x,r))}=1;
$$
如果 $x\notin E$，则对应极限为零。因此几乎每个属于 $E$ 的点都是密度为一的点，几乎每个补集点都是密度为零的点。这就是 Lebesgue 密度定理，不要求 $E$ 具有有限总测度。[^1]

**注**：“密度为一”不要求它是[拓扑内点（interior point）](Topological-space.md)。例如一个闭的无内点正测度集合，其几乎所有点仍有密度一。

## 与代表函数选择的关系

在一维取 $f=1_{\{0\}}$。它与零函数几乎处处相等，但 $0$ 不是这个代表的 Lebesgue 点，因为平均 $|f(y)-f(0)|$ 等于 $1$；其余点都是 Lebesgue 点。若换成处处为零的代表，所有点都是 Lebesgue 点。

这说明具体 Lebesgue 点集合可能随零集上的修改而变化，而“几乎处处都是 Lebesgue 点”的结论不变。

## 相关词条

[Lebesgue微分定理（Lebesgue differentiation theorem）](Lebesgue-differentiation-theorem.md) · [几乎处处（Almost everywhere）](Almost-everywhere.md) · [测度微分（Differentiation of measures）](Differentiation-of-measures.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Gerald B. Folland，*Real Analysis: Modern Techniques and Their Applications*，2nd ed.，Wiley，1999，Theorems 3.20–3.21；第3章 Exercises 24–25；第97页。
