---
title: "Markov 不等式（Markov inequality）"
aliases:
  - "Markov 不等式"
  - "Markov inequality"
  - "Chebyshev 不等式"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Markov 不等式把函数的积分大小转化为超水平集的测度界。它不需要概率归一化，因此也是一般测度论的基本工具。

## 陈述

在测度空间 $(X,\mathcal A,\mu)$ 上，若 $f\ge0$ 可测，$a>0$，则
$$
\mu\{f\ge a\}\le\frac1a\int f\,d\mu.
$$
这里 $\{f\ge a\}=\{x\in X:f(x)\ge a\}$ 为[水平集（level set）](Measurable-function.md)，积分区域默认为 $X$。对任意可测实值或复值 $g$ 和 $p>0$，应用于 $|g|^p$ 得到
$$
\mu\{|g|\ge a\}\le a^{-p}\int|g|^p\,d\mu.
$$

**注**：Bass 的 Chebyshev 引理列出 $p\ge1$ 的版本；同一证明实际适用于所有 $p>0$。[^1]

> [!proof]- 一行证明
> 记 $1_{\{f\ge a\}}$ 为该集合的[指示函数（indicator function）](Measurable-function.md)。点态不等式 $a1_{\{f\ge a\}}\le f$ 两端积分即可；对 $|g|^p$ 使用阈值 $a^p$。

## 概率形式与应用

在[概率测度（Probability measure）](Probability-measure.md)下，若随机变量 $Z$ 有有限方差，则
$$
P(|Z-EZ|\ge a)\le\frac{\operatorname{Var}(Z)}{a^2},
$$
其中 $EZ=\int Z\,dP$ 为期望，期望记号见[概率测度（Probability measure）](Probability-measure.md)；$\operatorname{Var}(Z)=\mathbb E|Z-\mathbb EZ|^2$ 为[方差（variance）](Covariance.md)。这通常称为 Chebyshev 不等式。对任意测度空间，[Lp 空间（Lp space）](Lp-space.md)中的 $L^p$ 收敛（$p>0$）也蕴含[依测度收敛（Convergence in measure）](Convergence-in-measure.md)；相应的阈值估计与证明集中在该词条。

例。在 $[0,1]$ 的[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)下，$g(x)=x$，阈值 $a=1/2$ 时，实际超水平集测度为 $1/2$，而 $p=1$ 的上界为 $1$。这说明该不等式提供稳健上界，但通常不是精确值。

**注**：积分无穷时不等式仍成立，只是不能给出有限控制。

## 相关词条

[Lebesgue积分（Lebesgue integral）](Lebesgue-integral.md) · [Lp空间（Lp space）](Lp-space.md) · [积分零判别（Zero integral criterion）](Integral-zero-criterion.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Lemma 10.4；Proposition 10.5。
