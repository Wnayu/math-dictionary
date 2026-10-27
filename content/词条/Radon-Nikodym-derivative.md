---
title: "Radon–Nikodym 导数（Radon–Nikodym derivative）"
aliases:
  - "Radon–Nikodym 导数"
  - "Radon–Nikodym derivative"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Radon–Nikodym 导数是一个测度相对于另一个测度的密度；它由对所有可测集的积分恒等式定义，通常只确定到几乎处处相等，而不是一个点态唯一的函数。[^1]

## 定义

设 $\mu$ 是可测空间 $(X,\mathcal A)$ 上的非负测度，$\nu$ 是同一空间上的非负、有符号或复测度。若可测函数 $f$ 满足
$$
\nu(E)=\int_Ef\,d\mu\qquad(E\in\mathcal A),
$$
且这些积分合法，则记 $f=d\nu/d\mu$，或 $d\nu=f\,d\mu$；后一写法也就是[密度定义的测度（Measure defined by a density）](Weighted-measure.md) $\nu=f\mu$。非负 $\nu$ 可取 $f\geq0$；有限有符号或复测度的密度属于[可积函数空间（space of integrable functions）](Lp-space.md) $L^1(\mu)$。在 $\mu$ 为 $\sigma$-有限时，密度若存在便 $\mu$-几乎处处唯一。[^1][^2]

**注**：[Radon–Nikodym 定理（Radon–Nikodym theorem）](Radon-Nikodym-theorem.md)给出存在条件。[测度微分（Differentiation of measures）](Differentiation-of-measures.md)则研究能否用小球质量比逐点求出该密度，是另一个层次的问题。

## 换测度积分与链式法则

若 $\nu,\mu$ 为 $\sigma$-有限非负测度且 $\nu\ll\mu$（[测度的绝对连续性（Absolute continuity of measures）](Absolute-continuity-of-measures.md)），则对非负可测 $g$，或 $g\in L^1(\nu)$，
$$
\int g\,d\nu=\int g\frac{d\nu}{d\mu}\,d\mu.
$$
若进一步 $\mu\ll\lambda$，$\lambda$ 也为 $\sigma$-有限非负测度，则
$$
\frac{d\nu}{d\lambda}
=\frac{d\nu}{d\mu}\frac{d\mu}{d\lambda}
\quad\lambda\text{-a.e.}
$$
密度取有限值的版本，并在 $d\mu/d\lambda=0$ 处令乘积为零。若 $\mu,\lambda$ [等价（equivalent measures）](Absolute-continuity-of-measures.md)，即 $\mu\ll\lambda$ 且 $\lambda\ll\mu$，则相应两个导数的乘积等于 $1$，对二者都几乎处处成立。[^1]

换测度积分公式是[密度定义的测度（Measure defined by a density）](Weighted-measure.md)中的一般公式；其指示函数、简单函数及单调逼近证明集中在该词条。

> [!proof]- 链式法则
> 记 $f=d\nu/d\mu$、$h=d\mu/d\lambda$。对任意可测集 $E$，使用换测度积分公式得到
> $$
> \nu(E)=\int_E f\,d\mu=\int_E fh\,d\lambda.
> $$
> 因此 $fh$ 是 $\nu$ 相对于 $\lambda$ 的密度；由密度的几乎处处唯一性，得到所述链式法则。在 $h=0$ 处按前述约定令乘积为零。

## 例

在 $\mathbb N$ 的幂集上，以 $\#$ 表示[计数测度（Counting measure）](Counting-measure.md)，则 $d\nu/d\#(n)=\nu(\{n\})$。在 $[0,1]$ 上，以 $m$ 表示 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)，$dx=dm(x)$，令 $\nu(E)=\int_E2x\,dx$，则 $d\nu/dm=2x$；改变这个函数在单点上的值不改变 $\nu$。

## 密度的几乎处处唯一性

若参考测度不 $\sigma$-有限，唯一性可能失败：单点空间上取 $\mu(\{x\})=\infty$，密度 $f(x)=1$ 与 $g(x)=2$ 产生同一个测度，却不几乎处处相等。[^2]

## 相关词条

[RN定理（Radon–Nikodym theorem）](Radon-Nikodym-theorem.md) · [测度微分（Differentiation of measures）](Differentiation-of-measures.md) · [绝对连续（absolute continuity）](Absolute-continuity-of-measures.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Gerald B. Folland，*Real Analysis: Modern Techniques and Their Applications*，2nd ed.，Wiley，1999，Proposition 3.9；Corollary 3.10；第91页。
[^2]: Chen Wang，*Notes on Real Analysis*，个人笔记，式 (1.3)–(1.5)；Exercises 1.37、1.39。
