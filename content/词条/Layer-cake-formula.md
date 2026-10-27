---
title: "层蛋糕公式（Layer-cake formula）"
aliases:
  - "层蛋糕公式"
  - "Layer-cake formula"
  - "尾积分公式"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



层蛋糕公式把非负函数的积分写成各个超水平集测度的积分。它把函数的高度分布与积分矩 $\int|f|^p\,d\mu$ 联系起来（概率测度下称为[绝对矩（absolute moment）](Expectation.md)），在概率论中对应尾积分公式。

## 公式

设 $(X,\mathcal A,\mu)$ σ-有限，$f:X\to[0,\infty]$ 可测，则
$$
\int_X f\,d\mu=\int_0^\infty\mu\{x:f(x)>t\}\,dt.
$$
更一般地，对 $p>0$，
$$
\int_Xf^p\,d\mu
=p\int_0^\infty t^{p-1}\mu\{f>t\}\,dt.
$$
这里 $\{f>t\}=\{x\in X:f(x)>t\}$ 为[超水平集（superlevel set）](Measurable-function.md)，$dt$ 表示参数半轴上的[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)。两边允许为无穷。此处给出的是[Tonelli 定理（Tonelli theorem）](Tonelli-theorem.md)的直接推论。[^1]

> [!proof]- 对函数下方区域积分
> 点态上有
> $$
> f(x)=\int_0^\infty1_{\{t<f(x)\}}\,dt.
> $$
> 这里 $1_{\{t<f(x)\}}$ 是上述条件的[指示函数（indicator function）](Measurable-function.md)。集合 $\{(x,t)\in X\times(0,\infty):t<f(x)\}$ 对乘积 σ-代数可测，例如可写为所有正有理数 $q$ 对应的 $\{f>q\}\times(0,q)$ 的可数并。对该非负指示函数用 Tonelli，交换两个积分即可。用 $f(x)^p=\int_0^{f(x)}pt^{p-1}\,dt$ 得到第二式。

## 例

取 $(0,1)$ 上的 Lebesgue 测度 $m$，令 $f(x)=x^{-\alpha}$、$\alpha>0$。对 $0<t<1$，$m\{f>t\}=1$；对 $t\ge1$，该测度为 $t^{-1/\alpha}$。于是
$$
\int_0^1x^{-\alpha}dx=1+\int_1^\infty t^{-1/\alpha}dt,
$$
恰在 $\alpha<1$ 时有限。

## 概率形式

概率空间上对非负随机变量 $Z$，公式变成 $EZ=\int_0^\infty P(Z>t)dt$，其中 $EZ$（也写 $\mathbb EZ$）为[期望（expectation）](Expectation.md)。它给出精确等式；[Markov 不等式（Markov inequality）](Markov-inequality.md)则由积分矩反向控制单个[尾概率（tail probability）](Expectation.md) $P(Z>t)$。

## 相关词条

[Lebesgue积分（Lebesgue integral）](Lebesgue-integral.md) · [乘积测度（Product measure）](Product-measure.md) · [概率测度（Probability measure）](Probability-measure.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Exercise 11.5；Theorem 11.3(a)。
