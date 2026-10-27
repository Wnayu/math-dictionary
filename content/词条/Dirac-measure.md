---
title: "Dirac 测度（Dirac measure）"
aliases:
  - "Dirac 测度"
  - "Dirac measure"
  - "点质量"
  - "Point mass"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Dirac 测度（Dirac measure，也称点质量 point mass）把全部质量放在指定点，是最简单的概率测度和离散测度的基本组成部分。

## 定义

给定可测空间 $(X,\mathcal A)$ 及 $a\in X$，定义
$$
\delta_a(E)=\mathbf1_E(a)=\begin{cases}1,&a\in E,\\0,&a\notin E,\end{cases}\qquad E\in\mathcal A.
$$

这里 $\mathbf1_E$ 为 $E$ 的[指示函数（Indicator function）](Measurable-function.md)，在 $E$ 上取 $1$、其余处取 $0$。

**注**：即使单点 $\{a\}$ 不可测，这个定义仍成立，因为只在 $E\in\mathcal A$ 上赋值。[^1][^2]

> [!proof]- 测度公理
> 空集不包含 $a$，故 $\delta_a(\varnothing)=0$。若 $E_n$ 两两不交，则 $a$ 至多属于其中一个，因此 $\mathbf1_{\cup_n E_n}(a)=\sum_n\mathbf1_{E_n}(a)$。此外 $\delta_a(X)=1$，所以它是概率测度。

## 积分与离散测度

对非负可测函数或 $\delta_a$-可积函数，
$$
\int_Xf\,d\delta_a=f(a).
$$
对简单函数直接由定义验证，再用单调逼近推广到非负函数；可积函数用正负部分处理。

称能写成下述可数点质量之和的非负测度为离散测度（discrete measure）。若 $w_n\ge0$，则 $\mu=\sum_nw_n\delta_{a_n}$ 是测度，且非负可测函数满足 $\int f\,d\mu=\sum_nw_nf(a_n)$，其中采用非负积分的 $0\cdot\infty=0$ 约定。若 $\sum_nw_n=1$，它是[离散概率分布（Discrete probability distribution）](Law-of-a-random-variable.md)。

## 点质量与可测结构

在 $\{a,b,c\}$ 的幂集上，$\delta_a(\{a,c\})=1$、$\delta_a(\{b,c\})=0$。

**注**：但是不同点不一定给出不同测度：若 $\mathcal A=\{\varnothing,X\}$，则所有点的 Dirac 测度都相同，因为可测集合不能区分这些点。

**注**：在有可测单点的空间中，$\delta_a$ 几乎处处成立的性质，只需在点 $a$ 成立并具有合适的可测零集例外描述。对任意可测空间，仍应按[几乎处处（Almost everywhere）](Almost-everywhere.md)的定义检查，不能忽略可测性。

在单点可测的空间，正的点质量给出[测度原子（Atom of a measure）](Atoms.md)；一般可测原子未必是单点。

## 相关词条

[概率测度（Probability measure）](Probability-measure.md) · [计数测度（Counting measure）](Counting-measure.md) · [Lebesgue 积分（Lebesgue integral）](Lebesgue-integral.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Examples 3.3–3.4；Exercise 6.4。

[^2]: Chen Wang，*Notes on Real Analysis*，个人笔记，Examples 1.17、1.19。
