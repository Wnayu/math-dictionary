---
title: "集合与函数的截面（Sections of sets and functions）"
aliases:
  - "集合与函数的截面"
  - "Sections of sets and functions"
  - "截面可测性"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



截面把乘积空间中的对象固定一个坐标，变成另一个空间中的对象。截面的可测性是迭代积分能够成立的第一步。

## 定义

给定可测空间 $(X,\mathcal A)$、$(Y,\mathcal B)$。对 $E\subseteq X\times Y$，定义
$$
E_x=\{y\in Y:(x,y)\in E\},\qquad
E^y=\{x\in X:(x,y)\in E\}.
$$
对函数 $f:X\times Y\to\mathbb C$，相应截面为 $f_x(y)=f(x,y)$、$f^y(x)=f(x,y)$。[^1]

## 可测性定理

以 $\mathcal A\otimes\mathcal B$ 表示[乘积 σ-代数（Product sigma-algebra）](Product-sigma-algebra.md)。若 $E\in\mathcal A\otimes\mathcal B$，则每个 $E_x\in\mathcal B$、每个 $E^y\in\mathcal A$。若 $f$ 对乘积 σ-代数可测，则所有截面函数都可测。这里不需要先指定测度。[^1]

> [!proof]- σ-代数方法
> 固定 $x$，截面操作保持补集与可数并。所有截面可测的集合因此组成 σ-代数，且包含每个可测矩形：$(A\times B)_x$ 等于 $B$ 或空集。所以它包含整个乘积 σ-代数。实值函数情形由 $\{y:f_x(y)>a\}=(\{f>a\})_x$ 得到；复值函数分别对[实部与虚部（real and imaginary parts）](Measurable-function.md)应用这一结论。

## 例

若 $E=\{(x,y)\in(0,1)^2:y<x\}$，则 $E_x=(0,x)$，所以 $m(E_x)=x$，这里 $m$ 是一维 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)；积分后得到三角区域面积 $1/2$。

## 截面可测性与联合可测性

函数的联合可测性（joint measurability）指 $f$ 作为 $(X\times Y,\mathcal A\otimes\mathcal B)$ 上的函数可测；分别可测性（separate measurability）指每个 $f_x$ 对 $\mathcal B$ 可测且每个 $f^y$ 对 $\mathcal A$ 可测。集合 $E$ 的相应术语可通过其[指示函数（indicator function）](Measurable-function.md) $1_E$ 理解。

**注**：“所有截面可测”一般不足以推出联合可测，不能因此直接应用 Fubini。若 $E$ 只在乘积测度的完备化中可测，截面可测性通常只能在相应的几乎处处意义下保证；特殊零测度坐标处的截面可以是不可测集。参见[完备化乘积测度（Completed product measure）](Completed-product-measure.md)中的竖线例子。

## 相关词条

[乘积σ-代数（Product sigma-algebra）](Product-sigma-algebra.md) · [Tonelli定理（Tonelli theorem）](Tonelli-theorem.md) · [Fubini定理（Fubini theorem）](Fubini-theorem.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. 引理11.1、例11.5。
